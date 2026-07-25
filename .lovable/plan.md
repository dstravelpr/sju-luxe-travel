
This is a large, cross-cutting change. Approve before I execute.

## Section 1 — Canonicals & /es routing

**Problem:** `/en/*` and `/es/*` currently redirect to root, and `SEOHead` emits a fixed canonical no matter the URL. `/es/` pages don't exist as real routes at runtime.

**Changes**
- `src/App.tsx`: Remove the `/es/*` `LangRedirect`. Mount the full `appRoutes` array a second time under a `/es` parent route so every page renders at both `/xxx` and `/es/xxx`. Keep `/en/*` redirect → root (English is the default; `/en/` is only a prerendered variant crawlers reach directly).
- `src/i18n/LanguageContext.tsx`: Detect language from `location.pathname` (`/es/` prefix ⇒ `es`, otherwise `en`). Update `setLanguage` to `navigate()` between prefixed/unprefixed URLs instead of just toggling state. `localPath("/foo")` returns `/es/foo` when the current URL is under `/es`, `/foo` otherwise.
- `src/components/SEOHead.tsx`: Compute canonical dynamically:
  - `/es/[page]` → `https://www.sjuluxetravel.com/es/[page]` (self)
  - root & `/en/[page]` → `https://www.sjuluxetravel.com/[page]`
  - Keep hreflang alternates from what's already emitted; add `titleEs` / `descriptionEs` props so pages can supply Spanish metadata used when language === "es".

## Section 2 — Unique /es titles & descriptions

Wire the Spanish strings the user provided into `SEOHead` on each page that has a `/es/` variant: Home, About, Contact, Blog index, `/destinations`, `/destinations/maldives`, `/destinations/portugal`, `/destinations/mexico`, and the four service pages. Blog posts stay single-language.

## Section 3 — Thin-content expansion

Add 3+ substantive paragraphs (bilingual via translations file) to:
- `src/pages/destinations/Maldives.tsx` — Ideal for PR travelers, best season, SJU Luxe package inclusions, flight routing SJU→MLE via MIA/JFK+DOH/DXB.
- `src/pages/destinations/Portugal.tsx` — Why PR travelers love it, Lisbon/Porto/Algarve/Duero highlights, SJU→LIS/OPO options (TAP via MIA, United via EWR).
- `src/pages/destinations/Mexico.tsx` — Options from PR, direct flights SJU→CUN/MEX, no-passport note for U.S. citizens on domestic-adjacent scenarios (with correct caveat: MX still requires passport; PR→USVI/USA is the no-passport option — clarified accurately).
- `src/pages/About.tsx` — Expanded bio: Daniel's background, NCM Concierge / Travel Leaders host affiliation, specializations, boutique value.

## Section 4 — Internal linking

Add ≥2 contextual links per page where currently sparse:
- Destination pages → `/contact` + relevant service page (Maldives→luna-de-miel; Portugal→cruceros-fluviales; Mexico→viajes-de-lujo).
- `/about` → `/viajes-de-lujo-desde-puerto-rico` + `/contact` inline in the bio.
- `/blog` index already features latest posts; add explicit "Latest" trio confirmed.
- `/privacy` and `/terms` → back-to-home link in intro (bilingual for Privacy; English for Terms since Terms is EN-only).

## Section 5 — Build scripts

`scripts/prerender.js` already emits `/es/xxx` static HTML with correct canonicals — no script changes needed. `generate-sitemap.js` already reads the manifest.

## Out of scope

- No navigation, image, or visual redesign changes.
- Blog posts remain single-language (they already are).
- Terms page stays English-only (no ES prerender variant exists).

## Verification

After edits: run typecheck, then Playwright-check `/es/about` and `/es/destinations/maldives` for correct Spanish `<title>`, self-canonical, and rendered Spanish body.
