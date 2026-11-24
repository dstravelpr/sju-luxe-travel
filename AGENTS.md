# Project architecture
- Keep the existing post-build prerender and sitemap mechanism; route snapshots must reflect the current rendered EN/ES pages so static metadata and client content agree without URL migrations.
- Use one shared newsletter form and one validated server endpoint; subscriptions are service-role-only records so visitors cannot read personal data.
- Keep seasonal content in a shared bilingual section on existing pages; do not create seasonal URLs or imply unconfirmed availability.- Generate concierge FAQ structured data from the same localized answers rendered in the article to prevent language and fee-claim drift.
- Lead forms (newsletter, cruise finder) save through validated edge functions into service-role-only tables; visitors can never read submissions.
