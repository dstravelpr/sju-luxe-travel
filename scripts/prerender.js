/**
 * Post-build prerender script.
 * Single source of truth: ROUTE_MANIFEST drives hreflang + prerender.
 * Sitemap is generated separately from the same manifest (see scripts/generate-sitemap.js).
 */
import fs from "fs";
import path from "path";

const DIST = path.resolve("dist");
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

const HOSTNAME = "https://www.sjuluxetravel.com";
const ORG_ID = `${HOSTNAME}/#org`;
const WEBSITE_ID = `${HOSTNAME}/#website`;
const LOGO_URL = `${HOSTNAME}/favicon.png`;
const DEFAULT_OG = `${HOSTNAME}/og-image.jpg`;

const ROUTE_IMAGES = {
  "/blog/luna-de-miel-puerto-rico-2026": `${HOSTNAME}/og/honeymoon-2026.png`,
  "/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside": `${HOSTNAME}/og/cruceros-fluviales.jpg`,
  "/blog/vale-la-pena-asesor-viajes-2026": `${HOSTNAME}/og/vale-la-pena-asesor-2026.jpg`,
  "/blog/vuelos-puerto-rico-portugal": `${HOSTNAME}/og/vuelos-puerto-rico-portugal.jpg`,
  "/blog/maldivas-desde-puerto-rico-guia": `${HOSTNAME}/og/maldivas-desde-puerto-rico.jpg`,
  "/blog/servicios-concierge-viaje": `${HOSTNAME}/og/servicios-concierge-viaje.jpg`,
  "/blog/viajes-sin-pasaporte-desde-pr": `${HOSTNAME}/og/viajes-sin-pasaporte.jpg`,
  "/blog/luxury-solo-female-travel": `${HOSTNAME}/og/luxury-solo-female-travel.jpg`,
  "/blog/wellness-travel-intentional-luxury": `${HOSTNAME}/og/wellness-travel.jpg`,
  "/blog/river-cruising-new-generation": `${HOSTNAME}/og/river-cruising-new-generation.jpg`,
  "/blog/what-luxury-travel-really-means": `${HOSTNAME}/og/what-luxury-travel-means.jpg`,
  "/blog/do-travel-agents-really-help-save-money": `${HOSTNAME}/og/do-travel-agents-save-money.jpg`,
  "/blog/micro-vacaciones-futuro-del-viaje": `${HOSTNAME}/og/micro-vacaciones.jpg`,
  "/blog/crucero-fluvial-duero-desde-puerto-rico": `${HOSTNAME}/og/crucero-fluvial-duero.jpg`,
  "/blog/excursiones-de-lujo-san-juan-puerto-cruceros": `${HOSTNAME}/og/excursiones-lujo-san-juan.jpg`,
};

