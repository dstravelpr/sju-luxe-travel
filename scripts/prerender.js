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
  "/blog/micro-vacaciones-futuro-del-viaje": {
    title: "¿Son las Microvacaciones el Futuro de los Viajes? | SJU Luxe Travel",
    description: "Descubre por qué las microvacaciones de lujo (3–4 días) son la nueva tendencia: escapadas cortas, intencionales y transformadoras desde Puerto Rico.",
    h1: "¿Son las Microvacaciones el Futuro de los Viajes?",
    body: "Las microvacaciones —escapadas de lujo de 3 a 4 días— se están convirtiendo en la forma preferida de viajar para profesionales ocupados. Descubre cómo planificar microvacaciones intencionales y transformadoras desde San Juan, Puerto Rico, con itinerarios bespoke, acceso privado y los beneficios exclusivos de NCM Concierge.",
  },
  "/contact": {
    title: "Free Luxury Travel Consultation — Contact SJU Luxe Travel",
    description: "Schedule your free luxury travel consultation with SJU Luxe Travel. Luxury cruises, private tours, solo travel & more. Phone: (617) 935-5714.",
    h1: "Free Luxury Travel Consultation — Contact Your Luxury Travel Advisor",
    body: "Schedule your free luxury travel consultation today. Whether you are planning luxury cruises from San Juan, private guided tours, luxury solo travel for women, corporate incentive travel, or exclusive destinations without mass tourism — your boutique travel advisor is ready. Phone: (617) 935-5714. Email: dsantiago@ncmconcierge.com.",
  },
  "/privacy": {
    title: "Privacy Policy | SJU Luxe Travel",
    description: "Privacy Policy for SJU Luxe Travel. Learn how we collect, use, and protect your personal information when planning your luxury travel experience.",
    h1: "Privacy Policy",
    body: "This Privacy Policy describes how SJU Luxe Travel collects, uses, and protects your personal information when you use our luxury travel advisory services. We are committed to safeguarding the privacy of our clients in Puerto Rico, the United States, and worldwide.",
  },
  "/terms": {
    title: "Terms of Service | SJU Luxe Travel",
    description: "Terms of Service for SJU Luxe Travel — boutique luxury travel agency in San Juan, Puerto Rico. Review our booking, cancellation, and service terms.",
    h1: "Terms of Service",
    body: "These Terms of Service govern your use of SJU Luxe Travel's bespoke luxury travel advisory services. Please review our booking, cancellation, and service terms before engaging our boutique travel agency in San Juan, Puerto Rico.",
  },
  "/viajes-de-lujo-desde-puerto-rico": {
    title: "Viajes de Lujo desde Puerto Rico — Itinerarios Privados a Medida | SJU Luxe Travel",
    description: "Agencia de viajes de lujo boutique en San Juan, Puerto Rico. Itinerarios privados a medida, cruceros, lunas de miel y destinos exclusivos sin turismo masivo.",
    h1: "Viajes de Lujo desde Puerto Rico — Itinerarios Privados a Medida",
    body: "SJU Luxe Travel es tu asesor de viajes de lujo bilingüe en San Juan, Puerto Rico. Diseñamos viajes privados de lujo desde Puerto Rico con itinerarios a medida, acceso exclusivo y los beneficios VIP de NCM Concierge: upgrades de habitación, créditos de hotel y amenidades premium en las mejores propiedades del mundo.",
  },
  "/luna-de-miel-de-lujo": {
    title: "Luna de Miel de Lujo desde Puerto Rico — Maldivas, Bora Bora & Más | SJU Luxe Travel",
    description: "Planifica tu luna de miel de lujo con SJU Luxe Travel. Maldivas, Bora Bora, Santorini y más con villas overwater y experiencias privadas exclusivas.",
    h1: "Luna de Miel de Lujo desde Puerto Rico",
    body: "Tu luna de miel merece más que un paquete genérico. Diseñamos lunas de miel de lujo a medida desde Puerto Rico hacia los destinos más románticos del mundo: Maldivas, Bora Bora, Santorini, Bali y más. Villas overwater, cenas privadas y beneficios exclusivos de NCM Concierge incluidos.",
  },
  "/cruceros-de-lujo-desde-san-juan": {
    title: "Cruceros de Lujo desde San Juan — Caribe, Mediterráneo & Mundiales | SJU Luxe Travel",
    description: "Reserva tu crucero de lujo desde San Juan, Puerto Rico. Regent, Silversea, Seabourn y Crystal con suites premium y beneficios exclusivos de concierge.",
    h1: "Cruceros de Lujo desde San Juan, Puerto Rico",
    body: "Descubre los mejores cruceros de lujo que zarpan desde San Juan, Puerto Rico. Trabajamos con Regent Seven Seas, Silversea, Seabourn y Crystal Cruises para reservar suites premium con créditos a bordo, excursiones privadas y beneficios exclusivos de NCM Concierge.",
  },
  "/cruceros-fluviales-de-lujo-desde-puerto-rico": {
    title: "Cruceros Fluviales de Lujo desde Puerto Rico — Europa & Asia | SJU Luxe Travel",
    description: "Planifica tu crucero fluvial de lujo desde Puerto Rico. Danubio, Rin, Sena, Mekong y Nilo con AmaWaterways, Uniworld y Scenic. Suites con balcón privado.",
    h1: "Cruceros Fluviales de Lujo desde Puerto Rico",
    body: "Explora Europa y Asia a bordo de los cruceros fluviales más exclusivos del mundo. Diseñamos itinerarios fluviales de lujo por el Danubio, Rin, Sena, Mekong y Nilo con AmaWaterways, Uniworld y Scenic — incluyendo suites con balcón privado, excursiones VIP y beneficios exclusivos de NCM Concierge.",
  },
};

