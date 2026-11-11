# Phase 7 QA checklist

## Included / source-reviewed
- [x] Latest Phase 6 source used as the baseline.
- [x] Profile photo copied to the public images directory.
- [x] Eight supplied PDF documents copied into public certificates.
- [x] Weather project CSV, supplied Python/HTML/CSS/JS files and available image assets included.
- [x] Inventory Python source, requirements and sample workbook included.
- [x] Project case-study data reviewed for unsupported claims; Weather MAE and inventory record count remain explicitly marked as claims pending reproduction.
- [x] Environment example retained; no secrets added.

## Must be tested locally in a browser
- [ ] Home page and profile image load at desktop and mobile widths.
- [ ] Header navigation and mobile menu.
- [ ] Project cards, project detail routes, GitHub links and external links.
- [ ] Resume download and PDF preview.
- [ ] Certificate PDF links.
- [ ] Data Science Lab controls, filters, charts and SQL interactions.
- [ ] Contact form validation, success/error states and spam protection.
- [ ] GitHub showcase loading and fallback state.
- [ ] Keyboard navigation, focus visibility and skip link.

## Requires credentials / deployment
- [ ] Supabase schema applied and contact submissions persisted.
- [ ] Resend sender/domain verified and email notifications delivered.
- [ ] GitHub token configured only if needed.
- [ ] Weather provider API key configured if live weather is enabled.
- [ ] Production build succeeds.
- [ ] Vercel environment variables configured and deployment smoke-tested.

Mark an item complete only after performing the test and observing the expected result.