// ---------------------------------------------------------------
// Route content (Spanish is the default variant unless noted)
// ---------------------------------------------------------------
const pages = {
  "/about": {
    title: "Sobre SJU Luxe Travel — Agente de Viajes en Puerto Rico",
    description: "Conoce a Daniel Santiago Díaz, asesor bilingüe de viajes de lujo certificado en San Juan, Puerto Rico. Itinerarios a medida y beneficios exclusivos de NCM Concierge.",
    h1: "Sobre SJU Luxe Travel — Tu Asesor Bilingüe de Viajes de Lujo",
    body: "Fundada por Daniel Santiago Díaz, profesional bilingüe certificado y concierge privado de viajes con más de una década de experiencia en ventas de lujo en seis continentes. Como agente independiente de NCM Concierge, parte de Travel Leaders, ofrecemos experiencias de viaje de lujo intencional, itinerarios a medida y beneficios exclusivos que no consigues reservando en línea. Licenciados en Florida (ST15578), California, Washington e Iowa.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Sobre nosotros", path: "/about" }],
  },
  "/destinations": {
    title: "Destinos de Lujo — Maldivas, Portugal, México y Más | SJU Luxe Travel",
    description: "Explora destinos de lujo curados por tu asesor de viajes en Puerto Rico: Maldivas, Portugal, México y más. Beneficios exclusivos de NCM Concierge en cada propiedad.",
    h1: "Destinos de Lujo — Seleccionados por tu Concierge Privado de Viajes",
    body: "Explora nuestra colección curada de destinos de lujo: villas overwater en Maldivas, itinerarios de lujo por Lisboa y el Algarve en Portugal, paquetes de lujo en México por la Riviera Maya y Oaxaca, y cruceros de lujo que zarpan desde San Juan, Puerto Rico. Cada itinerario a medida se diseña personalmente con acceso exclusivo y beneficios VIP de NCM Concierge.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinos", path: "/destinations" }],
  },
  "/destinations/maldives": {
    title: "Viajes de Lujo a Maldivas — Villas Overwater & Resorts Privados | SJU Luxe Travel",
    description: "Planifica tu viaje de lujo a Maldivas con SJU Luxe Travel. Villas overwater, cenas privadas, buceo y beneficios exclusivos en resorts desde San Juan, PR.",
    h1: "Viajes de Lujo a Maldivas — Villas Overwater & Resorts en Islas Privadas",
    body: "Vive el máximo lujo con nuestros paquetes a medida a Maldivas. Desde villas overwater en los mejores resorts del mundo hasta experiencias en islas privadas, tu agente de viajes cuida cada detalle con beneficios exclusivos de NCM Concierge: upgrades de habitación, créditos de resort y amenidades VIP.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinos", path: "/destinations" }, { name: "Maldivas", path: "/destinations/maldives" }],
  },
  "/destinations/portugal": {
    title: "Viajes de Lujo a Portugal — Lisboa, Algarve & Porto | SJU Luxe Travel",
    description: "Planifica tu itinerario de lujo a Portugal con SJU Luxe Travel. Lisboa, Porto, Algarve y el valle del Duero. Agencia boutique de viajes en San Juan, PR.",
    h1: "Viajes de Lujo a Portugal — Lisboa, Algarve & Porto",
    body: "Descubre Portugal con un itinerario de lujo a medida. Desde el encanto histórico de Lisboa hasta la costa del Algarve y la región vinícola de Porto, diseñamos tours privados guiados con beneficios exclusivos de NCM Concierge en las mejores propiedades.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinos", path: "/destinations" }, { name: "Portugal", path: "/destinations/portugal" }],
  },
  "/destinations/mexico": {
    title: "Viajes de Lujo a México — Riviera Maya, Oaxaca & Más | SJU Luxe Travel",
    description: "Planifica tu viaje de lujo a México con SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca, cenotes y beneficios exclusivos en resorts. Itinerarios a medida desde San Juan, PR.",
    h1: "Viajes de Lujo a México — Riviera Maya, Oaxaca & Más",
    body: "Vive lo mejor de México con nuestros paquetes de lujo. Desde las playas vírgenes de la Riviera Maya hasta los tesoros culinarios de Oaxaca, diseñamos itinerarios a medida con tours privados guiados y beneficios exclusivos de NCM Concierge.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinos", path: "/destinations" }, { name: "México", path: "/destinations/mexico" }],
  },
  "/blog": {
    title: "Blog de Viajes de Lujo — Consejos, Guías e Insights | SJU Luxe Travel",
    description: "Insights expertos sobre viajes de lujo de tu asesor boutique en San Juan, Puerto Rico. Consejos sobre viajes de lujo intencional e itinerarios a medida.",
    h1: "Blog de Viajes de Lujo — Consejos, Guías e Insights",
    body: "Insights expertos sobre viajes de lujo de tu asesor boutique en San Juan, Puerto Rico. Aprende sobre viajes de lujo intencional, por qué los agentes de viajes te ahorran dinero y cómo planificar itinerarios a medida hacia los destinos más exclusivos del mundo.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }],
  },
  "/blog/what-luxury-travel-really-means": {
    title: "Qué Significa Realmente Viajar con Lujo — Más Allá de las Cinco Estrellas | SJU Luxe Travel",
    description: "Viajar con lujo no se trata del precio. Aprende qué significa realmente el viaje de lujo intencional y por qué una agencia boutique ofrece experiencias transformadoras.",
    h1: "Qué Significa Realmente Viajar con Lujo — Más Allá de las Cinco Estrellas",
    body: "Viajar con lujo no se trata del precio ni de la categoría de estrellas. Se trata de experiencias intencionales, acceso privado y momentos que transforman cómo ves el mundo. Aprende qué significa realmente el viaje de lujo intencional y por qué una agencia boutique ofrece experiencias que el turismo masivo nunca podrá igualar.",
    datePublished: "2026-04-08", dateModified: "2026-06-02",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Qué Significa Viajar con Lujo", path: "/blog/what-luxury-travel-really-means" }],
  },
  "/blog/do-travel-agents-really-help-save-money": {
    title: "¿Vale la Pena un Agente de Viajes? ¿Te Ahorran Dinero? | SJU Luxe Travel",
    description: "Descubre por qué los viajeros de lujo eligen agentes de viajes en lugar de reservar en línea. Beneficios exclusivos, upgrades y planificación a medida que ahorra tiempo y dinero.",
    h1: "¿Vale la Pena un Agente de Viajes? ¿Realmente te Ahorran Dinero?",
    body: "Descubre por qué los viajeros de lujo eligen consistentemente agentes de viajes sobre las reservas en línea. Desde beneficios exclusivos de NCM Concierge como upgrades cortesía y créditos de resort, hasta acceso insider y planificación de itinerarios a medida, aprende cómo una agencia boutique te ahorra tiempo y dinero.",
    datePublished: "2026-03-15", dateModified: "2026-05-20",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Vale la Pena un Agente de Viajes", path: "/blog/do-travel-agents-really-help-save-money" }],
  },
  "/blog/micro-vacaciones-futuro-del-viaje": {
    title: "¿Son las Microvacaciones el Futuro de los Viajes? | SJU Luxe Travel",
    description: "Descubre por qué las microvacaciones de lujo (3–4 días) son la nueva tendencia: escapadas cortas, intencionales y transformadoras desde Puerto Rico.",
    h1: "¿Son las Microvacaciones el Futuro de los Viajes?",
    body: "Las microvacaciones —escapadas de lujo de 3 a 4 días— se están convirtiendo en la forma preferida de viajar para profesionales ocupados. Descubre cómo planificar microvacaciones intencionales y transformadoras desde San Juan, Puerto Rico, con itinerarios bespoke, acceso privado y los beneficios exclusivos de NCM Concierge.",
    datePublished: "2026-02-10", dateModified: "2026-05-01",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Microvacaciones", path: "/blog/micro-vacaciones-futuro-del-viaje" }],
  },
  "/blog/river-cruising-new-generation": {
    title: "Luxury River Cruising Isn't Just for Your Parents Anymore | SJU Luxe Travel",
    description: "84% of travelers under 35 want to take a river cruise. A luxury travel advisor explains why — and how to get the most out of the experience.",
    h1: "River Cruising Isn't Just for Your Parents Anymore — And That Changes Everything",
    body: "84% of UK travelers aged 18–34 are interested in river cruising. A luxury travel advisor unpacks why a new generation is discovering river cruising — all-inclusive value, walk-off-the-ship convenience, and itineraries on the Danube, Rhine, Douro and Mekong that are best experienced from the water.",
    datePublished: "2026-05-13", dateModified: "2026-05-13", forcedLang: "en",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "River Cruising New Generation", path: "/blog/river-cruising-new-generation" }],
  },
  "/blog/luna-de-miel-puerto-rico-2026": {
    title: "Luna de Miel de Lujo desde Puerto Rico 2026 — Destinos Top | SJU Luxe Travel",
    description: "Guía 2026 de lunas de miel de lujo desde Puerto Rico: Maldivas, Bora Bora, Santorini y más. Itinerarios privados con beneficios de NCM Concierge.",
    h1: "Luna de Miel de Lujo desde Puerto Rico 2026 — Destinos Top",
    body: "Guía completa 2026 de lunas de miel de lujo desde Puerto Rico. Comparamos Maldivas, Bora Bora, Santorini y Bali con villas overwater, cenas privadas y beneficios exclusivos de NCM Concierge diseñados por tu asesor boutique.",
    datePublished: "2026-06-01", dateModified: "2026-06-01",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Luna de Miel 2026", path: "/blog/luna-de-miel-puerto-rico-2026" }],
  },
  "/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside": {
    title: "Cruceros Fluviales: AmaWaterways vs Avalon vs Riverside | SJU Luxe Travel",
    description: "Comparativa detallada de las tres navieras fluviales premium: AmaWaterways, Avalon Waterways y Riverside. Cuál elegir según tu estilo de viaje.",
    h1: "Cruceros Fluviales: AmaWaterways vs Avalon vs Riverside",
    body: "Comparativa detallada de las tres principales navieras fluviales premium. Analizamos AmaWaterways, Avalon Waterways y Riverside en camarotes, gastronomía, excursiones y estilo de servicio para ayudarte a elegir el crucero fluvial de lujo ideal.",
    datePublished: "2026-05-20", dateModified: "2026-05-20",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Comparativa Cruceros Fluviales", path: "/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside" }],
  },
  "/blog/vale-la-pena-asesor-viajes-2026": {
    title: "¿Vale la Pena un Asesor de Viajes en 2026? | SJU Luxe Travel",
    description: "En la era de la IA y las reservas online, ¿sigue teniendo sentido usar un asesor de viajes? Ventajas reales, beneficios exclusivos y ahorro.",
    h1: "¿Vale la Pena un Asesor de Viajes en 2026?",
    body: "En 2026, con IA generativa y booking online, muchos se preguntan si un asesor de viajes sigue teniendo sentido. Analizamos beneficios exclusivos de programas como NCM Concierge y por qué al mismo precio consigues más valor.",
    datePublished: "2026-04-22", dateModified: "2026-05-10",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Vale la Pena Asesor 2026", path: "/blog/vale-la-pena-asesor-viajes-2026" }],
  },
  "/blog/vuelos-puerto-rico-portugal": {
    title: "Vuelos desde Puerto Rico a Portugal — Guía 2026 | SJU Luxe Travel",
    description: "Cómo volar de Puerto Rico a Portugal: mejores rutas, conexiones vía Miami/Nueva York y clases business para viajeros de lujo.",
    h1: "Vuelos desde Puerto Rico a Portugal — Guía 2026",
    body: "Guía práctica 2026 para volar de Puerto Rico a Portugal. Comparamos rutas, conexiones vía Miami/Nueva York, aerolíneas y opciones business/premium para viajeros de lujo desde San Juan.",
    datePublished: "2026-03-05", dateModified: "2026-03-05",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Vuelos PR a Portugal", path: "/blog/vuelos-puerto-rico-portugal" }],
  },
  "/blog/maldivas-desde-puerto-rico-guia": {
    title: "Maldivas desde Puerto Rico — Guía Completa | SJU Luxe Travel",
    description: "Cómo planificar tu viaje a Maldivas desde Puerto Rico: rutas de vuelo, mejores resorts, temporada ideal y beneficios exclusivos de concierge.",
    h1: "Maldivas desde Puerto Rico — Guía Completa",
    body: "Guía completa para planificar tu viaje a Maldivas desde Puerto Rico. Cubrimos rutas de vuelo, mejores resorts con villa overwater, temporada ideal y beneficios exclusivos que solo un asesor de lujo puede reservar.",
    datePublished: "2026-02-25", dateModified: "2026-04-15",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Maldivas desde PR", path: "/blog/maldivas-desde-puerto-rico-guia" }],
  },
  "/blog/servicios-concierge-viaje": {
    title: "Servicios de Concierge de Viaje — Qué Incluyen | SJU Luxe Travel",
    description: "Qué incluye realmente un servicio de concierge de viaje de lujo: reservas VIP, upgrades, asistencia 24/7 y beneficios exclusivos.",
    h1: "Servicios de Concierge de Viaje — Qué Incluyen",
    body: "Explicamos qué incluye realmente un servicio de concierge de viaje de lujo: reservas VIP en restaurantes, upgrades de habitación, asistencia 24/7 durante el viaje y beneficios exclusivos que no puedes conseguir por tu cuenta.",
    datePublished: "2026-01-20", dateModified: "2026-03-10",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Servicios de Concierge", path: "/blog/servicios-concierge-viaje" }],
  },
  "/blog/viajes-sin-pasaporte-desde-pr": {
    title: "Viajes sin Pasaporte desde Puerto Rico | SJU Luxe Travel",
    description: "Los mejores destinos sin necesidad de pasaporte desde Puerto Rico: Islas Vírgenes, Hawái, ciudades de EE.UU. y escapadas de lujo.",
    h1: "Viajes sin Pasaporte desde Puerto Rico",
    body: "Descubre los mejores destinos de lujo que puedes visitar sin pasaporte desde Puerto Rico: Islas Vírgenes de EE.UU., Hawái, y ciudades del continente. Escapadas premium accesibles sin el trámite del pasaporte.",
    datePublished: "2026-02-05", dateModified: "2026-02-05",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Viajes sin Pasaporte", path: "/blog/viajes-sin-pasaporte-desde-pr" }],
  },
  "/blog/luxury-solo-female-travel": {
    title: "Luxury Solo Female Travel — A Complete Guide | SJU Luxe Travel",
    description: "How to plan luxury solo female travel with safety, style and exclusive perks. Curated destinations and insider tips from your travel advisor.",
    h1: "Luxury Solo Female Travel — A Complete Guide",
    body: "How to plan luxury solo female travel with confidence: safest destinations, best-in-class resorts, private guided experiences, and the concierge perks that make a solo trip feel effortless and elevated.",
    datePublished: "2026-03-28", dateModified: "2026-05-05", forcedLang: "en",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Luxury Solo Female Travel", path: "/blog/luxury-solo-female-travel" }],
  },
  "/blog/wellness-travel-intentional-luxury": {
    title: "Wellness Travel — Intentional Luxury Retreats | SJU Luxe Travel",
    description: "Wellness travel is the new luxury. Discover intentional retreats, spa journeys and transformative escapes designed by a boutique advisor.",
    h1: "Wellness Travel — Intentional Luxury Retreats",
    body: "Wellness travel is redefining luxury. Discover intentional retreats, spa-forward resorts, and transformative journeys — from Ayurvedic escapes to alpine detox — designed around what you actually need to reset.",
    datePublished: "2026-04-30", dateModified: "2026-04-30", forcedLang: "en",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Wellness Travel", path: "/blog/wellness-travel-intentional-luxury" }],
  },
  "/blog/crucero-fluvial-duero-desde-puerto-rico": {
    title: "Crucero Fluvial por el Duero desde Puerto Rico: Portugal desde el Río | SJU Luxe Travel",
    description: "Cómo planificar un crucero fluvial de lujo por el Duero desde San Juan: navieras (AmaWaterways, Scenic, Uniworld), rutas de vuelo, mejor temporada y experiencias de bodega en Portugal.",
    h1: "Crucero Fluvial por el Duero desde Puerto Rico: Portugal desde el Río",
    body: "Guía completa para hacer un crucero fluvial por el Duero desde Puerto Rico. Comparamos AmaWaterways, Scenic y Uniworld, la mejor temporada (mayo, junio, septiembre y octubre para la vendimia), las rutas de vuelo desde SJU vía MIA o JFK, y las experiencias privadas de bodega en las quintas del valle vinícola más antiguo del mundo.",
    datePublished: "2026-07-08", dateModified: "2026-07-08",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Crucero Fluvial Duero desde PR", path: "/blog/crucero-fluvial-duero-desde-puerto-rico" }],
  },
  "/blog/excursiones-de-lujo-san-juan-puerto-cruceros": {
    title: "Excursiones de Lujo desde el Puerto de Cruceros de San Juan | SJU Luxe Travel",
    description: "Guía de excursiones privadas de lujo para pasajeros de crucero en San Juan: tours privados del Viejo San Juan, El Yunque, catamarán y experiencias gastronómicas coordinadas por un concierge local.",
    h1: "Excursiones de Lujo desde el Puerto de Cruceros de San Juan",
    body: "Guía para pasajeros de crucero que atracan en San Juan: por qué reservar excursiones privadas en vez de las oficiales del barco, las cinco excursiones de lujo que más reservamos (Viejo San Juan con historiador, El Yunque privado, catamarán a Icacos, tour gastronómico farm-to-table, combo Bacardí Reserva) y cómo un concierge local coordina cada detalle con vehículo privado, guía bilingüe y reservas confirmadas.",
    datePublished: "2026-07-08", dateModified: "2026-07-08",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Excursiones de Lujo San Juan", path: "/blog/excursiones-de-lujo-san-juan-puerto-cruceros" }],
  },
  "/contact": {
    title: "Consulta Gratis de Viajes de Lujo — Contacto | SJU Luxe Travel",
    description: "Agenda tu consulta gratis de viajes de lujo con SJU Luxe Travel. Cruceros de lujo, tours privados, viajes solo y más. Teléfono: (617) 935-5714.",
    h1: "Consulta Gratis de Viajes de Lujo — Contacta a tu Asesor de Lujo",
    body: "Agenda hoy tu consulta gratis de viajes de lujo. Ya sea que planifiques cruceros de lujo desde San Juan, tours privados guiados, viajes de lujo solo para mujeres, viajes corporativos de incentivos o destinos exclusivos sin turismo masivo, tu asesor boutique de viajes está listo. Teléfono: (617) 935-5714. Email: info@sjuluxetravel.com.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Contacto", path: "/contact" }],
  },
  "/privacy": {
    title: "Política de Privacidad | SJU Luxe Travel",
    description: "Política de Privacidad de SJU Luxe Travel. Conoce cómo recopilamos, usamos y protegemos tu información personal al planificar tu experiencia de viaje de lujo.",
    h1: "Política de Privacidad",
    body: "Esta Política de Privacidad describe cómo SJU Luxe Travel recopila, usa y protege tu información personal cuando utilizas nuestros servicios de asesoría de viajes de lujo.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Privacidad", path: "/privacy" }],
  },
  "/terms": {
    title: "Términos de Servicio | SJU Luxe Travel",
    description: "Términos de Servicio de SJU Luxe Travel — agencia boutique de viajes de lujo en San Juan, Puerto Rico. Revisa nuestras condiciones de reserva, cancelación y servicio.",
    h1: "Términos de Servicio",
    body: "Estos Términos de Servicio rigen el uso de los servicios de asesoría de viajes de lujo a medida de SJU Luxe Travel.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Términos", path: "/terms" }],
  },
  "/viajes-de-lujo-desde-puerto-rico": {
    title: "Viajes de Lujo desde Puerto Rico — Itinerarios Privados a Medida | SJU Luxe Travel",
    description: "Agencia de viajes de lujo boutique en San Juan, Puerto Rico. Itinerarios privados a medida, cruceros, lunas de miel y destinos exclusivos sin turismo masivo.",
    h1: "Viajes de Lujo desde Puerto Rico — Itinerarios Privados a Medida",
    body: "SJU Luxe Travel es tu agente de viajes bilingüe en San Juan, Puerto Rico. Diseñamos viajes privados de lujo desde Puerto Rico con itinerarios a medida, acceso exclusivo y los beneficios VIP de NCM Concierge.",
    service: { name: "Viajes privados de lujo desde Puerto Rico", serviceType: "Luxury travel planning" },
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Viajes de Lujo desde Puerto Rico", path: "/viajes-de-lujo-desde-puerto-rico" }],
  },
  "/luna-de-miel-de-lujo": {
    title: "Luna de Miel de Lujo desde Puerto Rico — Maldivas, Bora Bora & Más | SJU Luxe Travel",
    description: "Planifica tu luna de miel de lujo con SJU Luxe Travel. Maldivas, Bora Bora, Santorini y más con villas overwater y experiencias privadas exclusivas.",
    h1: "Luna de Miel de Lujo desde Puerto Rico",
    body: "Tu luna de miel merece más que un paquete genérico. Diseñamos lunas de miel de lujo a medida desde Puerto Rico hacia los destinos más románticos del mundo: Maldivas, Bora Bora, Santorini, Bali y más.",
    service: { name: "Planificación de luna de miel de lujo", serviceType: "Honeymoon travel planning" },
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Luna de Miel de Lujo", path: "/luna-de-miel-de-lujo" }],
  },
  "/cruceros-de-lujo-desde-san-juan": {
    title: "Cruceros de Lujo desde San Juan — Caribe, Mediterráneo & Mundiales | SJU Luxe Travel",
    description: "Reserva tu crucero de lujo desde San Juan, Puerto Rico. Regent, Silversea, Seabourn y Crystal con suites premium y beneficios exclusivos de concierge.",
    h1: "Cruceros de Lujo desde San Juan, Puerto Rico",
    body: "Descubre los mejores cruceros de lujo que zarpan desde San Juan, Puerto Rico. Trabajamos con Regent Seven Seas, Silversea, Seabourn y Crystal Cruises para reservar suites premium con créditos a bordo, excursiones privadas y beneficios exclusivos de NCM Concierge.",
    service: { name: "Cruceros de lujo desde San Juan", serviceType: "Luxury cruise planning" },
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Cruceros de Lujo desde San Juan", path: "/cruceros-de-lujo-desde-san-juan" }],
  },
  "/cruceros-fluviales-de-lujo-desde-puerto-rico": {
    title: "Cruceros Fluviales de Lujo desde Puerto Rico — Europa & Asia | SJU Luxe Travel",
    description: "Planifica tu crucero fluvial de lujo desde Puerto Rico. Danubio, Rin, Sena, Mekong y Nilo con AmaWaterways, Uniworld y Scenic. Suites con balcón privado.",
    h1: "Cruceros Fluviales de Lujo desde Puerto Rico",
    body: "Explora Europa y Asia a bordo de los cruceros fluviales más exclusivos del mundo. Diseñamos itinerarios fluviales de lujo por el Danubio, Rin, Sena, Mekong y Nilo con AmaWaterways, Uniworld y Scenic.",
    service: { name: "Cruceros fluviales de lujo desde Puerto Rico", serviceType: "Luxury river cruise planning" },
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Cruceros Fluviales de Lujo", path: "/cruceros-fluviales-de-lujo-desde-puerto-rico" }],
  },
};