const getCanonicalUrl = (route) => `${HOSTNAME}${route === "/" ? "" : route}`;

const ORG_SCHEMA = {
  "@type": "TravelAgency",
  "@id": `${HOSTNAME}/#org`,
  name: "SJU Luxe Travel",
  url: HOSTNAME,
  telephone: "+1-617-935-5714",
  email: "dsantiago@ncmconcierge.com",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Juan",
    addressRegion: "PR",
    addressCountry: "US",
  },
};

const buildSchema = (route, content, canonical) => {
  const isBlog = route.startsWith("/blog/");
  const isListBlog = route === "/blog";
  const isAbout = route === "/about";
  const isContact = route === "/contact";
  const inLanguage = /[áéíóúñ¿]|de-lujo|cruceros|luna-de-miel|viajes-de|micro-vacaciones/i.test(route + content.title)
    ? "es-PR"
    : "en-US";

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: HOSTNAME + "/" },
      { "@type": "ListItem", position: 2, name: content.h1, item: canonical },
    ],
  };

  let primary;
  if (isBlog) {
    primary = {
      "@type": "BlogPosting",
      headline: content.h1,
      description: content.description,
      inLanguage,
      mainEntityOfPage: canonical,
      url: canonical,
      author: { "@type": "Person", name: "Daniel Santiago Díaz" },
      publisher: ORG_SCHEMA,
    };
  } else if (isListBlog) {
    primary = { "@type": "Blog", name: content.h1, url: canonical, inLanguage, publisher: ORG_SCHEMA };
  } else if (isAbout) {
    primary = { "@type": "AboutPage", name: content.h1, url: canonical, inLanguage, mainEntity: ORG_SCHEMA };
  } else if (isContact) {
    primary = { "@type": "ContactPage", name: content.h1, url: canonical, inLanguage, mainEntity: ORG_SCHEMA };
  } else {
    primary = { "@type": "WebPage", name: content.h1, description: content.description, url: canonical, inLanguage, isPartOf: { "@id": `${HOSTNAME}/#org` } };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [ORG_SCHEMA, primary, breadcrumb],
  };
};

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

const injectJsonLd = (html, schema) => {
  // Remove any prerender-injected JSON-LD from the template, then add fresh one before </head>
  const cleaned = html.replace(/\s*<script type="application\/ld\+json" data-prerender>[\s\S]*?<\/script>/g, "");
  const tag = `    <script type="application/ld+json" data-prerender>${JSON.stringify(schema)}</script>\n`;
  return cleaned.replace("</head>", `${tag}</head>`);
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

// Root page schema
const ROOT_CONTENT = {
  title: "SJU Luxe Travel | Luxury Travel Agency San Juan Puerto Rico",
  description: "Boutique luxury travel agency in San Juan, Puerto Rico. Bespoke itineraries to the Maldives, Portugal, Mexico & beyond with exclusive concierge perks.",
  h1: "SJU Luxe Travel — Boutique Luxury Travel Agency in San Juan, Puerto Rico",
};
{
  const canonical = getCanonicalUrl("/");
  const html = injectJsonLd(
    withCanonicalSeo(template, canonical),
    buildSchema("/", ROOT_CONTENT, canonical)
  );
  writeHtmlFile(routeToDir(), html);
}

for (const [route, content] of Object.entries(pages)) {
  const dir = routeToDir(route);
  const canonical = getCanonicalUrl(route);

  const seoHtml = withCanonicalSeo(
    template
    .replace(/<title>[^<]*<\/title>/, `<title>${content.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${content.description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${content.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${content.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${content.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${content.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root"><h1>${content.h1}</h1><p>${content.body}</p></div>`),
    canonical
  );

  const html = injectJsonLd(seoHtml, buildSchema(route, content, canonical));
  writeHtmlFile(dir, html);
}

for (const prefix of LANGUAGE_PREFIXES) {
  for (const route of allRoutes) {
    createRedirectPage(route, prefix);
  }
}

console.log(`✅ Prerendered ${Object.keys(pages).length} routes and generated ${LANGUAGE_PREFIXES.length * allRoutes.length} language redirects`);
