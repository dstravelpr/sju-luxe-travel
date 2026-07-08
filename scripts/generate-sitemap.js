/**
 * Sitemap generator — reads dist/route-manifest.json (produced by prerender.js)
 * and writes dist/sitemap.xml with:
 *   - Every prerendered URL, exactly once
 *   - No whitespace inside <loc>
 *   - <xhtml:link rel="alternate"> entries mirroring hreflang exactly
 *   - <lastmod> only when content has a real datePublished/dateModified
 *   - No <changefreq>, no <priority>
 *   - No 404 route
 */
import fs from "fs";
import path from "path";

const DIST = path.resolve("dist");
const HOSTNAME = "https://www.sjuluxetravel.com";

const manifest = JSON.parse(fs.readFileSync(path.join(DIST, "route-manifest.json"), "utf-8"));

const urlFor = (route, lang) => {
  const prefix = lang === "en" ? "/en" : lang === "es" ? "/es" : "";
  if (route === "/") return `${HOSTNAME}${prefix || "/"}`;
  return `${HOSTNAME}${prefix}${route}`;
};

const rows = [];
for (const entry of manifest) {
  const alternates = entry.hreflang
    ? [
        `<xhtml:link rel="alternate" hreflang="es-PR" href="${urlFor(entry.path, "es")}"/>`,
        `<xhtml:link rel="alternate" hreflang="en" href="${urlFor(entry.path, "en")}"/>`,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(entry.path, "default")}"/>`,
      ].join("")
    : "";

  for (const loc of entry.locales) {
    const url = urlFor(entry.path, loc);
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : "";
    rows.push(`  <url><loc>${url}</loc>${lastmod}${alternates}</url>`);
  }
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${rows.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml);
// Also mirror to public/ so subsequent dev-server runs have it available
fs.writeFileSync(path.resolve("public/sitemap.xml"), xml);
console.log(`✅ sitemap.xml written (${rows.length} URLs)`);
