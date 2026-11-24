import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { SearchAnswers } from "@/components/SearchAnswers";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Picture } from "@/components/Picture";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/blog-repositioning-cruise.jpg";
import heroImgWebp from "@/assets/blog-repositioning-cruise.webp";

const URL =
  "https://www.sjuluxetravel.com/blog/cruceros-de-reposicionamiento-desde-puerto-rico";
const OG_IMAGE = "https://www.sjuluxetravel.com/og/cruceros-reposicionamiento.jpg";
const PASSPORT_URL =
  "https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-with-special-considerations/cruise-ship-passengers.html";

const lines = [
  "Celebrity Cruises",
  "Norwegian Cruise Line",
  "Viking",
  "Windstar Cruises",
  "Silversea",
  "SeaDream",
  "Explora Journeys",
  "Ritz-Carlton Yacht Collection",
];

const sailings = [
  { ship: "MSC Explora 1", line: "Explora Journeys", depart: "2027-03-01", arrive: "2027-03-24", nights: 23, es: "Barcelona", en: "Barcelona" },
  { ship: "Viking Sea", line: "Viking", depart: "2027-03-06", arrive: "2027-03-19", nights: 13, es: "Barcelona", en: "Barcelona" },
  { ship: "Viking Sea", line: "Viking", depart: "2027-03-06", arrive: "2027-03-26", nights: 20, es: "Roma (Civitavecchia)", en: "Rome (Civitavecchia)" },
  { ship: "Silver Shadow", line: "Silversea", depart: "2027-03-09", arrive: "2027-03-23", nights: 14, es: "Lisboa", en: "Lisbon" },
  { ship: "Silver Shadow", line: "Silversea", depart: "2027-03-09", arrive: "2027-04-01", nights: 23, es: "Villefranche-sur-Mer", en: "Villefranche-sur-Mer" },
  { ship: "Star Pride", line: "Windstar", depart: "2027-03-30", arrive: "2027-04-15", nights: 16, es: "Londres", en: "London" },
  { ship: "Celebrity Constellation", line: "Celebrity", depart: "2027-04-03", arrive: "2027-04-16", nights: 13, es: "Barcelona", en: "Barcelona" },
  { ship: "Norwegian Prima", line: "Norwegian", depart: "2027-04-04", arrive: "2027-04-21", nights: 17, es: "Roma", en: "Rome" },
  { ship: "MSC Explora 3", line: "Explora Journeys", depart: "2027-04-05", arrive: "2027-04-22", nights: 17, es: "Ciudad de Panamá", en: "Panama City" },
  { ship: "SeaDream I", line: "SeaDream", depart: "2027-04-17", arrive: "2027-05-01", nights: 14, es: "Lisboa", en: "Lisbon" },
  { ship: "Ritz-Carlton Evrima", line: "Ritz-Carlton Yacht Collection", depart: "2027-11-10", arrive: "2027-11-17", nights: 7, es: "Ciudad de Panamá", en: "Panama City" },
  { ship: "Star Pride", line: "Windstar", depart: "2027-11-22", arrive: "2027-12-13", nights: 21, es: "Puntarenas, Costa Rica", en: "Puntarenas, Costa Rica" },
];
const SOURCE_URL = "https://repocruises.com/ports/san-juan/departures";

