/**
 * Post-build prerender script.
 * Creates per-route index.html files with SEO-rich static content
 * so crawlers see meaningful HTML before JS hydrates.
 */
import fs from "fs";
import path from "path";

const DIST = path.resolve("dist");
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

// Route → static content mapping for crawlers
const HOSTNAME = "https://www.sjuluxetravel.com";
const LANGUAGE_PREFIXES = ["en", "es"];

const allRoutes = [
  "/",
  "/about",
  "/destinations",
  "/destinations/maldives",
  "/destinations/portugal",
  "/destinations/mexico",
  "/blog",
  "/blog/what-luxury-travel-really-means",
  "/blog/do-travel-agents-really-help-save-money",
  "/blog/micro-vacaciones-futuro-del-viaje",
  "/contact",
  "/privacy",
  "/terms",
  "/viajes-de-lujo-desde-puerto-rico",
  "/luna-de-miel-de-lujo",
  "/cruceros-de-lujo-desde-san-juan",
  "/cruceros-fluviales-de-lujo-desde-puerto-rico",
];

const pages = {
  "/about": {
    title: "About SJU Luxe Travel — Bilingual Luxury Travel Advisor in Puerto Rico",
    description: "Meet Daniel Santiago Díaz, certified bilingual luxury travel advisor in San Juan, Puerto Rico. Bespoke itineraries & NCM Concierge perks across six continents.",
    h1: "About SJU Luxe Travel — Your Bilingual Luxury Travel Advisor",
    body: "Founded by Daniel Santiago Díaz, a certified bilingual travel professional and private travel concierge with over a decade of luxury sales experience across six continents. As an independent agent of NCM Concierge, part of Travel Leaders, we deliver intentional luxury travel experiences, bespoke itineraries, and exclusive perks you cannot get booking online. Licensed in Florida (ST15578), California, Washington, and Iowa.",
  },
  "/destinations": {
    title: "Luxury Travel Destinations — Maldives, Portugal, Mexico & Beyond",
    description: "Explore luxury destinations curated by your Puerto Rico travel advisor: Maldives, Portugal, Mexico & beyond. Exclusive NCM Concierge perks at every property.",
    h1: "Luxury Travel Destinations — Handpicked by Your Private Travel Concierge",
    body: "Explore our curated collection of luxury destinations including overwater villas in the Maldives, luxury Portugal travel itineraries through Lisbon and the Algarve, luxury Mexico vacation packages across the Riviera Maya and Oaxaca, and luxury cruises departing from San Juan Puerto Rico. Each bespoke itinerary is personally designed with insider access and exclusive NCM Concierge perks.",
  },
  "/destinations/maldives": {
    title: "Luxury Maldives Travel Packages — Overwater Villas & Private Island Resorts",
    description: "Plan your luxury Maldives vacation with SJU Luxe Travel. Overwater villas, private dinners, diving & exclusive resort perks from San Juan, PR.",
    h1: "Luxury Maldives Travel Packages — Overwater Villas & Private Island Resorts",
    body: "Experience the ultimate in luxury with our bespoke Maldives travel packages. From overwater villas at the world's finest resorts to private island experiences, your luxury travel advisor crafts every detail with exclusive NCM Concierge perks including complimentary room upgrades, resort credits, and VIP amenities.",
  },
  "/destinations/portugal": {
    title: "Luxury Portugal Travel Itinerary — Lisbon, Algarve & Porto",
    description: "Plan your luxury Portugal travel itinerary with SJU Luxe Travel. Lisbon, Porto, Algarve & Douro Valley wine tours. Boutique travel agency in San Juan, PR.",
    h1: "Luxury Portugal Travel Itinerary — Lisbon, Algarve & Porto",
    body: "Discover Portugal through a bespoke luxury itinerary. From Lisbon's historic charm to the Algarve's stunning coastline and Porto's wine country, we design private guided tours with exclusive NCM Concierge perks at top properties.",
  },
  "/destinations/mexico": {
    title: "Luxury Mexico Vacation Packages — Riviera Maya, Oaxaca & Beyond",
    description: "Plan your luxury Mexico vacation with SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca, cenotes & exclusive resort perks. Bespoke itineraries from San Juan, PR.",
    h1: "Luxury Mexico Vacation Packages — Riviera Maya, Oaxaca & Beyond",
    body: "Experience Mexico's finest with our luxury vacation packages. From the Riviera Maya's pristine beaches to Oaxaca's culinary treasures, we craft bespoke itineraries with private guided tours and exclusive NCM Concierge perks.",
  },
  "/blog": {
    title: "Luxury Travel Blog — Tips, Guides & Insights from SJU Luxe Travel",
    description: "Expert insights on luxury travel from your boutique travel advisor in San Juan, Puerto Rico. Tips on intentional luxury travel and bespoke itineraries.",
    h1: "Luxury Travel Blog — Tips, Guides & Insights",
    body: "Expert insights on luxury travel from your boutique travel advisor in San Juan, Puerto Rico. Learn about intentional luxury travel, why travel agents save you money, and how to plan bespoke itineraries to the world's most exclusive destinations.",
  },
  "/blog/what-luxury-travel-really-means": {
    title: "What Luxury Travel Really Means — Beyond Five Stars | SJU Luxe Travel",
    description: "Luxury travel is not about the price tag. Learn what intentional luxury travel really means and why a boutique travel agency delivers transformative experiences.",
    h1: "What Luxury Travel Really Means — Beyond Five Stars",
    body: "Luxury travel is not about the price tag or the star rating. It is about intentional experiences, private access, and moments that transform how you see the world. Learn what intentional luxury travel really means and why a boutique travel agency delivers experiences mass tourism never can.",
  },
  "/blog/do-travel-agents-really-help-save-money": {
    title: "Is It Worth Using a Travel Agent? Do They Save You Money? | SJU Luxe Travel",
    description: "Discover why luxury travelers choose travel agents over online booking. Exclusive perks, upgrades, and bespoke planning that saves time and money.",
    h1: "Is It Worth Using a Travel Agent? Do They Really Save You Money?",
    body: "Discover why luxury travelers consistently choose travel agents over online booking. From exclusive NCM Concierge perks like complimentary upgrades and resort credits to insider access and bespoke itinerary planning, learn how a boutique travel agency saves you both time and money.",
  },
  "/contact": {
    title: "Free Luxury Travel Consultation — Contact SJU Luxe Travel",
    description: "Schedule your free luxury travel consultation with SJU Luxe Travel. Luxury cruises, private tours, solo travel & more. Phone: (617) 935-5714.",
    h1: "Free Luxury Travel Consultation — Contact Your Luxury Travel Advisor",
    body: "Schedule your free luxury travel consultation today. Whether you are planning luxury cruises from San Juan, private guided tours, luxury solo travel for women, corporate incentive travel, or exclusive destinations without mass tourism — your boutique travel advisor is ready. Phone: (617) 935-5714. Email: dsantiago@ncmconcierge.com.",
  },
};