// English translations (only where a real EN variant exists)
const pagesEn = {
  "/about": {
    title: "About SJU Luxe Travel — Luxury Travel Advisor in Puerto Rico",
    description: "Meet Daniel Santiago Díaz, certified bilingual luxury travel advisor in San Juan, Puerto Rico. Bespoke itineraries and exclusive NCM Concierge perks.",
    h1: "About SJU Luxe Travel — Your Bilingual Luxury Travel Advisor",
    body: "Founded by Daniel Santiago Díaz, a certified bilingual professional and private travel concierge with over a decade of luxury sales experience across six continents. As an independent agent of NCM Concierge, part of Travel Leaders, we deliver intentional luxury travel experiences, bespoke itineraries, and exclusive perks you won't get booking online. Licensed in Florida (ST15578), California, Washington, and Iowa.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }],
  },
  "/destinations": {
    title: "Luxury Destinations — Maldives, Portugal, Mexico & More | SJU Luxe Travel",
    description: "Explore curated luxury destinations from your Puerto Rico travel advisor: Maldives, Portugal, Mexico and more. Exclusive NCM Concierge perks at every property.",
    h1: "Luxury Destinations — Curated by Your Private Travel Concierge",
    body: "Explore our curated collection of luxury destinations: overwater villas in the Maldives, luxury itineraries through Lisbon and the Algarve in Portugal, luxury Mexico packages across the Riviera Maya and Oaxaca, and luxury cruises sailing from San Juan, Puerto Rico.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }],
  },
  "/destinations/maldives": {
    title: "Luxury Maldives Travel — Overwater Villas & Private Resorts | SJU Luxe Travel",
    description: "Plan your luxury Maldives trip with SJU Luxe Travel. Overwater villas, private dining, diving and exclusive resort perks from San Juan, PR.",
    h1: "Luxury Maldives Travel — Overwater Villas & Private Island Resorts",
    body: "Experience the ultimate in luxury with our bespoke Maldives packages. From overwater villas at the world's top resorts to private island experiences, your luxury travel advisor handles every detail with exclusive NCM Concierge perks.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Maldives", path: "/destinations/maldives" }],
  },
  "/destinations/portugal": {
    title: "Luxury Portugal Travel — Lisbon, Algarve & Porto | SJU Luxe Travel",
    description: "Plan your luxury Portugal itinerary with SJU Luxe Travel. Lisbon, Porto, Algarve and the Douro Valley. Boutique travel agency in San Juan, PR.",
    h1: "Luxury Portugal Travel — Lisbon, Algarve & Porto",
    body: "Discover Portugal with a bespoke luxury itinerary. From the historic charm of Lisbon to the Algarve coast and the Porto wine region, we design private guided tours with exclusive NCM Concierge perks at the best properties.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Portugal", path: "/destinations/portugal" }],
  },
  "/destinations/mexico": {
    title: "Luxury Mexico Travel — Riviera Maya, Oaxaca & More | SJU Luxe Travel",
    description: "Plan your luxury Mexico trip with SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca, cenotes and exclusive resort perks. Bespoke itineraries from San Juan, PR.",
    h1: "Luxury Mexico Travel — Riviera Maya, Oaxaca & More",
    body: "Experience the best of Mexico with our luxury packages. From the pristine beaches of the Riviera Maya to Oaxaca's culinary treasures, we design bespoke itineraries with private guided tours and exclusive NCM Concierge perks.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Mexico", path: "/destinations/mexico" }],
  },
  "/blog": {
    title: "Luxury Travel Blog — Tips, Guides & Insights | SJU Luxe Travel",
    description: "Expert luxury travel insights from your boutique advisor in San Juan, Puerto Rico. Tips on intentional luxury travel and bespoke itineraries.",
    h1: "Luxury Travel Blog — Tips, Guides & Insights",
    body: "Expert luxury travel insights from your boutique advisor in San Juan, Puerto Rico. Learn about intentional luxury travel, why travel agents save you money, and how to plan bespoke itineraries to the world's most exclusive destinations.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }],
  },
  "/contact": {
    title: "Free Luxury Travel Consultation — Contact | SJU Luxe Travel",
    description: "Schedule your free luxury travel consultation with SJU Luxe Travel. Luxury cruises, private tours, solo travel and more. Phone: (617) 935-5714.",
    h1: "Free Luxury Travel Consultation — Contact Your Advisor",
    body: "Schedule your free luxury travel consultation today. Whether you're planning luxury cruises from San Juan, private guided tours, luxury solo female travel, corporate incentive travel or exclusive destinations without mass tourism, your boutique travel advisor is ready. Phone: (617) 935-5714. Email: info@sjuluxetravel.com.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }],
  },
  "/privacy": {
    title: "Privacy Policy | SJU Luxe Travel",
    description: "SJU Luxe Travel Privacy Policy. Learn how we collect, use and protect your personal information when planning your luxury travel experience.",
    h1: "Privacy Policy",
    body: "This Privacy Policy describes how SJU Luxe Travel collects, uses, and protects your personal information when you use our luxury travel advisory services.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }],
  },
  "/terms": {
    title: "Terms of Service | SJU Luxe Travel",
    description: "SJU Luxe Travel Terms of Service — boutique luxury travel agency in San Juan, Puerto Rico. Review our booking, cancellation and service conditions.",
    h1: "Terms of Service",
    body: "These Terms of Service govern the use of SJU Luxe Travel's bespoke luxury travel advisory services.",
    breadcrumbs: [{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }],
  },
};