const content = {
  es: {
    title: "Cruceros de reposicionamiento 2027 desde Puerto Rico",
    description:
      "Cruceros de reposicionamiento 2027 desde San Juan: qué son, cuándo salen, rutas a Europa y Panamá, pasaporte y cómo planificar el viaje completo.",
    h1: "Cruceros de reposicionamiento 2027 desde Puerto Rico: guía para salir desde San Juan",
    eyebrow: "Cruceros",
    back: "Volver al Blog",
    published: "8 de agosto de 2026",
    updated: "Última actualización: 24 de noviembre de 2026",
    read: "8 min de lectura",
    alt: "Crucero de reposicionamiento en alta mar, navegando el Atlántico al atardecer",
    answer:
      "Un crucero de reposicionamiento es un viaje de ida en el que la naviera mueve un barco de una región a otra. Desde San Juan, la mayoría de las salidas de 2027 se esperan en primavera (marzo a mayo), cuando los barcos cruzan del Caribe hacia Europa, y algunas en otoño hacia el Canal de Panamá. Las fechas y rutas cambian cada temporada, así que conviene confirmarlas con la naviera antes de reservar.",
    sections: [
      {
        h: "¿Qué es un crucero de reposicionamiento?",
        p: [
          "Al cambiar la temporada, las navieras mueven sus barcos: del Caribe al Mediterráneo o al norte de Europa para el verano europeo, y de regreso al Caribe para el invierno. Esos trayectos se venden como viajes de ida, conocidos en inglés como “repositioning cruises”.",
          "Suelen tener más días de navegación y menos puertos que un crucero regular. Por eso muchas veces la tarifa por noche es más baja, aunque eso no está garantizado: depende de la naviera, la cabina y la fecha.",
        ],
      },
      {
        h: "¿Cuándo salen desde San Juan en 2027?",
        p: [
          "Primavera 2027 (marzo a mayo): cruceros transatlánticos hacia puertos como Lisboa, Barcelona, Málaga, Civitavecchia (Roma) o Southampton.",
          "Otoño 2027 (octubre a diciembre): algunas rutas hacia el Canal de Panamá, Costa Rica o la costa del Pacífico, cuando los barcos se reubican para la temporada de invierno.",
          "Las navieras publican estas salidas con uno o dos años de anticipación, y pueden añadir, cambiar o cancelar puertos. Te ayudo a revisar qué hay disponible para tus fechas.",
        ],
        table: true,
      },
      {
        h: "¿Por qué salir desde Puerto Rico?",
        p: [
          "Si vives en Puerto Rico, embarcas en el Puerto de San Juan, cerca del Viejo San Juan, sin tener que volar a Fort Lauderdale, Miami o Nueva York antes del crucero. Eso puede ahorrarte un vuelo de ida y una noche de hotel.",
          "Como es un viaje de ida, el costo real incluye el vuelo de regreso desde Europa o Centroamérica. Lo mejor es comparar el viaje completo, no solo el precio del crucero.",
        ],
      },
      {
        h: "¿Necesito pasaporte?",
        p: [
          "Sí, recomiendo tener pasaporte vigente. Los cruceros de reposicionamiento terminan en otro país, así que no son viajes de ida y vuelta al mismo puerto de EE. UU. Necesitarás pasaporte para entrar al país de llegada y para volar de regreso. El Departamento de Estado recomienda verificar los requisitos de tu naviera y viajar con la libreta de pasaporte (passport book). Revisa también si tu destino exige otros requisitos de entrada, como el sistema ETIAS de Europa cuando esté vigente.",
        ],
        link: { href: PASSPORT_URL, label: "Guía del Departamento de Estado para pasajeros de cruceros (en inglés)" },
      },
      {
        h: "Navieras que han incluido San Juan en sus rutas",
        p: [
          "Estas navieras han programado reposicionamientos que pasan por San Juan en temporadas recientes. No todas repiten cada año; confirmamos la disponibilidad de 2027 antes de recomendarte una salida.",
        ],
        list: lines,
      },
      {
        h: "¿Qué incluye y qué no?",
        p: [
          "Generalmente incluye la cabina, comidas en los restaurantes principales, entretenimiento a bordo y las paradas del itinerario. Restaurantes de especialidad, bebidas, propinas, impuestos y cargos portuarios, wifi y excursiones pueden estar incluidos o no según la naviera y la tarifa; revisa cada salida.",
        ],
      },
      {
        h: "Planifica el viaje completo, no solo el crucero",
        p: [
          "Suma el vuelo de regreso desde el puerto de llegada, los traslados del puerto al hotel o al aeropuerto, las noches de hotel antes o después, las propinas y el seguro de viaje. Así comparas el costo real.",
          "Ten en cuenta los días en alta mar: un crucero transatlántico puede tener seis o más días seguidos sin puertos. Es ideal si te gusta descansar, leer y disfrutar del barco, y si tienes tiempo flexible. Puede no ser la mejor opción si te mareas fácilmente, tienes poco tiempo de vacaciones o prefieres un puerto distinto cada día.",
          "Mi consejo: quédate unos días en el puerto final. Si llegas a Lisboa en barco, puedes seguir explorando Portugal antes de volar de regreso.",
        ],
      },
    ],
    tableCaption: "Salidas de reposicionamiento 2027 desde San Juan",
    th: ["Barco", "Naviera", "Sale de San Juan", "Llega a", "Noches"],
    tableNote: "Todas estas salidas embarcan en San Juan (no son cruceros que llegan a San Juan). Fuente: listado de RepoCruises consultado el 24 de noviembre de 2026; confirma fechas y tarifas con la naviera antes de reservar.",
    sourceLabel: "Ver listado de salidas desde San Juan",
    destLabel: "viajes personalizados a Portugal",
    guideLabel: "ver cruceros de reposicionamiento desde San Juan",
    faqTitle: "Preguntas frecuentes sobre cruceros de reposicionamiento 2027",
    faqs: [
      {
        q: "¿Hay cruceros de reposicionamiento desde Puerto Rico en 2027?",
        a: "Varias navieras suelen incluir San Juan en sus rutas de reposicionamiento, sobre todo en primavera hacia Europa. Las salidas cambian cada año, así que hay que confirmarlas con la naviera para las fechas exactas.",
      },
      {
        q: "¿Cuánto duran?",
        a: "Las rutas hacia el Canal de Panamá suelen ser de alrededor de una semana. Los cruceros transatlánticos hacia Europa suelen durar entre 12 y 20 noches o más, según los puertos.",
      },
      {
        q: "¿Necesito pasaporte para un crucero de reposicionamiento desde San Juan?",
        a: "Sí, es recomendable. Al terminar en otro país, necesitas pasaporte vigente para entrar al destino y volar de regreso. Revisa también los requisitos de entrada del país de llegada.",
      },
      {
        q: "¿Son más baratos que un crucero regular?",
        a: "Muchas veces la tarifa por noche es más baja, pero no siempre. Hay que sumar el vuelo de regreso, hoteles y excursiones para comparar el costo total del viaje.",
      },
      {
        q: "¿Son buenos para familias?",
        a: "Depende de la naviera. Algunas, como Celebrity o Norwegian, tienen actividades para niños; otras están pensadas para adultos. También hay muchos días en alta mar, algo a considerar con niños pequeños.",
      },
      {
        q: "¿Cómo me ayuda un agente de viaje?",
        a: "Te ayudo a comparar salidas, elegir cabina y coordinar el vuelo de regreso, los hoteles y las excursiones. Si aplica algún cargo por planificación, te lo explico antes de comenzar.",
      },
    ],
    bookTitle: "¿Cómo planificar tu crucero de reposicionamiento 2027?",
    book: "En SJU Luxe Travel planificamos viajes personalizados para todo presupuesto. Revisamos las salidas de 2027, coordinamos el vuelo de regreso y las noches de hotel antes o después del crucero.",
    contactPre: "¿Quieres saber qué opción va mejor contigo?",
    contact: "Escríbeme aquí",
    ctaTitle: "¿Listo para planificar tu crucero?",
    ctaSub: "Viajes personalizados · Todo presupuesto · Salidas desde San Juan",
    ctaBtn: "Contáctanos",
  },
  en: {
    title: "2027 Repositioning Cruises from Puerto Rico | SJU Luxe",
    description:
      "2027 repositioning cruises from San Juan: what they are, when they sail, routes to Europe and Panama, passports and how to plan the whole trip.",
    h1: "2027 Repositioning Cruises from Puerto Rico: A Guide to Sailing from San Juan",
    eyebrow: "Cruises",
    back: "Back to Blog",
    published: "August 8, 2026",
    updated: "Last updated: November 24, 2026",
    read: "8 min read",
    alt: "Repositioning cruise ship at sea, crossing the Atlantic at sunset",
    answer:
      "A repositioning cruise is a one-way sailing that moves a ship from one region to another. From San Juan, most 2027 departures are expected in spring (March to May), when ships cross from the Caribbean to Europe, with some in fall toward the Panama Canal. Dates and routes change every season, so confirm them with the cruise line before booking.",
    sections: [
      {
        h: "What is a repositioning cruise?",
        p: [
          "When seasons change, cruise lines move their ships: from the Caribbean to the Mediterranean or Northern Europe for the European summer, and back to the Caribbean for winter. Those one-way legs are sold as repositioning cruises.",
          "They usually have more sea days and fewer ports than a regular cruise. The nightly fare is often lower, but that isn't guaranteed: it depends on the line, cabin and date.",
        ],
      },
      {
        h: "When do they sail from San Juan in 2027?",
        p: [
          "Spring 2027 (March to May): transatlantic crossings to ports such as Lisbon, Barcelona, Málaga, Civitavecchia (Rome) or Southampton.",
          "Fall 2027 (October to December): some routes toward the Panama Canal, Costa Rica or the Pacific coast, as ships relocate for winter.",
          "Cruise lines publish these sailings one to two years ahead and may add, change or cancel ports. I can check what's available for your dates.",
        ],
        table: true,
      },
      {
        h: "Why sail from Puerto Rico?",
        p: [
          "If you live in Puerto Rico, you board at the Port of San Juan, near Old San Juan, without flying to Fort Lauderdale, Miami or New York first. That can save an outbound flight and a hotel night.",
          "Because it's one-way, the real cost includes your flight home from Europe or Central America. Compare the whole trip, not just the cruise fare.",
        ],
      },
      {
        h: "Do I need a passport?",
        p: [
          "Yes, I recommend a valid passport. Repositioning cruises end in another country, so they aren't round trips from the same U.S. port. You'll need a passport to enter the arrival country and fly home. The State Department advises checking your cruise line's requirements and carrying a passport book. Also check other entry requirements, such as Europe's ETIAS once it takes effect.",
        ],
        link: { href: PASSPORT_URL, label: "U.S. State Department guidance for cruise passengers" },
      },
      {
        h: "Cruise lines that have included San Juan",
        p: [
          "These lines have scheduled repositioning sailings through San Juan in recent seasons. Not all repeat every year; we confirm 2027 availability before recommending a sailing.",
        ],
        list: lines,
      },
      {
        h: "What's included and what isn't?",
        p: [
          "Fares usually include your cabin, meals in the main dining venues, onboard entertainment and the itinerary's port stops. Specialty dining, drinks, gratuities, taxes and port fees, wifi and excursions may or may not be included depending on the line and fare; check each sailing.",
        ],
      },
      {
        h: "Plan the whole trip, not just the cruise",
        p: [
          "Add the flight home from the arrival port, transfers between port, hotel and airport, hotel nights before or after, gratuities and travel insurance. That's how you compare the real cost.",
          "Consider the sea days: a transatlantic crossing can have six or more days in a row without ports. It suits travelers who enjoy slow days on board and have flexible time. It may not suit you if you get seasick easily, have limited vacation days or want a new port every day.",
          "My tip: stay a few days at the final port. If you arrive in Lisbon by ship, keep exploring Portugal before flying home.",
        ],
      },
    ],
    tableCaption: "2027 repositioning departures from San Juan",
    th: ["Ship", "Cruise line", "Departs San Juan", "Arrives in", "Nights"],
    tableNote: "All of these sailings embark in San Juan (they are not cruises arriving in San Juan). Source: RepoCruises listing checked November 24, 2026; confirm dates and fares with the cruise line before booking.",
    sourceLabel: "See the San Juan departures listing",
    destLabel: "personalized trips to Portugal",
    guideLabel: "see repositioning cruises from San Juan",
    faqTitle: "2027 repositioning cruise FAQ",
    faqs: [
      {
        q: "Are there repositioning cruises from Puerto Rico in 2027?",
        a: "Several cruise lines often include San Juan on repositioning routes, especially spring crossings to Europe. Sailings change every year, so confirm exact dates with the cruise line.",
      },
      {
        q: "How long are they?",
        a: "Panama Canal routes are often around a week. Transatlantic crossings to Europe usually run 12 to 20 nights or more, depending on the ports.",
      },
      {
        q: "Do I need a passport for a repositioning cruise from San Juan?",
        a: "Yes, it's recommended. Because the cruise ends in another country, you need a valid passport to enter the destination and fly home. Also check the arrival country's entry requirements.",
      },
      {
        q: "Are they cheaper than a regular cruise?",
        a: "The nightly fare is often lower, but not always. Add the flight home, hotels and excursions to compare the total trip cost.",
      },
      {
        q: "Are they good for families?",
        a: "It depends on the line. Some, like Celebrity or Norwegian, have kids' programs; others are designed for adults. There are also many sea days, worth considering with young children.",
      },
      {
        q: "How does a travel agent help?",
        a: "I help you compare sailings, choose a cabin and coordinate the flight home, hotels and excursions. If a planning fee applies, I explain it before we start.",
      },
    ],
    bookTitle: "How to plan your 2027 repositioning cruise",
    book: "At SJU Luxe Travel we plan personalized trips for every budget. We review 2027 sailings and coordinate your flight home and hotel nights before or after the cruise.",
    contactPre: "Want to know which option fits you best?",
    contact: "Message me here",
    ctaTitle: "Ready to plan your crossing?",
    ctaSub: "Personalized trips · Every budget · Departures from San Juan",
    ctaBtn: "Contact us",
  },
};

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";
  const c = content[isEs ? "es" : "en"];
  const pageUrl = isEs ? URL.replace(".com/blog", ".com/es/blog") : URL;

  const schemaJson = buildGraph(
    {
      "@type": "BlogPosting",
      headline: c.h1,
      description: c.description,
      author: AUTHOR,
      publisher: ORG_REF,
      datePublished: "2026-08-08",
      dateModified: "2026-11-24",
      inLanguage: isEs ? "es-PR" : "en",
      image: OG_IMAGE,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      keywords: isEs
        ? ["cruceros de reposicionamiento 2027", "cruceros de reposicionamiento desde Puerto Rico", "cruceros transatlánticos desde San Juan"]
        : ["2027 repositioning cruises", "repositioning cruises from Puerto Rico", "transatlantic cruises from San Juan"],
    },
    {
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  );

  const fmt = (d: string) =>
    new Date(d + "T12:00:00").toLocaleDateString(isEs ? "es-PR" : "en-US", { month: "short", day: "numeric", year: "numeric" });
  const linkCls = "text-gold hover:text-gold-light underline";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage={OG_IMAGE}
        title={content.en.title}
        description={content.en.description}
        titleEs={content.es.title}
        descriptionEs={content.es.description}
        emitHreflang
        canonical={URL}
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          { name: c.h1, url: pageUrl },
        ]}
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to={localPath("/blog")}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8"
          >
            <ArrowLeft size={16} />
            {c.back}
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{c.eyebrow}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">{c.h1}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <Link to={localPath("/about")} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <User size={12} className="text-gold" />
                Daniel Santiago Díaz
                <span className="text-muted-foreground/70"> — SJU Luxe Travel</span>
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-gold" />
                {c.published}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-gold" />
                {c.read}
              </span>
            </div>
            <p className="text-muted-foreground/70 text-xs mt-3 italic">{c.updated}</p>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <Picture src={heroImg} webpSrc={heroImgWebp} alt={c.alt} className="w-full h-full object-cover" width={1536} height={1152} />
          </div>

          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p className="text-lg text-foreground/90">{c.answer}</p>

            {c.sections.map((s) => (
              <section key={s.h} className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground mt-10">{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {"table" in s && s.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <caption className="text-left text-foreground font-heading text-lg mb-3">{c.tableCaption}</caption>
                      <thead>
                        <tr className="border-b border-gold/30 text-left text-foreground">
                          {c.th.map((h) => (
                            <th key={h} scope="col" className="py-2 pr-4 font-body font-medium">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sailings.map((r) => (
                          <tr key={r.ship + r.depart + r.en} className="border-b border-border">
                            <td className="py-2 pr-4 text-foreground/90">{r.ship}</td>
                            <td className="py-2 pr-4">{r.line}</td>
                            <td className="py-2 pr-4 whitespace-nowrap">{fmt(r.depart)}</td>
                            <td className="py-2 pr-4">{isEs ? r.es : r.en} · {fmt(r.arrive)}</td>
                            <td className="py-2 pr-4">{r.nights}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-muted-foreground/80 mt-3">
                      {c.tableNote}{" "}
                      <a href={SOURCE_URL} target="_blank" rel="noopener" className={linkCls}>{c.sourceLabel}</a>
                    </p>
                  </div>
                )}
                {"list" in s && s.list && (
                  <ul className="space-y-2 list-none">
                    {s.list.map((l) => (
                      <li key={l} className="flex items-start gap-3">
                        <span className="text-gold mt-1">•</span>
                        <strong>{l}</strong>
                      </li>
                    ))}
                  </ul>
                )}
                {"link" in s && s.link && (
                  <p>
                    <a href={s.link.href} target="_blank" rel="noopener" className={linkCls}>
                      {s.link.label}
                    </a>
                  </p>
                )}
              </section>
            ))}

            <p>
              <Link to={localPath("/destinations/portugal")} className={linkCls}>{c.destLabel}</Link>
              {" · "}
              <Link to={localPath("/cruceros-reposicionamiento")} className={linkCls}>{c.guideLabel}</Link>
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{c.faqTitle}</h2>
            {c.faqs.map((f) => (
              <div key={f.q} className="space-y-2">
                <h3 className="font-heading text-xl text-foreground mt-6">{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <h2 className="font-heading text-2xl text-foreground mt-10">{c.bookTitle}</h2>
            <p>{c.book}</p>
            <p>
              {c.contactPre}{" "}
              <Link to={localPath("/contact")} className={linkCls}>{c.contact}</Link>.
            </p>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{c.ctaTitle}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{c.ctaSub}</p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300"
            >
              {c.ctaBtn}
            </Link>
          </div>
        </div>
        <SearchAnswers topic="repositioning" />
      </article>
    </Layout>
  );
};

export default Post;
