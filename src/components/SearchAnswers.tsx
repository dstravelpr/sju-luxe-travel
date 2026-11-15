import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

type Topic = "concierge" | "repositioning" | "river" | "honeymoon" | "maldives";
type L = { es: string; en: string };
type Data = { title: L; intro: L; qa: { q: L; a: L }[]; table?: { head: L[]; rows: L[][] }; links: { to: string; label: L }[] };

const home = { to: "/", label: { es: "SJU Luxe Travel, agencia de viajes en Puerto Rico", en: "SJU Luxe Travel, a travel agency in Puerto Rico" } };

const DATA: Record<Topic, Data> = {
  concierge: {
    title: { es: "¿Qué es un servicio de concierge de viajes?", en: "What is a travel concierge service?" },
    intro: { es: "Un servicio de concierge de viajes es atención personalizada antes y durante tu viaje: un agente de viaje te ayuda a planificar, comparar opciones, reservar y resolver cambios, según tus intereses y tu presupuesto.", en: "A travel concierge service is personal help before and during your trip: a travel agent helps you plan, compare options, book and handle changes, based on your interests and budget." },
    qa: [
      { q: { es: "¿Qué significa servicio de concierge?", en: "What does concierge service mean?" }, a: { es: "Significa tener una persona que se encarga de los detalles por ti. En viajes, incluye itinerarios, vuelos, hoteles, cruceros, traslados y recomendaciones.", en: "It means having one person take care of the details for you. For travel, that includes itineraries, flights, hotels, cruises, transfers and recommendations." } },
      { q: { es: "¿Es solo para viajes costosos?", en: "Is it only for expensive trips?" }, a: { es: "No. Viajar no es un lujo, es una oportunidad: la atención personalizada sirve para cualquier presupuesto, desde un crucero desde San Juan hasta una luna de miel.", en: "No. Travel is not a luxury, it's an opportunity: personal planning helps at any budget, from a cruise out of San Juan to a honeymoon." } },
      { q: { es: "¿Cómo empiezo?", en: "How do I start?" }, a: { es: "Cuéntame tus fechas, cuántas personas viajan y tu presupuesto. Te presento opciones antes de reservar.", en: "Tell me your dates, group size and budget. I'll share options before anything is booked." } },
    ],
    links: [home, { to: "/contact", label: { es: "Consultar mi viaje", en: "Ask about my trip" } }],
  },
  repositioning: {
    title: { es: "Cruceros de reposicionamiento 2026–2027", en: "Repositioning cruises 2026–2027" },
    intro: { es: "Las navieras publican sus salidas de reposicionamiento por temporada, normalmente en primavera y otoño, cuando los barcos cambian entre el Caribe y Europa. Fechas, puertos y precios cambian; los confirmamos antes de reservar.", en: "Cruise lines publish repositioning sailings by season, usually spring and fall, when ships move between the Caribbean and Europe. Dates, ports and fares change; we confirm them before booking." },
    qa: [
      { q: { es: "¿Hay cruceros de reposicionamiento desde Puerto Rico en 2027?", en: "Are there repositioning cruises from Puerto Rico in 2027?" }, a: { es: "Algunas navieras incluyen San Juan en sus rutas de reposicionamiento, pero varía cada año. Te ayudo a revisar las salidas disponibles para tus fechas.", en: "Some lines include San Juan on repositioning routes, but it varies each year. I can check available sailings for your dates." } },
    ],
    links: [{ to: "/cruceros-reposicionamiento", label: { es: "Ver cruceros de reposicionamiento", en: "See repositioning cruises" } }, home],
  },
  river: {
    title: { es: "AmaWaterways vs Avalon vs Riverside: resumen rápido", en: "AmaWaterways vs Avalon vs Riverside: quick summary" },
    intro: { es: "Una guía general para empezar. Lo que incluye cada tarifa depende del itinerario y la fecha; lo confirmamos contigo.", en: "A general starting point. What each fare includes depends on itinerary and date; we confirm it with you." },
    qa: [],
    table: {
      head: [{ es: "Naviera", en: "Cruise line" }, { es: "Ideal para", en: "Good fit for" }],
      rows: [
        [{ es: "AmaWaterways", en: "AmaWaterways" }, { es: "Viajeros que buscan excursiones incluidas y opciones activas, como bicicletas.", en: "Travelers who want included excursions and active options such as bikes." }],
        [{ es: "Avalon Waterways", en: "Avalon Waterways" }, { es: "Quienes valoran cabinas con vistas panorámicas y flexibilidad en las excursiones.", en: "Those who value panoramic-view cabins and flexible excursions." }],
        [{ es: "Riverside", en: "Riverside" }, { es: "Quienes buscan una experiencia más nueva y un estilo de hotel boutique.", en: "Those looking for a newer, boutique-hotel style experience." }],
      ],
    },
    links: [{ to: "/cruceros-fluviales-de-lujo-desde-puerto-rico", label: { es: "Ver cruceros de río desde Puerto Rico", en: "See river cruises from Puerto Rico" } }, home],
  },
  honeymoon: {
    title: { es: "Luna de miel en Puerto Rico: cómo elegir hotel", en: "Honeymoon in Puerto Rico: choosing a hotel" },
    intro: { es: "Si prefieren quedarse en la isla, comparamos hoteles según lo que buscan: playa, ciudad, montaña o una isla como Vieques o Culebra, siempre según su presupuesto.", en: "If you'd rather stay on the island, we compare hotels by what you want: beach, city, mountains or an island like Vieques or Culebra, always within your budget." },
    qa: [
      { q: { es: "¿Qué zonas de Puerto Rico son buenas para luna de miel?", en: "Which areas of Puerto Rico suit a honeymoon?" }, a: { es: "Viejo San Juan y Condado para ciudad y gastronomía; Río Grande y Dorado para playa y resorts; Vieques y Culebra para algo más tranquilo; Rincón para atardeceres.", en: "Old San Juan and Condado for city and food; Río Grande and Dorado for beach resorts; Vieques and Culebra for something quieter; Rincón for sunsets." } },
    ],
    links: [{ to: "/blog/luna-de-miel-puerto-rico-2026", label: { es: "Guía de luna de miel en Puerto Rico", en: "Puerto Rico honeymoon guide" } }, home],
  },
  maldives: {
    title: { es: "Puerto Rico vs Maldivas: ¿cuál elegir?", en: "Puerto Rico vs Maldives: which to choose?" },
    intro: { es: "Ambos tienen playas espectaculares, pero son viajes muy distintos.", en: "Both have stunning beaches, but they're very different trips." },
    qa: [],
    table: {
      head: [{ es: "", en: "" }, { es: "Puerto Rico", en: "Puerto Rico" }, { es: "Maldivas", en: "Maldives" }],
      rows: [
        [{ es: "Llegar", en: "Getting there" }, { es: "Cerca para viajeros de EE. UU.; sin pasaporte para ciudadanos estadounidenses.", en: "Close for U.S. travelers; no passport for U.S. citizens." }, { es: "Vuelos largos con conexiones; requiere pasaporte.", en: "Long flights with connections; passport required." }],
        [{ es: "Estilo", en: "Style" }, { es: "Playa, cultura, gastronomía y naturaleza en un mismo viaje.", en: "Beach, culture, food and nature in one trip." }, { es: "Resorts en islas privadas, villas sobre el agua y buceo.", en: "Private-island resorts, overwater villas and diving." }],
        [{ es: "Duración ideal", en: "Ideal length" }, { es: "Un fin de semana largo o una semana.", en: "A long weekend or a week." }, { es: "Normalmente 7 noches o más por la distancia.", en: "Usually 7+ nights given the distance." }],
      ],
    },
    links: [{ to: "/blog/maldivas-desde-puerto-rico-guia", label: { es: "Cómo viajar a Maldivas desde Puerto Rico", en: "How to travel to the Maldives from Puerto Rico" } }, home],
  },
};