const getCanonicalUrl = (route) => `${HOSTNAME}${route === "/" ? "" : route}`;

const buildAlternateLinks = (canonical) => `
    <link rel="alternate" hreflang="es-PR" href="${canonical}" />
    <link rel="alternate" hreflang="en" href="${canonical}" />
    <link rel="alternate" hreflang="x-default" href="${canonical}" />`;

const withCanonicalSeo = (html, canonical) => {
  const alternateLinks = buildAlternateLinks(canonical);

  const htmlWithCanonical = /<link rel="canonical" href="[^"]*"\s*\/>/.test(html)
    ? html.replace(
        /<link rel="canonical" href="[^"]*"\s*\/>/,
        `<link rel="canonical" href="${canonical}" />`
      )
    : html.replace("</head>", `    <link rel="canonical" href="${canonical}" />\n</head>`);

  const htmlWithoutAlternates = htmlWithCanonical
    .replace(/\s*<link rel="alternate" hreflang="es-PR" href="[^"]*"\s*\/?>/g, "")
    .replace(/\s*<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?>/g, "")
    .replace(/\s*<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/g, "");

  return htmlWithoutAlternates.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />${alternateLinks}`
  );
};

const routeToDir = (...parts) => {
  const sanitizedParts = parts
    .filter(Boolean)
    .map((part) => part.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean);

  return path.join(DIST, ...sanitizedParts);
};

const writeHtmlFile = (dir, html) => {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
};

const createRedirectPage = (route, prefix) => {
  const canonicalPath = route === "/" ? "/" : route;
  const canonicalUrl = getCanonicalUrl(route);
  const redirectHtml = `<!doctype html>
<html lang="es-PR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirecting…</title>
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonicalUrl}" />
    ${buildAlternateLinks(canonicalUrl)}
    <meta http-equiv="refresh" content="0; url=${canonicalUrl}" />
    <script>
      window.location.replace(${JSON.stringify(canonicalPath)} + window.location.search + window.location.hash);
    </script>
  </head>
  <body></body>
</html>`;

  writeHtmlFile(routeToDir(prefix, route), redirectHtml);
};

writeHtmlFile(routeToDir(), withCanonicalSeo(template, getCanonicalUrl("/")));

for (const [route, content] of Object.entries(pages)) {
  const dir = routeToDir(route);
  const canonical = getCanonicalUrl(route);

  const html = withCanonicalSeo(
    template
    // Replace title
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${content.title}</title>`
    )
    // Replace meta description
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${content.description}" />`
    )
    // Replace og:title
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${content.title}" />`
    )
    // Replace og:description
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${content.description}" />`
    )
    // Replace og:url
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${canonical}" />`
    )
    // Replace canonical link
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonical}" />`
    )
    // Replace root div content
    .replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root"><h1>${content.h1}</h1><p>${content.body}</p></div>`
    ),
    canonical
  );

  writeHtmlFile(dir, html);
}

for (const prefix of LANGUAGE_PREFIXES) {
  for (const route of allRoutes) {
    createRedirectPage(route, prefix);
  }
}

console.log(`✅ Prerendered ${Object.keys(pages).length} routes and generated ${LANGUAGE_PREFIXES.length * allRoutes.length} language redirects`);