// Homepage x-default content is ENGLISH (see phase 4)
const ROOT_CONTENT_EN = {
  title: "SJU Luxe Travel | Luxury Travel Agency in San Juan, Puerto Rico",
  description: "Boutique luxury travel agency in San Juan, Puerto Rico. Bespoke itineraries to the Maldives, Portugal, Mexico and more with exclusive concierge perks.",
  h1: "SJU Luxe Travel — Boutique Luxury Travel Agency in San Juan, Puerto Rico",
  body: "SJU Luxe Travel is a boutique luxury travel agency in San Juan, Puerto Rico, designing bespoke itineraries to the Maldives, Portugal, Mexico and beyond. Founded by Daniel Santiago Díaz, we secure exclusive NCM Concierge perks — complimentary upgrades, resort credits and VIP amenities — plus luxury cruises departing from San Juan, curated solo female travel, and corporate incentive programs, so every trip is planned with intention and insider access.",
};

const ROOT_CONTENT_ES = {
  title: "SJU Luxe Travel | Agencia de Viajes de Lujo en San Juan, Puerto Rico",
  description: "Agencia boutique de viajes de lujo en San Juan, Puerto Rico. Itinerarios a medida a Maldivas, Portugal, México y más con beneficios exclusivos de concierge.",
  h1: "SJU Luxe Travel — Agencia Boutique de Viajes de Lujo en San Juan, Puerto Rico",
  body: "SJU Luxe Travel es una agencia boutique de viajes de lujo en San Juan, Puerto Rico. Diseñamos itinerarios a medida a Maldivas, Portugal, México y más allá, con beneficios exclusivos de NCM Concierge: upgrades cortesía, créditos de resort y amenidades VIP. También reservamos cruceros de lujo desde San Juan, viajes de lujo solo para mujeres y viajes corporativos de incentivo, siempre con acceso privado y planificación intencional.",
};

