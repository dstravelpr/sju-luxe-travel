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
    title: "Sobre SJU Luxe Travel — Asesor de Viajes de Lujo en Puerto Rico",
    description: "Conoce a Daniel Santiago Díaz, asesor bilingüe de viajes de lujo certificado en San Juan, Puerto Rico. Itinerarios a medida y beneficios exclusivos de NCM Concierge.",
    h1: "Sobre SJU Luxe Travel — Tu Asesor Bilingüe de Viajes de Lujo",
    body: "Fundada por Daniel Santiago Díaz, profesional bilingüe certificado y concierge privado de viajes con más de una década de experiencia en ventas de lujo en seis continentes. Como agente independiente de NCM Concierge, parte de Travel Leaders, ofrecemos experiencias de viaje de lujo intencional, itinerarios a medida y beneficios exclusivos que no consigues reservando en línea. Licenciados en Florida (ST15578), California, Washington e Iowa.",
  },
  "/destinations": {
    title: "Destinos de Lujo — Maldivas, Portugal, México y Más | SJU Luxe Travel",
    description: "Explora destinos de lujo curados por tu asesor de viajes en Puerto Rico: Maldivas, Portugal, México y más. Beneficios exclusivos de NCM Concierge en cada propiedad.",
    h1: "Destinos de Lujo — Seleccionados por tu Concierge Privado de Viajes",
    body: "Explora nuestra colección curada de destinos de lujo: villas overwater en Maldivas, itinerarios de lujo por Lisboa y el Algarve en Portugal, paquetes de lujo en México por la Riviera Maya y Oaxaca, y cruceros de lujo que zarpan desde San Juan, Puerto Rico. Cada itinerario a medida se diseña personalmente con acceso exclusivo y beneficios VIP de NCM Concierge.",
  },
  "/destinations/maldives": {
    title: "Viajes de Lujo a Maldivas — Villas Overwater & Resorts Privados | SJU Luxe Travel",
    description: "Planifica tu viaje de lujo a Maldivas con SJU Luxe Travel. Villas overwater, cenas privadas, buceo y beneficios exclusivos en resorts desde San Juan, PR.",
    h1: "Viajes de Lujo a Maldivas — Villas Overwater & Resorts en Islas Privadas",
    body: "Vive el máximo lujo con nuestros paquetes a medida a Maldivas. Desde villas overwater en los mejores resorts del mundo hasta experiencias en islas privadas, tu asesor de viajes de lujo cuida cada detalle con beneficios exclusivos de NCM Concierge: upgrades de habitación, créditos de resort y amenidades VIP.",
  },
  "/destinations/portugal": {
    title: "Viajes de Lujo a Portugal — Lisboa, Algarve & Porto | SJU Luxe Travel",
    description: "Planifica tu itinerario de lujo a Portugal con SJU Luxe Travel. Lisboa, Porto, Algarve y el valle del Duero. Agencia boutique de viajes en San Juan, PR.",
    h1: "Viajes de Lujo a Portugal — Lisboa, Algarve & Porto",
    body: "Descubre Portugal con un itinerario de lujo a medida. Desde el encanto histórico de Lisboa hasta la costa del Algarve y la región vinícola de Porto, diseñamos tours privados guiados con beneficios exclusivos de NCM Concierge en las mejores propiedades.",
  },
  "/destinations/mexico": {
    title: "Viajes de Lujo a México — Riviera Maya, Oaxaca & Más | SJU Luxe Travel",
    description: "Planifica tu viaje de lujo a México con SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca, cenotes y beneficios exclusivos en resorts. Itinerarios a medida desde San Juan, PR.",
    h1: "Viajes de Lujo a México — Riviera Maya, Oaxaca & Más",
    body: "Vive lo mejor de México con nuestros paquetes de lujo. Desde las playas vírgenes de la Riviera Maya hasta los tesoros culinarios de Oaxaca, diseñamos itinerarios a medida con tours privados guiados y beneficios exclusivos de NCM Concierge.",
  },
  "/blog": {
    title: "Blog de Viajes de Lujo — Consejos, Guías e Insights | SJU Luxe Travel",
    description: "Insights expertos sobre viajes de lujo de tu asesor boutique en San Juan, Puerto Rico. Consejos sobre viajes de lujo intencional e itinerarios a medida.",
    h1: "Blog de Viajes de Lujo — Consejos, Guías e Insights",
    body: "Insights expertos sobre viajes de lujo de tu asesor boutique en San Juan, Puerto Rico. Aprende sobre viajes de lujo intencional, por qué los agentes de viajes te ahorran dinero y cómo planificar itinerarios a medida hacia los destinos más exclusivos del mundo.",
  },
  "/blog/what-luxury-travel-really-means": {
    title: "Qué Significa Realmente Viajar con Lujo — Más Allá de las Cinco Estrellas | SJU Luxe Travel",
    description: "Viajar con lujo no se trata del precio. Aprende qué significa realmente el viaje de lujo intencional y por qué una agencia boutique ofrece experiencias transformadoras.",
    h1: "Qué Significa Realmente Viajar con Lujo — Más Allá de las Cinco Estrellas",
    body: "Viajar con lujo no se trata del precio ni de la categoría de estrellas. Se trata de experiencias intencionales, acceso privado y momentos que transforman cómo ves el mundo. Aprende qué significa realmente el viaje de lujo intencional y por qué una agencia boutique ofrece experiencias que el turismo masivo nunca podrá igualar.",
  },
  "/blog/do-travel-agents-really-help-save-money": {
    title: "¿Vale la Pena un Agente de Viajes? ¿Te Ahorran Dinero? | SJU Luxe Travel",
    description: "Descubre por qué los viajeros de lujo eligen agentes de viajes en lugar de reservar en línea. Beneficios exclusivos, upgrades y planificación a medida que ahorra tiempo y dinero.",
    h1: "¿Vale la Pena un Agente de Viajes? ¿Realmente te Ahorran Dinero?",
    body: "Descubre por qué los viajeros de lujo eligen consistentemente agentes de viajes sobre las reservas en línea. Desde beneficios exclusivos de NCM Concierge como upgrades cortesía y créditos de resort, hasta acceso insider y planificación de itinerarios a medida, aprende cómo una agencia boutique te ahorra tiempo y dinero.",
  },
  "/blog/micro-vacaciones-futuro-del-viaje": {
    title: "¿Son las Microvacaciones el Futuro de los Viajes? | SJU Luxe Travel",
    description: "Descubre por qué las microvacaciones de lujo (3–4 días) son la nueva tendencia: escapadas cortas, intencionales y transformadoras desde Puerto Rico.",
    h1: "¿Son las Microvacaciones el Futuro de los Viajes?",
    body: "Las microvacaciones —escapadas de lujo de 3 a 4 días— se están convirtiendo en la forma preferida de viajar para profesionales ocupados. Descubre cómo planificar microvacaciones intencionales y transformadoras desde San Juan, Puerto Rico, con itinerarios bespoke, acceso privado y los beneficios exclusivos de NCM Concierge.",
  },
  "/contact": {
    title: "Consulta Gratis de Viajes de Lujo — Contacto | SJU Luxe Travel",
    description: "Agenda tu consulta gratis de viajes de lujo con SJU Luxe Travel. Cruceros de lujo, tours privados, viajes solo y más. Teléfono: (617) 935-5714.",
    h1: "Consulta Gratis de Viajes de Lujo — Contacta a tu Asesor de Lujo",
    body: "Agenda hoy tu consulta gratis de viajes de lujo. Ya sea que planifiques cruceros de lujo desde San Juan, tours privados guiados, viajes de lujo solo para mujeres, viajes corporativos de incentivos o destinos exclusivos sin turismo masivo, tu asesor boutique de viajes está listo. Teléfono: (617) 935-5714. Email: dsantiago@ncmconcierge.com.",
  },
  "/privacy": {
    title: "Política de Privacidad | SJU Luxe Travel",
    description: "Política de Privacidad de SJU Luxe Travel. Conoce cómo recopilamos, usamos y protegemos tu información personal al planificar tu experiencia de viaje de lujo.",
    h1: "Política de Privacidad",
    body: "Esta Política de Privacidad describe cómo SJU Luxe Travel recopila, usa y protege tu información personal cuando utilizas nuestros servicios de asesoría de viajes de lujo. Estamos comprometidos a salvaguardar la privacidad de nuestros clientes en Puerto Rico, Estados Unidos y todo el mundo.",
  },
  "/terms": {
    title: "Términos de Servicio | SJU Luxe Travel",
    description: "Términos de Servicio de SJU Luxe Travel — agencia boutique de viajes de lujo en San Juan, Puerto Rico. Revisa nuestras condiciones de reserva, cancelación y servicio.",
    h1: "Términos de Servicio",
    body: "Estos Términos de Servicio rigen el uso de los servicios de asesoría de viajes de lujo a medida de SJU Luxe Travel. Revisa nuestras condiciones de reserva, cancelación y servicio antes de contratar a nuestra agencia boutique de viajes en San Juan, Puerto Rico.",
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
