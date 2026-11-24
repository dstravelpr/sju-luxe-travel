import { HolidayTravel } from "@/components/HolidayTravel";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { FAQSection } from "@/components/FAQSection";
import { CruiseFinder } from "@/components/CruiseFinder";
import { RelatedArticles } from "@/components/RelatedArticles";
import azamaraImg from "@/assets/ocean/azamara.png";
import crystalImg from "@/assets/ocean/crystal.png";
import exploraImg from "@/assets/ocean/explora.png";
import regentImg from "@/assets/ocean/regent.png";
import seabournImg from "@/assets/ocean/seabourn.png";
import seadreamImg from "@/assets/ocean/seadream.png";
import silverseaImg from "@/assets/ocean/silversea.png";
import vikingImg from "@/assets/ocean/viking.png";
import oceaniaImg from "@/assets/ocean/oceania.png";
import ritzCarltonImg from "@/assets/ocean/ritz-carlton.jpg";
import virginImg from "@/assets/ocean/virgin.jpg";
import virginCertImg from "@/assets/ocean/virgin-cert.png";

import { ORG_REF, WEBSITE_REF, buildGraph, breadcrumbList } from "@/lib/schema";

const PAGE_URL =
  "https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan";
const schema = buildGraph(
  {
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Cruceros desde San Juan, PR",
    isPartOf: WEBSITE_REF,
    inLanguage: "es",
  },
  {
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Cruise Planning from San Juan",
    description:
      "Curated cruise packages departing from the Port of San Juan, Puerto Rico.",
    provider: ORG_REF,
    areaServed: { "@type": "State", name: "Puerto Rico" },
    serviceType: "Cruise Planning",
    url: PAGE_URL,
  },
  breadcrumbList([
    { name: "Home", url: "https://www.sjuluxetravel.com" },
    { name: "Cruceros desde San Juan", url: PAGE_URL },
  ]),
);

const FAQ_ITEMS = [
  {
    q: "¿Cómo escojo el crucero ideal saliendo desde Puerto Rico?",
    a: "Empieza por cinco cosas: si prefieres un crucero por el océano o de río, cuándo quieres viajar, quién viaja, cuántas noches tienes y qué te importa más (precio, destinos, descanso o actividades). Con eso tu agente de viaje puede comparar navieras y salidas desde San Juan que encajen contigo.",
  },
  {
    q: "¿Qué líneas de cruceros salen desde San Juan, Puerto Rico?",
    a: "Desde el Puerto de San Juan operan itinerarios de líneas como Regent Seven Seas, Silversea, Oceania cruises y Celebrity cruises, con destinos al Caribe, Sudamérica y el Atlántico.",
  },
  {
    q: "¿Qué incluye la tarifa de un crucero?",
    a: "Depende de la naviera, el itinerario y la tarifa. Bebidas, excursiones, propinas e internet pueden estar incluidos o cobrarse por separado. Confirmamos por escrito lo que incluye tu reserva antes de comprar.",
  },
  {
    q: "¿Necesito pasaporte para hacer un crucero desde San Juan?",
    a: "Para itinerarios con paradas fuera de EE. UU. se recomienda pasaporte válido. Los ciudadanos estadounidenses en itinerarios de vuelta al mismo puerto americano pueden usar identificación oficial, pero el pasaporte es siempre la mejor opción.",
  },
  {
    q: "¿Pueden reservar mi cabina, vuelos de conexión y hotel pre-crucero?",
    a: "Sí. Coordinamos el paquete completo: vuelos, hotel antes de embarque, traslados y la cabina del crucero, para que solo tengas que llegar y disfrutar.",
  },
];

