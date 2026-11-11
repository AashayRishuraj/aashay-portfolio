# Phase 3 — Premium UI upgrade

## Implemented
- Reworked the homepage into a more editorial, recruiter-facing landing page.
- Added a custom CSS/SVG data-visualization hero graphic (illustrative, not project output).
- Added a focus-area section for analytics, machine learning and data foundations.
- Rebuilt project cards with project-specific visual identities for weather, inventory and NLP.
- Improved typography, spacing, surfaces, responsive layouts, hover states and visual hierarchy.
- Added a light/dark theme preference saved in local browser storage.
- Improved navigation accessibility with labelled navigation, current-page state, expanded menu state, Escape-to-close, and a skip-to-content link.
- Preserved the existing project evidence and verification caveats.

## Not yet verified
- `npm install`, lint, typecheck, tests and production build were not completed in this environment because dependency installation timed out and `node_modules` is not present.
- No real project screenshots, datasets, notebooks, certificate verification URLs or production credentials have been added in this phase.
- The hero chart is decorative/illustrative and must not be presented as measured project data.

## Run locally
```bash
npm install
npm run typecheck
npm run lint
npm run test
npm run build
npm run dev
```
