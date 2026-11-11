import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(4000),
  website: z.string().optional(), // honeypot; real visitors leave this empty
});

type RateLimitEntry = { count: number; windowStartedAt: number };
const rateLimit = new Map<string, RateLimitEntry>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 4;

function getClientKey(request: Request) {
  // On Vercel, x-forwarded-for is set by the trusted platform proxy.
  // For other hosts, configure a trusted proxy before relying on IP throttling.
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // non-browser clients may omit Origin
  const expected = new URL(request.url).origin;
  return origin === expected;
}

function consumeRateLimit(key: string) {
  const now = Date.now();
  // Keep the in-memory map bounded on long-lived Node instances.
  if (rateLimit.size > 2_000) {
    for (const [entryKey, entry] of rateLimit) {
      if (now - entry.windowStartedAt > WINDOW_MS) rateLimit.delete(entryKey);
    }
  }
  const current = rateLimit.get(key);
  if (!current || now - current.windowStartedAt >= WINDOW_MS) {
    rateLimit.set(key, { count: 1, windowStartedAt: now });
    return true;
  }
  if (current.count >= MAX_REQUESTS) return false;
  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ error: "Message is too large." }, { status: 413 });
  }

  const key = getClientKey(request);
  if (!consumeRateLimit(key)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  // Silently accept bot submissions without storing or emailing them.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const { name, email, subject, message } = parsed.data;
  const hasSupabase = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL);
  if (!hasSupabase && !hasResend) {
    return NextResponse.json(
      { error: "The contact service is not configured yet. Please email Aashay directly." },
      { status: 503 },
    );
  }

  let stored = false;
  let emailed = false;
  const failures: string[] = [];

  if (hasSupabase) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false, autoRefreshToken: false } },
      );
      const { error } = await supabase.from("contact_messages").insert({ name, email, subject, message });
      if (error) throw error;
      stored = true;
    } catch (error) {
      console.error("Contact message storage failed", error);
      failures.push("storage");
    }
  }

  if (hasResend) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL,
          to: [process.env.CONTACT_TO_EMAIL],
          reply_to: email,
          subject: `Portfolio contact: ${subject}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!response.ok) throw new Error(`Resend returned ${response.status}`);
      emailed = true;
    } catch (error) {
      console.error("Contact email notification failed", error);
      failures.push("email");
    }
  }

  if (!stored && !emailed) {
    return NextResponse.json(
      { error: "Your message could not be delivered. Please email me directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, stored, emailed, partialDelivery: failures.length > 0 });
}
