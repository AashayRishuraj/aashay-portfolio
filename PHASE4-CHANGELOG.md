# Phase 4 — Backend and integrations

## Implemented in source
- GitHub API route fetches the public profile and public, non-fork repositories; response is cached for one hour and returns only fields used by the portfolio.
- Contact API validates and bounds all form fields, checks same-origin browser requests, enforces a small request-size limit, uses a honeypot, and applies a basic per-IP in-memory throttle.
- Contact delivery can store messages in Supabase and/or send notifications through Resend. If one provider succeeds while the other fails, the API reports successful partial delivery rather than losing the successful result.
- Added `/api/health`, which reports whether integrations are configured without exposing secrets.
- Supabase schema enables RLS, creates a timestamp index, and grants no direct anon/authenticated table access.
- `.env.example` documents server-only secrets.

## Required manual setup
1. Create a Supabase project and run `supabase/schema.sql` in its SQL Editor.
2. Copy `.env.example` to `.env.local` and add the Supabase URL and service-role key. Keep `.env.local` private and out of Git.
3. Create a Resend account, verify a sender domain, and configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
4. Optionally add a GitHub personal access token as `GITHUB_TOKEN` to improve API rate limits. Public profile access does not require it.
5. Restart the Next.js server after changing environment variables.

## Verify locally
- `GET http://localhost:3000/api/health`
- `GET http://localhost:3000/api/github`
- Submit a test message through `/contact` after configuring at least one delivery provider.

## Production hardening still required
- The in-memory throttle is per process and is not a distributed rate limiter. Before high-traffic production use, replace it with a shared store or edge/WAF rate limit.
- Add a CAPTCHA/Turnstile challenge if spam becomes an issue.
- Confirm Supabase backups/retention and Resend domain authentication.
- No production credentials are included in this project archive.