export function SearchAnswers({ topic }: { topic: Topic }) {
  const { language, localPath } = useLanguage();
  const k = language === "es" ? "es" : "en";
  const d = DATA[topic];
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6 max-w-3xl border-t border-border/40 pt-12">
        <h2 className="font-heading text-3xl text-foreground mb-4">{d.title[k]}</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">{d.intro[k]}</p>
        {d.table && (
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left border border-border/40">
              <thead><tr>{d.table.head.map((h, i) => <th key={i} scope="col" className="p-3 text-gold font-body uppercase text-xs border-b border-border/40">{h[k]}</th>)}</tr></thead>
              <tbody>{d.table.rows.map((r, i) => <tr key={i} className="border-b border-border/40">{r.map((c, j) => j === 0 ? <th key={j} scope="row" className="p-3 text-foreground font-medium">{c[k]}</th> : <td key={j} className="p-3 text-muted-foreground">{c[k]}</td>)}</tr>)}</tbody>
            </table>
          </div>
        )}
        {d.qa.map((x, i) => (
          <div key={i} className="mb-5">
            <h3 className="font-heading text-xl text-foreground mb-2">{x.q[k]}</h3>
            <p className="text-muted-foreground leading-relaxed">{x.a[k]}</p>
          </div>
        ))}
        <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
          {d.links.map((l) => <li key={l.to}><Link to={localPath(l.to)} className="text-gold underline underline-offset-4">{l.label[k]}</Link></li>)}
        </ul>
      </div>
    </section>
  );
}
