
## Context

The current app is a single-URL SPA with a client-side language toggle. Any `/en/*` or `/es/*` URL is redirected to the base path via `LangRedirect` in `src/App.tsx`, and `SEOHead` strips those prefixes from canonicals. That means today **there is no real `/es/…` page** — every `/es/` request bounces to `/` and inherits the currently-toggled language's title/description.

Your request treats `/es/` as a distinct indexable variant with its own unique Spanish title, meta description, and self-canonical. To honor Sections 1 & 2 as written, `/es/` must become a real route that renders Spanish content directly (no redirect) and emits Spanish metadata server-side (via prerender). This is an architectural change, so I'm confirming scope before I implement.

## Plan

### Section 1 & 2 — Make `/es/` a real indexable variant

1. Remove the `/es/*` → base redirect in `src/App.tsx`. Keep `/en/*` redirecting to base (English is the canonical/default).
2. Duplicate every `appRoutes` entry under an `/es/…` path. The same route components render, but a new `LocaleContext` forces `lang="es"` for `/es/*` routes (independent of the user's localStorage toggle).
3. Extend `SEOHead`:
   - Detect `/es/` prefix from `useLocation`.
   - Canonical rules exactly as specified:
     - `/es/[page]` → self-canonical `https://www.sjuluxetravel.com/es/[page]`
     - `/en/[page]` and `/[page]` → canonical `https://www.sjuluxetravel.com/[page]`
   - Emit correct `hreflang` alternates (`en`, `es`, `x-default`).
4. Add a `titleEs` / `descriptionEs` prop to `SEOHead`. When rendering under `/es/`, use those instead of the English `title`/`description`. Populate them on:
   - `/` (Index), `/about`, `/contact`
   - `/viajes-de-lujo-desde-puerto-rico`, `/luna-de-miel-de-lujo`, `/cruceros-de-lujo-desde-san-juan`, `/cruceros-fluviales-de-lujo-desde-puerto-rico`
   - `/destinations/maldives`, `/destinations/portugal`, `/destinations/mexico`
   Using the exact strings you supplied, plus equivalent Spanish strings for the three destination pages.
5. Update `scripts/generate-sitemap.js` to emit both `/[page]` and `/es/[page]` entries with `<xhtml:link rel="alternate" hreflang>` pairs. Update `scripts/prerender.js` to prerender the `/es/` routes with `lang="es"` and the Spanish metadata baked into `index.html`, so Googlebot and social crawlers see unique per-locale head tags.
6. Blog posts stay at their existing single URLs (no `/es/` variant) — they're already language-specific by slug, and duplicating them would create real duplicate content. Their canonicals remain self-referential.

### Section 3 — Expand thin pages

- `/destinations/maldives`, `/portugal`, `/mexico`: read the current copy, then add 3+ paragraphs each covering the topics you listed (why it's ideal from PR, best time, what's included, flight connections from SJU, no-passport note for Mexico), plus a visible CTA linking to `/contact`. Spanish copy renders on `/es/destinations/…` via the existing `useLanguage` translations pattern.
- `/about`: audit word count; if under 300 words, extend the bio with Daniel's background, NCM Concierge + Travel Leaders affiliation, agency specialties, and the boutique-vs-DIY value section.

### Section 4 — Internal linking

- Destination pages → add contextual links to `/contact` and to the most relevant service page (Maldives→Luna de Miel, Portugal→Cruceros Fluviales, Mexico→Viajes de Lujo).
- `/about` → add contextual links to `/viajes-de-lujo-desde-puerto-rico` and `/contact` inside the bio prose.
- `/blog` → verify the index links to the 3 most recent posts (it renders all cards; I'll confirm the top-3 are visually prominent and linked).
- Blog posts → confirm the previously-added service-page CTA is present on every post; add where missing.
- `/privacy` and `/terms` → add a "Back to home" link in the first paragraph pointing to `/`.

## Technical notes

- No changes to navigation, images, or existing page structure beyond adding paragraphs, CTAs, and links.
- `LangRedirect` stays for `/en/*` only (SEO wants a single English canonical). `/es/*` stops redirecting.
- Toggling the language in the header will navigate between `/[page]` and `/es/[page]` so the URL always matches the visible language — this is required for the canonical/hreflang logic to be accurate.
- Prerender + sitemap changes are the piece that actually makes `/es/` indexable by Google; without them, the Spanish head tags only exist client-side.

## Confirm before I build

1. **OK to stop redirecting `/es/*` and render it as a real Spanish route?** This is the only way "unique /es/ titles + self-canonical" is honest for crawlers. If you'd rather keep the SPA-with-toggle model, I'd instead implement a narrower fix: keep the redirect, and drop the /en/ + /es/ variants from any place they still surface (sitemap, internal links). Say which you prefer.
2. Blog posts stay single-URL (not duplicated under `/es/`) — confirm.