// ---------------------------------------------------------------
// Route manifest — single source of truth for hreflang + sitemap
// locales: which language variants exist on disk (default = canonical URL)
// ---------------------------------------------------------------
const ROUTE_MANIFEST = [
  { path: "/", locales: ["default", "en", "es"], type: "home", hreflang: true },
  ...Object.keys(pages).map((p) => {
    const isBlogPost = p.startsWith("/blog/");
    const hasEn = !!pagesEn[p];
    return {
      path: p,
      // Blog posts: single language, NO hreflang (per audit).
      // Non-blog pages that have an EN translation get all three variants.
      locales: isBlogPost ? ["default"] : hasEn ? ["default", "en", "es"] : ["default", "es"],
      type: isBlogPost ? "blog-post" : p === "/blog" ? "blog-list" : p === "/about" ? "about" : p === "/contact" ? "contact" : pages[p].service ? "service" : "webpage",
      hreflang: !isBlogPost && hasEn, // only emit hreflang when a full EN/ES/x-default set exists
    };
  }),
];

// ---------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------
const getCanonicalUrl = (route, lang) => {
  const prefix = lang === "en" ? "/en" : lang === "es" ? "/es" : "";
  if (route === "/") return `${HOSTNAME}${prefix || "/"}`;
  return `${HOSTNAME}${prefix}${route}`;
};

