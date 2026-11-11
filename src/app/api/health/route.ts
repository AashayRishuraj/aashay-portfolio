import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    services: {
      github: true,
      database: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
      email: Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL),
    },
    // Deliberately never return credentials, keys, hostnames or message data.
    timestamp: new Date().toISOString(),
  }, { headers: { "Cache-Control": "no-store" } });
}
