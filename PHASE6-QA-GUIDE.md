# Phase 6 — SEO, Accessibility, Performance & QA

This phase strengthens the portfolio's technical quality while preserving the existing visual design.

## Included in this phase

- Expanded page metadata: title template, description, keywords, author, canonical URL, Open Graph and crawler directives.
- Person structured data (JSON-LD) retained in the root layout.
- Responsive viewport theme metadata.
- Global security headers: frame protection, MIME sniffing protection, referrer policy, DNS prefetch and restricted browser permissions.
- Compression and powered-by header suppression.
- Existing sitemap and robots endpoints retained.
- Existing skip-to-content link retained; the main content landmark is explicitly keyboard-focusable.
- No new runtime dependencies added.

## Local quality checks

Run these from the project root:

```bash
npm install
npm run typecheck
npm run lint
npm run test
npm run build
```

Then run `npm run dev` and manually verify:

1. Every navigation item works with mouse and keyboard.
2. The skip link becomes visible on keyboard focus and moves focus to main content.
3. Browser zoom at 200% does not hide essential content or controls.
4. Pages work at mobile, tablet and desktop widths.
5. Theme switching remains usable and text contrast is comfortable in both themes.
6. Contact form validation and API error states are understandable.
7. `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` and `/api/health` respond as expected.
8. No horizontal overflow appears on common viewport widths.
9. Browser console has no uncaught errors or missing asset requests.

## Before production

- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. Do not leave localhost in production metadata.
- Generate and add a real Open Graph social preview image once the final visual identity is locked.
- Run Lighthouse (mobile and desktop) and address meaningful accessibility, performance, SEO and best-practice findings.
- Verify all claims, project metrics, external links and certification URLs against source evidence.
- Do not expose private datasets, credentials, `.env.local`, or internal files under `public/`.

## Important limitations

A local source-code update does not prove a Lighthouse score, search indexing, live security posture or real-device accessibility. Those require browser testing and the final deployed domain. No scores or compliance claims are fabricated here.