const buildAlternateLinksFor = (route) => {
  const entry = ROUTE_MANIFEST.find((r) => r.path === route);
  if (!entry || !entry.hreflang) return "";
  const xDefault = getCanonicalUrl(route, "default");
  const en = getCanonicalUrl(route, "en");
  const es = getCanonicalUrl(route, "es");
  return `
    <link rel="alternate" hreflang="es-PR" href="${es}" />
    <link rel="alternate" hreflang="en" href="${en}" />
    <link rel="alternate" hreflang="x-default" href="${xDefault}" />`;
};

const ORG_SCHEMA = {
  "@type": "TravelAgency",
  "@id": ORG_ID,
  name: "SJU Luxe Travel",
  url: HOSTNAME,
  logo: LOGO_URL,
  image: DEFAULT_OG,
  telephone: "+1-617-935-5714",
  email: "info@sjuluxetravel.com",
  priceRange: "$$$",
  areaServed: "Worldwide",
  knowsLanguage: ["en", "es"],
  founder: { "@type": "Person", name: "Daniel Santiago Díaz", jobTitle: "Luxury Travel Advisor" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Juan",
    addressRegion: "PR",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 18.4655, longitude: -66.1057 },
  sameAs: [
    "https://www.instagram.com/sjuluxetravel/",
    "https://www.facebook.com/sjuluxetravel",
    "https://www.linkedin.com/company/sju-luxe-travel",
  ],
};

