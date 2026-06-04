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

// Per-route OG image overrides (absolute URLs). Falls back to default og-image.jpg.
const ROUTE_IMAGES = {
  "/blog/luna-de-miel-puerto-rico-2026": `${HOSTNAME}/og/honeymoon-2026.png`,
  "/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside": `${HOSTNAME}/og/cruceros-fluviales.jpg`,
  "/blog/vale-la-pena-asesor-viajes-2026": `${HOSTNAME}/og/vale-la-pena-asesor-2026.jpg`,
  "/blog/vuelos-puerto-rico-portugal": `${HOSTNAME}/og/vuelos-puerto-rico-portugal.jpg`,
  "/blog/maldivas-desde-puerto-rico-guia": `${HOSTNAME}/og/maldivas-desde-puerto-rico.jpg`,
  "/blog/servicios-concierge-viaje": `${HOSTNAME}/og/servicios-concierge-viaje.jpg`,
  "/blog/viajes-sin-pasaporte-desde-pr": `${HOSTNAME}/og/viajes-sin-pasaporte.jpg`,
  "/blog/luxury-solo-female-travel": `${HOSTNAME}/og/luxury-solo-female-travel.jpg`,
  "/blog/wellness-travel": `${HOSTNAME}/og/wellness-travel.jpg`,
  "/blog/river-cruising-new-generation": `${HOSTNAME}/og/river-cruising-new-generation.jpg`,
  "/blog/what-luxury-travel-really-means": `${HOSTNAME}/og/what-luxury-travel-means.jpg`,
  "/blog/do-travel-agents-really-help-save-money": `${HOSTNAME}/og/do-travel-agents-save-money.jpg`,
  "/blog/micro-vacaciones-futuro-del-viaje": `${HOSTNAME}/og/micro-vacaciones.jpg`,
};

