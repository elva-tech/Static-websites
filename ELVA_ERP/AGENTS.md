## ELVA ERP site
- Page copy and module/solution data live in src/content.ts; pages render from it (no per-card files) — keeps content edits in one place.
- Product and solution pages are data-driven via /product/$slug and /solutions/$slug — adding a module is a data change.
- Lead forms are emailed via FormSubmit (endpoint in src/config/formsubmit.ts) — no database or backend involved.
- Unverified company facts (email, phone, address) stay empty in `site` config in content.ts until confirmed.
