# Aashay Rishuraj — Data & Analytics Portfolio

## Included
- Next.js portfolio baseline from Phase 6
- Profile photograph at `public/images/aashay-rishuraj.png`
- Eight supplied certificate / internship PDF documents in `public/certificates/`
- Weather project source/evidence assets and dataset in `public/project-assets/weather/`
- Inventory project source and sample workbook in `public/project-assets/inventory/`
- Three project case studies and existing GitHub links

## Run locally (Windows PowerShell)
1. Install Node.js LTS.
2. Extract this ZIP.
3. Open the `aashay-portfolio` folder in VS Code.
4. Run `npm install`.
5. Copy `.env.example` to `.env.local` only when ready to configure services.
6. Run `npm run dev` and open http://localhost:3000.

Do not paste API keys into chat or commit `.env.local`.

## Important verification notes
- Weather MAE 1.0°C remains labelled as resume-reported, not independently reproduced. The supplied archive was not a readable ZIP in this environment; individual weather files and CSV were included where available.
- Inventory source and workbook are included. The workbook has 99 product rows and 12 columns; verify actual calculations and thresholds before making performance claims.
- Resume Analyzer source is supplied separately in the original upload and is not automatically deployed as a live service by this portfolio. The portfolio case study links to its GitHub repository.
- Contact storage/email, live weather API and any Puter.js services require user-owned credentials and configuration.
- Certificate PDFs are included as supplied; verify issuer names, dates and public share links before publishing if needed.

## Phase 7 QA status
See `PHASE7-QA-CHECKLIST.md`. A code review is not the same as a browser click test. Complete local browser tests and external service tests after installation/configuration.