const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: HOSTNAME,
  name: "SJU Luxe Travel",
  publisher: { "@id": ORG_ID },
  inLanguage: ["en", "es"],
};

const buildBreadcrumbs = (breadcrumbs) => {
  if (!breadcrumbs || breadcrumbs.length < 2) return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: `${HOSTNAME}${b.path === "/" ? "/" : b.path}`,
    })),
  };
};

const buildSchema = (route, content, canonical, lang) => {
  const entry = ROUTE_MANIFEST.find((r) => r.path === route);
  const type = entry?.type || "webpage";
  const inLanguage = lang === "en" || content.forcedLang === "en" ? "en" : lang === "es" ? "es" : "en"; // "/" default is English

  const image = ROUTE_IMAGES[route] || DEFAULT_OG;

  let primary;
  if (type === "blog-post") {
    primary = {
      "@type": "BlogPosting",
      headline: content.h1,
      description: content.description,
      image,
      inLanguage,
      mainEntityOfPage: canonical,
      url: canonical,
      datePublished: content.datePublished || "2026-01-01",
      dateModified: content.dateModified || content.datePublished || "2026-01-01",
      author: { "@type": "Person", name: "Daniel Santiago Díaz", url: `${HOSTNAME}/about` },
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": WEBSITE_ID },
    };
  } else if (type === "blog-list") {
    primary = { "@type": "Blog", name: content.h1, url: canonical, inLanguage, publisher: { "@id": ORG_ID }, isPartOf: { "@id": WEBSITE_ID } };
  } else if (type === "about") {
    primary = { "@type": "AboutPage", name: content.h1, url: canonical, inLanguage, mainEntity: { "@id": ORG_ID }, isPartOf: { "@id": WEBSITE_ID } };
  } else if (type === "contact") {
    primary = { "@type": "ContactPage", name: content.h1, url: canonical, inLanguage, mainEntity: { "@id": ORG_ID }, isPartOf: { "@id": WEBSITE_ID } };
  } else if (type === "home") {
    primary = { "@type": "WebPage", name: content.h1, description: content.description, url: canonical, inLanguage, isPartOf: { "@id": WEBSITE_ID } };
  } else {
    primary = { "@type": "WebPage", name: content.h1, description: content.description, url: canonical, inLanguage, isPartOf: { "@id": WEBSITE_ID } };
  }

  const graph = [ORG_SCHEMA, WEBSITE_SCHEMA, primary];

  // Breadcrumbs: never on the homepage
  const bc = buildBreadcrumbs(content.breadcrumbs);
  if (bc && route !== "/") graph.push(bc);

  // Service schema for the four landing pages
  if (content.service) {
    graph.push({
      "@type": "Service",
      name: content.service.name,
      serviceType: content.service.serviceType,
      description: content.description,
      provider: { "@id": ORG_ID },
      areaServed: "Puerto Rico",
      availableLanguage: ["es", "en"],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

const applyOgImage = (html, route) => {
  const img = ROUTE_IMAGES[route];
  if (!img) return html;
  return html
    .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${img}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${img}" />`);
};

const injectJsonLd = (html, schema) => {
  const cleaned = html.replace(/\s*<script type="application\/ld\+json" data-prerender>[\s\S]*?<\/script>/g, "");
  const tag = `    <script type="application/ld+json" data-prerender>${JSON.stringify(schema)}</script>\n`;
  return cleaned.replace("</head>", () => `${tag}</head>`);
};

// Replace or insert canonical + optional hreflang, always strip stale hreflang
const applyCanonicalAndHreflang = (html, canonical, route) => {
  const alt = buildAlternateLinksFor(route);
  // Strip any existing hreflang links
  let out = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>/g, "");
  // Insert or replace canonical (base template has none)
  if (/<link rel="canonical" href="[^"]*"\s*\/?>/.test(out)) {
    out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />${alt}`);
  } else {
    out = out.replace("</head>", `    <link rel="canonical" href="${canonical}" />${alt}\n</head>`);
  }
  return out;
};

const routeToDir = (...parts) => {
  const sanitized = parts.filter(Boolean).map((p) => p.replace(/^\/+|\/+$/g, "")).filter(Boolean);
  return path.join(DIST, ...sanitized);
};

const writeHtmlFile = (dir, html) => {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
};

// ---------------------------------------------------------------
// Render helpers
// ---------------------------------------------------------------
const renderPageHtml = ({ route, content, lang, canonical }) => {
  const htmlLang = lang === "es" ? "es-PR" : "en";
  const ogLocale = lang === "es" ? "es_PR" : "en_US";
  const ogLocaleAlt = lang === "es" ? "en_US" : "es_PR";

  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${htmlLang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${content.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${content.description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${content.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${content.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:locale" content="[^"]*"\s*\/?>/, `<meta property="og:locale" content="${ogLocale}" />`)
    .replace(/<meta property="og:locale:alternate" content="[^"]*"\s*\/?>/, `<meta property="og:locale:alternate" content="${ogLocaleAlt}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${content.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${content.description}" />`)
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root"><h1>${content.h1}</h1><p>${content.body}</p></div>`);

  html = applyCanonicalAndHreflang(html, canonical, route);
  html = applyOgImage(html, route);
  html = injectJsonLd(html, buildSchema(route, content, canonical, lang));
  return html;
};

// ---------------------------------------------------------------
// Emit files
// ---------------------------------------------------------------
let count = 0;

// Homepage x-default (English content)
{
  const canonical = getCanonicalUrl("/", "default");
  const html = renderPageHtml({ route: "/", content: ROOT_CONTENT_EN, lang: "en", canonical });
  writeHtmlFile(routeToDir(), html);
  count++;
}
// Homepage /en (English)
{
  const canonical = getCanonicalUrl("/", "en");
  const html = renderPageHtml({ route: "/", content: ROOT_CONTENT_EN, lang: "en", canonical });
  writeHtmlFile(routeToDir("en"), html);
  count++;
}
// Homepage /es (Spanish)
{
  const canonical = getCanonicalUrl("/", "es");
  const html = renderPageHtml({ route: "/", content: ROOT_CONTENT_ES, lang: "es", canonical });
  writeHtmlFile(routeToDir("es"), html);
  count++;
}

for (const entry of ROUTE_MANIFEST) {
  if (entry.path === "/") continue;
  const content = pages[entry.path];
  if (!content) continue;

  // Determine default-variant language from content or forcedLang
  const defaultLang = content.forcedLang === "en" ? "en" : "es";

  // x-default (canonical, no /en /es prefix)
  {
    const canonical = getCanonicalUrl(entry.path, "default");
    const html = renderPageHtml({ route: entry.path, content, lang: defaultLang, canonical });
    writeHtmlFile(routeToDir(entry.path), html);
    count++;
  }
  // /es variant
  if (entry.locales.includes("es")) {
    const canonical = getCanonicalUrl(entry.path, "es");
    const html = renderPageHtml({ route: entry.path, content, lang: "es", canonical });
    writeHtmlFile(routeToDir("es", entry.path), html);
    count++;
  }
  // /en variant
  if (entry.locales.includes("en")) {
    const enContent = pagesEn[entry.path];
    if (enContent) {
      const canonical = getCanonicalUrl(entry.path, "en");
      const html = renderPageHtml({ route: entry.path, content: enContent, lang: "en", canonical });
      writeHtmlFile(routeToDir("en", entry.path), html);
      count++;
    }
  }
}

// Export manifest for the sitemap generator
fs.writeFileSync(
  path.join(DIST, "route-manifest.json"),
  JSON.stringify(ROUTE_MANIFEST.map((e) => ({
    ...e,
    lastmod: pages[e.path]?.dateModified || pages[e.path]?.datePublished || null,
  })), null, 2)
);

console.log(`✅ Prerendered ${count} HTML files (manifest exported to route-manifest.json)`);