const applyOgImage = (html, route) => {
  const img = ROUTE_IMAGES[route];
  if (!img) return html;
  return html
    .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${img}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${img}" />`);
};

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
  "/blog/river-cruising-new-generation",
  "/blog/luna-de-miel-puerto-rico-2026",
  "/blog/cruceros-fluviales-ama-vs-avalon-vs-riverside",
  "/blog/vale-la-pena-asesor-viajes-2026",
  "/blog/vuelos-puerto-rico-portugal",
  "/blog/maldivas-desde-puerto-rico-guia",
  "/blog/servicios-concierge-viaje",
  "/blog/viajes-sin-pasaporte-desde-pr",
  "/blog/luxury-solo-female-travel",
  "/blog/wellness-travel",
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
  "/blog/river-cruising-new-generation": {
    title: "Luxury River Cruising Isn't Just for Your Parents Anymore | SJU Luxe Travel",
    description: "84% of travelers under 35 want to take a river cruise. A luxury travel advisor explains why — and how to get the most out of the experience.",
    h1: "River Cruising Isn't Just for Your Parents Anymore — And That Changes Everything",
    body: "84% of UK travelers aged 18–34 are interested in river cruising. A luxury travel advisor unpacks why a new generation is discovering river cruising — all-inclusive value, walk-off-the-ship convenience, and itineraries on the Danube, Rhine, Douro and Mekong that are best experienced from the water.",
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

const pagesEn = {
  "/about": {
    title: "About SJU Luxe Travel — Luxury Travel Advisor in Puerto Rico",
    description: "Meet Daniel Santiago Díaz, certified bilingual luxury travel advisor in San Juan, Puerto Rico. Bespoke itineraries and exclusive NCM Concierge perks.",
    h1: "About SJU Luxe Travel — Your Bilingual Luxury Travel Advisor",
    body: "Founded by Daniel Santiago Díaz, a certified bilingual professional and private travel concierge with over a decade of luxury sales experience across six continents. As an independent agent of NCM Concierge, part of Travel Leaders, we deliver intentional luxury travel experiences, bespoke itineraries, and exclusive perks you won't get booking online. Licensed in Florida (ST15578), California, Washington, and Iowa.",
  },
  "/destinations": {
    title: "Luxury Destinations — Maldives, Portugal, Mexico & More | SJU Luxe Travel",
    description: "Explore curated luxury destinations from your Puerto Rico travel advisor: Maldives, Portugal, Mexico and more. Exclusive NCM Concierge perks at every property.",
    h1: "Luxury Destinations — Curated by Your Private Travel Concierge",
    body: "Explore our curated collection of luxury destinations: overwater villas in the Maldives, luxury itineraries through Lisbon and the Algarve in Portugal, luxury packages in Mexico across the Riviera Maya and Oaxaca, and luxury cruises sailing from San Juan, Puerto Rico. Every bespoke itinerary is designed personally with exclusive access and NCM Concierge VIP perks.",
  },
  "/destinations/maldives": {
    title: "Luxury Travel to the Maldives — Overwater Villas & Private Resorts | SJU Luxe Travel",
    description: "Plan your luxury Maldives trip with SJU Luxe Travel. Overwater villas, private dining, diving and exclusive resort perks from San Juan, PR.",
    h1: "Luxury Travel to the Maldives — Overwater Villas & Private Island Resorts",
    body: "Experience ultimate luxury with our bespoke Maldives packages. From overwater villas at the world's top resorts to private island experiences, your luxury travel advisor handles every detail with exclusive NCM Concierge perks: room upgrades, resort credits, and VIP amenities.",
  },
  "/destinations/portugal": {
    title: "Luxury Travel to Portugal — Lisbon, Algarve & Porto | SJU Luxe Travel",
    description: "Plan your luxury Portugal itinerary with SJU Luxe Travel. Lisbon, Porto, the Algarve, and the Douro Valley. Boutique travel agency in San Juan, PR.",
    h1: "Luxury Travel to Portugal — Lisbon, Algarve & Porto",
    body: "Discover Portugal with a bespoke luxury itinerary. From the historic charm of Lisbon to the Algarve coast and the Porto wine region, we design private guided tours with exclusive NCM Concierge perks at the best properties.",
  },
  "/destinations/mexico": {
    title: "Luxury Travel to Mexico — Riviera Maya, Oaxaca & More | SJU Luxe Travel",
    description: "Plan your luxury Mexico trip with SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca, cenotes and exclusive resort perks. Bespoke itineraries from San Juan, PR.",
    h1: "Luxury Travel to Mexico — Riviera Maya, Oaxaca & More",
    body: "Experience the best of Mexico with our luxury packages. From the pristine beaches of the Riviera Maya to the culinary treasures of Oaxaca, we design bespoke itineraries with private guided tours and exclusive NCM Concierge perks.",
  },
  "/blog": {
    title: "Luxury Travel Blog — Tips, Guides & Insights | SJU Luxe Travel",
    description: "Expert luxury travel insights from your boutique advisor in San Juan, Puerto Rico. Tips on intentional luxury travel and bespoke itineraries.",
    h1: "Luxury Travel Blog — Tips, Guides & Insights",
    body: "Expert luxury travel insights from your boutique advisor in San Juan, Puerto Rico. Learn about intentional luxury travel, why travel agents save you money, and how to plan bespoke itineraries to the world's most exclusive destinations.",
  },
  "/blog/what-luxury-travel-really-means": {
    title: "What Luxury Travel Really Means — Beyond Five Stars | SJU Luxe Travel",
    description: "Luxury travel isn't about price. Learn what intentional luxury travel really means and why a boutique agency delivers transformative experiences.",
    h1: "What Luxury Travel Really Means — Beyond Five Stars",
    body: "Luxury travel isn't about price or star rating. It's about intentional experiences, private access, and moments that transform how you see the world. Learn what intentional luxury travel really means and why a boutique agency delivers experiences mass tourism never can.",
  },
  "/blog/do-travel-agents-really-help-save-money": {
    title: "Are Travel Agents Worth It? Do They Save You Money? | SJU Luxe Travel",
    description: "Discover why luxury travelers choose travel agents over booking online. Exclusive perks, upgrades, and bespoke planning that saves time and money.",
    h1: "Are Travel Agents Worth It? Do They Really Save You Money?",
    body: "Discover why luxury travelers consistently choose travel agents over online booking. From NCM Concierge exclusive perks like complimentary upgrades and resort credits, to insider access and bespoke itinerary planning, learn how a boutique agency saves you time and money.",
  },
  "/blog/micro-vacaciones-futuro-del-viaje": {
    title: "Are Micro-Vacations the Future of Travel? | SJU Luxe Travel",
    description: "Discover why luxury micro-vacations (3–4 days) are the new trend: short, intentional, transformative escapes from Puerto Rico.",
    h1: "Are Micro-Vacations the Future of Travel?",
    body: "Micro-vacations — luxury 3 to 4 day escapes — are becoming the preferred way to travel for busy professionals. Discover how to plan intentional, transformative micro-vacations from San Juan, Puerto Rico, with bespoke itineraries, private access, and exclusive NCM Concierge perks.",
  },
  "/blog/river-cruising-new-generation": {
    title: "Luxury River Cruising Isn't Just for Your Parents Anymore | SJU Luxe Travel",
    description: "84% of travelers under 35 want to take a river cruise. A luxury travel advisor explains why — and how to get the most out of the experience.",
    h1: "River Cruising Isn't Just for Your Parents Anymore — And That Changes Everything",
    body: "84% of UK travelers aged 18–34 are interested in river cruising. A luxury travel advisor unpacks why a new generation is discovering river cruising — all-inclusive value, walk-off-the-ship convenience, and itineraries on the Danube, Rhine, Douro and Mekong best experienced from the water.",
  },
  "/contact": {
    title: "Free Luxury Travel Consultation — Contact | SJU Luxe Travel",
    description: "Book your free luxury travel consultation with SJU Luxe Travel. Luxury cruises, private tours, solo travel and more. Phone: (617) 935-5714.",
    h1: "Free Luxury Travel Consultation — Contact Your Luxury Advisor",
    body: "Book your free luxury travel consultation today. Whether you're planning luxury cruises from San Juan, private guided tours, women's luxury solo travel, corporate incentive trips, or exclusive destinations away from mass tourism, your boutique travel advisor is ready. Phone: (617) 935-5714. Email: dsantiago@ncmconcierge.com.",
  },
  "/privacy": {
    title: "Privacy Policy | SJU Luxe Travel",
    description: "SJU Luxe Travel Privacy Policy. Learn how we collect, use, and protect your personal information when planning your luxury travel experience.",
    h1: "Privacy Policy",
    body: "This Privacy Policy describes how SJU Luxe Travel collects, uses, and protects your personal information when you use our luxury travel advisory services. We are committed to safeguarding the privacy of our clients in Puerto Rico, the United States, and around the world.",
  },
  "/terms": {
    title: "Terms of Service | SJU Luxe Travel",
    description: "SJU Luxe Travel Terms of Service — boutique luxury travel agency in San Juan, Puerto Rico. Review our booking, cancellation and service conditions.",
    h1: "Terms of Service",
    body: "These Terms of Service govern use of SJU Luxe Travel's bespoke luxury travel advisory services. Review our booking, cancellation and service conditions before engaging our boutique travel agency in San Juan, Puerto Rico.",
  },
  "/viajes-de-lujo-desde-puerto-rico": {
    title: "Luxury Travel from Puerto Rico — Bespoke Private Itineraries | SJU Luxe Travel",
    description: "Boutique luxury travel agency in San Juan, Puerto Rico. Bespoke private itineraries, cruises, honeymoons, and exclusive destinations away from mass tourism.",
    h1: "Luxury Travel from Puerto Rico — Bespoke Private Itineraries",
    body: "SJU Luxe Travel is your bilingual luxury travel advisor in San Juan, Puerto Rico. We design private luxury trips from Puerto Rico with bespoke itineraries, exclusive access, and NCM Concierge VIP perks: room upgrades, hotel credits, and premium amenities at the world's top properties.",
  },
  "/luna-de-miel-de-lujo": {
    title: "Luxury Honeymoon from Puerto Rico — Maldives, Bora Bora & More | SJU Luxe Travel",
    description: "Plan your luxury honeymoon with SJU Luxe Travel. Maldives, Bora Bora, Santorini and more with overwater villas and exclusive private experiences.",
    h1: "Luxury Honeymoon from Puerto Rico",
    body: "Your honeymoon deserves more than a generic package. We design bespoke luxury honeymoons from Puerto Rico to the world's most romantic destinations: Maldives, Bora Bora, Santorini, Bali and more. Overwater villas, private dining, and exclusive NCM Concierge perks included.",
  },
  "/cruceros-de-lujo-desde-san-juan": {
    title: "Luxury Cruises from San Juan — Caribbean, Mediterranean & World | SJU Luxe Travel",
    description: "Book your luxury cruise from San Juan, Puerto Rico. Regent, Silversea, Seabourn and Crystal with premium suites and exclusive concierge perks.",
    h1: "Luxury Cruises from San Juan, Puerto Rico",
    body: "Discover the best luxury cruises sailing from San Juan, Puerto Rico. We work with Regent Seven Seas, Silversea, Seabourn and Crystal Cruises to book premium suites with onboard credits, private excursions, and exclusive NCM Concierge perks.",
  },
  "/cruceros-fluviales-de-lujo-desde-puerto-rico": {
    title: "Luxury River Cruises from Puerto Rico — Europe & Asia | SJU Luxe Travel",
    description: "Plan your luxury river cruise from Puerto Rico. Danube, Rhine, Seine, Mekong and Nile with AmaWaterways, Uniworld and Scenic. Suites with private balconies.",
    h1: "Luxury River Cruises from Puerto Rico",
    body: "Explore Europe and Asia aboard the world's most exclusive river cruises. We design luxury river itineraries on the Danube, Rhine, Seine, Mekong and Nile with AmaWaterways, Uniworld and Scenic — including suites with private balconies, VIP excursions, and exclusive NCM Concierge perks.",
  },
};

const ROOT_EN = {
  title: "SJU Luxe Travel | Luxury Travel Agency in San Juan, Puerto Rico",
  description: "Boutique luxury travel agency in San Juan, Puerto Rico. Bespoke itineraries to the Maldives, Portugal, Mexico and more with exclusive concierge perks.",
  h1: "SJU Luxe Travel — Boutique Luxury Travel Agency in San Juan, Puerto Rico",
  body: "Boutique luxury travel agency in San Juan, Puerto Rico designing bespoke itineraries with exclusive NCM Concierge perks.",
};

const getCanonicalUrl = (route) => `${HOSTNAME}${route === "/" ? "/" : route}`;

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

const buildAlternateLinksFor = (route) => {
  const canonicalUrl = getCanonicalUrl(route);
  const enUrl = `${HOSTNAME}/en${route === "/" ? "" : route}`;
  const esUrl = `${HOSTNAME}/es${route === "/" ? "" : route}`;
  return `
    <link rel="alternate" hreflang="es-PR" href="${esUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`;
};

const langPageHtml = (route, content, lang) => {
  const selfPath = `/${lang}${route === "/" ? "" : route}`;
  const selfUrl = `${HOSTNAME}${selfPath}`;
  const htmlLang = lang === "en" ? "en" : "es-PR";
  const ogLocale = lang === "en" ? "en_US" : "es_PR";
  const ogLocaleAlt = lang === "en" ? "es_PR" : "en_US";

  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${htmlLang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${content.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${content.description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${content.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${content.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${selfUrl}" />`)
    .replace(/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${ogLocale}" />`)
    .replace(/<meta property="og:locale:alternate" content="[^"]*" \/>/, `<meta property="og:locale:alternate" content="${ogLocaleAlt}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${content.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${content.description}" />`)
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root"><h1>${content.h1}</h1><p>${content.body}</p></div>`);

  // Self-canonical + hreflang group (replace any existing canonical/hreflang)
  html = html
    .replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>/g, "")
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${selfUrl}" />${buildAlternateLinksFor(route)}`);

  // JSON-LD
  const schema = buildSchema(route, content, selfUrl);
  return injectJsonLd(html, schema);
};

const withCanonicalSeo = (html, canonical, route) => {
  const alternateLinks = buildAlternateLinksFor(route);

  const htmlWithCanonical = /<link rel="canonical" href="[^"]*"\s*\/>/.test(html)
    ? html.replace(
        /<link rel="canonical" href="[^"]*"\s*\/>/,
        `<link rel="canonical" href="${canonical}" />`
      )
    : html.replace("</head>", `    <link rel="canonical" href="${canonical}" />\n</head>`);

  const htmlWithoutAlternates = htmlWithCanonical
    .replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>/g, "");

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

// Root page schema
const ROOT_CONTENT = {
  title: "SJU Luxe Travel | Agencia de Viajes de Lujo en San Juan, Puerto Rico",
  description: "Agencia boutique de viajes de lujo en San Juan, Puerto Rico. Itinerarios a medida a Maldivas, Portugal, México y más con beneficios exclusivos de concierge.",
  h1: "SJU Luxe Travel — Agencia Boutique de Viajes de Lujo en San Juan, Puerto Rico",
  body: "Agencia boutique de viajes de lujo en San Juan, Puerto Rico. Diseñamos itinerarios a medida con beneficios exclusivos de NCM Concierge.",
};
{
  const canonical = getCanonicalUrl("/");
  const html = injectJsonLd(
    withCanonicalSeo(template, canonical, "/"),
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
    canonical,
    route
  );

  const html = injectJsonLd(seoHtml, buildSchema(route, content, canonical));
  writeHtmlFile(dir, html);
}

// Write real content pages at /en/* and /es/* (distinct hreflang URLs, not redirects)
let langPagesWritten = 0;
const writeLangPage = (route, contentEs, contentEn) => {
  if (contentEs) {
    writeHtmlFile(routeToDir("es", route), langPageHtml(route, contentEs, "es"));
    langPagesWritten++;
  }
  if (contentEn) {
    writeHtmlFile(routeToDir("en", route), langPageHtml(route, contentEn, "en"));
    langPagesWritten++;
  }
};

writeLangPage("/", ROOT_CONTENT, ROOT_EN);
for (const route of Object.keys(pages)) {
  writeLangPage(route, pages[route], pagesEn[route]);
}

console.log(`✅ Prerendered ${Object.keys(pages).length + 1} routes + ${langPagesWritten} language-prefixed pages`);
