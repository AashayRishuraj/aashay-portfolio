# Phase 5 — Interactive Data Science Lab

## Added
- Replaced the static illustrative lab with an interactive analytics explorer.
- Added channel and month filters that update KPI cards and chart data.
- Added revenue trend, order-volume and channel-mix visualisations using Recharts.
- Added derived summary metrics: total revenue, orders, average order value and return rate.
- Added three editable SQL examples and a lightweight query-structure inspection panel.
- Added analyst interpretation notes and explicit synthetic-data disclosure.
- Kept all charts clearly identified as demonstration data; no project outcomes or real business metrics are implied.

## Deliberately deferred
- Actual project datasets, screenshots, notebooks and model artifacts.
- Real SQL execution, live database connection, Supabase credentials and production email configuration.
- Production deployment and final asset verification.

## Validation
Run locally from the project root:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```
