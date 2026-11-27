# Project architecture
- Unpublished article routes and review links appear only in development or on this project's exact hosted preview hostname, with noindex and no canonical; exclude them from public-site routing, public blog index, prerender snapshots and sitemap until release approval. Hosted previews can use production bundles, so DEV alone is insufficient.
- Keep the existing post-build prerender and sitemap mechanism; route snapshots must reflect the current rendered EN/ES pages so static metadata and client content agree without URL migrations.
- Use one shared newsletter form and one validated server endpoint; subscriptions are service-role-only records so visitors cannot read personal data.
- Keep seasonal content in a shared bilingual section on existing pages; do not create seasonal URLs or imply unconfirmed availability.- Generate concierge FAQ structured data from the same localized answers rendered in the article to prevent language and fee-claim drift.
- Lead forms (newsletter, cruise finder) save through validated edge functions into service-role-only tables; visitors can never read submissions.
- Render a shared Google preferred-source link on every page through the site-wide layout and target the public domain confirmed in Google's selector, independent of canonical URLs or preview hostnames.