const crucerosDeLujo = () => {
  const { t, localPath, language } = useLanguage();
  const d = t.crucerosDeLujo;

  const lineKeys = [
    "ritzCarlton",
    "explora",
    "virgin",
    "azamara",
    "crystal",
    "oceania",
    "regent",
    "silversea",
    "viking",
    "seabourn",
    "seadream",
  ] as const;
  const lineImages: Partial<Record<(typeof lineKeys)[number], string>> = {
    ritzCarlton: ritzCarltonImg,
    virgin: virginImg,
    explora: exploraImg,
    azamara: azamaraImg,
    crystal: crystalImg,
    oceania: oceaniaImg,
    regent: regentImg,
    silversea: silverseaImg,
    viking: vikingImg,
    seabourn: seabournImg,
    seadream: seadreamImg,
  };

  return (
    <Layout>
      <SEOHead
        title="Cruises from San Juan, PR | SJU Luxe Travel"
        description="Plan cruises from San Juan around your dates and budget. Compare cabins, itineraries and fare inclusions with SJU Luxe Travel."
        titleEs="Cruceros desde San Juan, PR | SJU Luxe Travel"
        descriptionEs="Planifica cruceros desde San Juan según tus fechas y presupuesto. Compara cabinas, itinerarios y lo que incluye cada tarifa con SJU Luxe Travel."
        schemaJson={schema}
        emitHreflang
      />

      <article className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
            {d.label}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
            {d.h1}{" "}
            <span className="text-gold-gradient italic">{d.h1Highlight}</span>
          </h1>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.p1}
            </p>
            <p
              className="text-muted-foreground text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: d.p2 }}
            />

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Why}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.whyIntro}
            </p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.whyItems.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong className="text-foreground">{title}</strong>
                    {desc ? ` — ${desc}` : ""}
                  </span>
                </li>
              ))}
            </ul>

            <CruiseFinder />

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {language === "es" ? "Cruceros para todo presupuesto" : "Cruises for every budget"}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {language === "es"
                ? "También planifico cruceros con las navieras más conocidas, ideales para familias, primeras experiencias en crucero y viajes con amistades. Te ayudo a comparar barcos, itinerarios y lo que incluye cada tarifa:"
                : "I also plan cruises with the best-known cruise lines, great for families, first-time cruisers and trips with friends. I help you compare ships, itineraries and what each fare includes:"}
            </p>
            <ul className="flex flex-wrap gap-2 list-none">
              {["Royal Caribbean", "Celebrity Cruises", "MSC Cruises", "Norwegian Cruise Line", "Carnival", "Princess Cruises", "Disney Cruise Line", "Virgin Voyages"].map((l) => (
                <li key={l} className="px-4 py-2 rounded-full border border-border text-sm text-foreground/90">{l}</li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === "es"
                ? "Las salidas desde San Juan cambian por temporada; si tu barco favorito no sale de aquí, coordino el vuelo al puerto de salida."
                : "Departures from San Juan vary by season; if your preferred ship doesn't sail from here, I coordinate the flight to its departure port."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Lines}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.linesIntro}
            </p>

            {lineKeys.map((key) => (
              <div key={key}>
                <h3 className="font-heading text-xl text-foreground mt-8">
                  {d.lines[key].title}
                </h3>
                {lineImages[key] && (
                  <div className="my-4 overflow-hidden rounded-lg aspect-[4/3] gold-border">
                    <img
                      src={lineImages[key]}
                      alt={d.lines[key].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}
                <p className="text-muted-foreground text-base leading-relaxed">
                  {d.lines[key].desc}
                </p>
              </div>
            ))}

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Itineraries}
            </h2>
            <ul className="space-y-3 text-muted-foreground text-base leading-relaxed list-none">
              {d.itineraries.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong className="text-foreground">{title}</strong> —{" "}
                    {desc}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Groups}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.groupsIntro}
            </p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.groupItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Port}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.portIntro}
            </p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.portItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <HolidayTravel />

          <RelatedArticles
            items={[
              {
                title: "Crucero de río por el Duero desde Puerto Rico",
                href: "/blog/crucero-fluvial-duero-desde-puerto-rico",
                category: "Cruceros de Río",
              },
              {
                title: "¿Vale la pena un agente de viajes en 2026?",
                href: "/blog/vale-la-pena-asesor-viajes-2026",
                category: "Guía",
              },
            ]}
          />

          <FAQSection
            heading="Preguntas Frecuentes sobre cruceros"
            items={FAQ_ITEMS}
          />

          <section className="mt-12 p-8 gold-border rounded-lg">
            <span className="font-body text-gold text-xs tracking-[0.25em] uppercase">
              {language === "es" ? "Nuevo en San Juan" : "New in San Juan"}
            </span>
            <h2 className="font-heading text-2xl text-foreground mt-3 mb-4">
              {language === "es" ? "Orient Express Corinthian: salidas desde San Juan" : "Orient Express Corinthian: departures from San Juan"}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {language === "es"
                ? "San Juan fue seleccionado como puerto base en el Caribe para la primera temporada del Orient Express Corinthian, un velero de 54 suites y unos 110 pasajeros. Según la Compañía de Turismo de Puerto Rico, tuvo su primera salida desde San Juan el 29 de octubre de 2026 y tiene dos salidas más en enero de 2027. Te ayudo a confirmar fechas, itinerario y disponibilidad con la naviera."
                : "San Juan was selected as a Caribbean home port for the Orient Express Corinthian's first season, a sailing yacht with 54 suites and about 110 guests. According to the Puerto Rico Tourism Company, its first San Juan departure was October 29, 2026, with two more in January 2027. I can confirm dates, itinerary and availability with the cruise line."}
            </p>
            <ul className="mt-5 space-y-3 text-muted-foreground text-sm leading-relaxed list-none">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground/90">{language === "es" ? "11–15 de enero de 2027 (4 noches)" : "January 11–15, 2027 (4 nights)"}</strong>
                  {language === "es" ? " — Puerto Rico, Saint-Barth e Islas Vírgenes: San Juan → Gustavia (San Bartolomé) → Virgin Gorda (Islas Vírgenes Británicas) → Marigot (San Martín)." : " — Puerto Rico, Saint-Barth & the Virgin Islands: San Juan → Gustavia (Saint-Barthélemy) → Virgin Gorda (British Virgin Islands) → Marigot (Saint-Martin)."}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground/90">{language === "es" ? "25–28 de enero de 2027 (3 noches)" : "January 25–28, 2027 (3 nights)"}</strong>
                  {language === "es" ? " — Saint-Barth y Anguila: San Juan → Gustavia (San Bartolomé) → Anguila → Marigot (San Martín)." : " — Saint-Barth & Anguilla: San Juan → Gustavia (Saint-Barthélemy) → Anguilla → Marigot (Saint-Martin)."}
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              {language === "es"
                ? "Ambas son salidas de ida desde San Juan que terminan en San Martín, así que hay que planificar el vuelo de regreso. Justo antes del 25 de enero también hay una ruta de Marigot a San Juan, para quien prefiera terminar el viaje en Puerto Rico."
                : "Both are one-way sailings from San Juan ending in Saint-Martin, so you'll need to plan a flight home. Just before January 25 there's also a Marigot-to-San Juan route for travelers who prefer to end in Puerto Rico."}
            </p>
            <p className="text-xs text-muted-foreground/80 mt-4">
              {language === "es" ? "Fuente: " : "Source: "}
              <a href="https://tourism.pr.gov/2026/10/29/puerto-rico-sera-puerto-base-de-exclusivo-velero-de-lujo-orient-express-corinthian/" target="_blank" rel="noopener" className="text-gold hover:underline">
                {language === "es" ? "Compañía de Turismo de Puerto Rico (29 de octubre de 2026)" : "Puerto Rico Tourism Company (October 29, 2026)"}
              </a>
              {" · "}
              <a href="https://www.orient-express.com/en/sailing-yachts/orient-express-corinthian" target="_blank" rel="noopener" className="text-gold hover:underline">Orient Express</a>
            </p>
          </section>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm">
              {d.riverCruisesLink}{" "}
              <Link
                to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")}
                className="text-gold hover:underline"
              >
                {d.riverCruisesLinkText}
              </Link>
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              {language === "es" ? "¿Quieres cruzar a Europa desde San Juan? Lee la " : "Want to sail to Europe from San Juan? Read the "}
              <Link to={localPath("/blog/cruceros-de-reposicionamiento-desde-puerto-rico")} className="text-gold hover:underline">
                {language === "es" ? "guía de cruceros de reposicionamiento 2027" : "2027 repositioning cruise guide"}
              </Link>
              .
            </p>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {d.ctaTitle}{" "}
              <span className="text-gold-gradient italic">
                {d.ctaTitleHighlight}
              </span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {d.ctaDescription}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {d.ctaButton}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default crucerosDeLujo;
