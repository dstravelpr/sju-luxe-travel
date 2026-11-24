import type { QuickAnswer, RelatedLink } from "./BlogQuickAnswers";

const L = {
  save: { to: "/blog/do-travel-agents-really-help-save-money", label: { en: "Do travel agents really help you save money?", es: "¿Un agente de viajes realmente te ayuda a ahorrar?" } },
  micro: { to: "/blog/micro-vacaciones-futuro-del-viaje", label: { en: "Micro-cations: short trips done right", es: "Microvacaciones: viajes cortos bien planificados" } },
  river: { to: "/blog/river-cruising-new-generation", label: { en: "River cruising for a new generation", es: "Cruceros de río para una nueva generación" } },
  wellness: { to: "/blog/wellness-travel-intentional-luxury", label: { en: "Wellness travel: trips that recharge you", es: "Viajes de bienestar: viajes que te recargan" } },
  rivers: { to: "/cruceros-fluviales-de-lujo-desde-puerto-rico", label: { en: "River cruises from Puerto Rico", es: "Cruceros de río desde Puerto Rico" } },
  sj: { to: "/cruceros-de-lujo-desde-san-juan", label: { en: "Cruises from San Juan", es: "Cruceros desde San Juan" } },
  trips: { to: "/viajes-de-lujo-desde-puerto-rico", label: { en: "Personalized trips from Puerto Rico", es: "Viajes personalizados desde Puerto Rico" } },
  contact: { to: "/contact", label: { en: "Talk to your travel agent", es: "Habla con tu agente de viaje" } },
} satisfies Record<string, RelatedLink>;

const H = { en: "Quick answers", es: "Respuestas rápidas" };

export const QUICK_ANSWERS: Record<string, { heading: typeof H; items: QuickAnswer[]; related: RelatedLink[] }> = {
  save: {
    heading: H,
    items: [
      { q: { en: "Does using a travel agent cost more?", es: "¿Cuesta más usar un agente de viaje?" },
        a: { en: "Often not. Agents are usually paid a commission by cruise lines and hotels, so many bookings cost you the same as booking directly. Some complex itineraries may include a planning fee, which should always be explained upfront.", es: "Muchas veces no. Las líneas de cruceros y hoteles suelen pagarle una comisión al agente, así que muchas reservas cuestan lo mismo que reservar directo. Algunos itinerarios complejos pueden incluir un cargo de planificación, que siempre debe explicarse por adelantado." } },
      { q: { en: "Where does the saving actually come from?", es: "¿De dónde sale realmente el ahorro?" },
        a: { en: "From avoiding costly mistakes (wrong connections, non-refundable fares, missing documents), from perks or promotions that apply to some bookings, and from someone helping you if plans change mid-trip.", es: "De evitar errores costosos (conexiones malas, tarifas no reembolsables, documentos que faltan), de beneficios o promociones que aplican a algunas reservas, y de tener a alguien que te ayude si los planes cambian durante el viaje." } },
      { q: { en: "When is it worth it from Puerto Rico?", es: "¿Cuándo vale la pena desde Puerto Rico?" },
        a: { en: "Especially for cruises, honeymoons, family or group trips, and multi-country itineraries, where flight connections out of San Juan and timing make a real difference.", es: "Sobre todo en cruceros, lunas de miel, viajes en familia o en grupo e itinerarios por varios países, donde las conexiones desde San Juan y el orden del viaje hacen una diferencia real." } },
    ],
    related: [L.sj, L.trips, L.micro, L.contact],
  },
  micro: {
    heading: H,
    items: [
      { q: { en: "How long is a micro-cation?", es: "¿Cuánto dura una microvacación?" },
        a: { en: "Usually two to four nights, often around a long weekend or a holiday.", es: "Normalmente de dos a cuatro noches, muchas veces aprovechando un fin de semana largo o un feriado." } },
      { q: { en: "What short trips work well from Puerto Rico?", es: "¿Qué viajes cortos funcionan bien desde Puerto Rico?" },
        a: { en: "Destinations with direct or short flights from San Juan, short Caribbean cruises, and getaways within Puerto Rico itself. The key is to keep travel time low compared to time at the destination.", es: "Destinos con vuelos directos o cortos desde San Juan, cruceros cortos por el Caribe y escapadas dentro de Puerto Rico. La clave es que el tiempo viajando sea poco comparado con el tiempo en el destino." } },
      { q: { en: "How do I get the most out of a few days?", es: "¿Cómo aprovecho al máximo pocos días?" },
        a: { en: "Fly early, choose one area instead of several, and book the key activity in advance. A travel agent can help line up flights and hotel so no day is lost.", es: "Sal temprano, escoge una sola zona en vez de varias y reserva la actividad principal con tiempo. Un agente de viaje puede coordinar vuelos y hotel para no perder ningún día." } },
    ],
    related: [L.sj, L.wellness, L.save, L.contact],
  },
  river: {
    heading: H,
    items: [
      { q: { en: "How is a river cruise different from an ocean cruise?", es: "¿En qué se diferencia un crucero de río de uno por el mar?" },
        a: { en: "Ships are much smaller, you dock in or near town centers almost every day, and shore excursions are often included. It's calmer and more focused on the destinations than on the ship.", es: "Los barcos son mucho más pequeños, atracas en o cerca del centro de los pueblos casi todos los días y muchas excursiones suelen estar incluidas. Es más tranquilo y se enfoca más en los destinos que en el barco." } },
      { q: { en: "Are river cruises only for older travelers?", es: "¿Los cruceros de río son solo para personas mayores?" },
        a: { en: "Not anymore. Several lines now offer more active excursions like biking and hiking, and some have options designed for younger travelers or families on select sailings.", es: "Ya no. Varias líneas de cruceros ofrecen excursiones más activas como bicicleta y caminatas, y algunas tienen opciones pensadas para viajeros más jóvenes o familias en ciertas salidas." } },
      { q: { en: "How do I get to a river cruise from Puerto Rico?", es: "¿Cómo llego a un crucero de río desde Puerto Rico?" },
        a: { en: "You fly from San Juan to the embarkation city, usually with one connection. Arriving a day early is a smart way to avoid missing the ship if a flight is delayed.", es: "Vuelas desde San Juan a la ciudad de salida, normalmente con una conexión. Llegar un día antes es buena idea para no perder el barco si un vuelo se atrasa." } },
    ],
    related: [L.rivers, L.save, L.wellness, L.contact],
  },
  wellness: {
    heading: H,
    items: [
      { q: { en: "What is wellness travel?", es: "¿Qué es un viaje de bienestar?" },
        a: { en: "A trip planned around rest and feeling better: a slower pace, nature, movement, good food and time to disconnect. It can be a spa resort, a yoga retreat or simply a quiet, well-planned getaway.", es: "Un viaje planificado para descansar y sentirte mejor: ritmo más lento, naturaleza, movimiento, buena comida y tiempo para desconectar. Puede ser un resort con spa, un retiro de yoga o simplemente una escapada tranquila y bien planificada." } },
      { q: { en: "Does wellness travel have to be expensive?", es: "¿Un viaje de bienestar tiene que ser caro?" },
        a: { en: "No. What matters is the pace and the plan, not the price. Shorter trips, shoulder seasons and simpler stays can all work within different budgets.", es: "No. Lo importante es el ritmo y la planificación, no el precio. Viajes más cortos, temporadas intermedias y alojamientos más sencillos pueden funcionar con distintos presupuestos." } },
      { q: { en: "Is a river cruise a good wellness trip?", es: "¿Un crucero de río sirve como viaje de bienestar?" },
        a: { en: "For many people, yes: you unpack once, the pace is calm and each day brings a new place without long travel days.", es: "Para muchas personas, sí: desempacas una sola vez, el ritmo es tranquilo y cada día conoces un lugar nuevo sin largos días de traslado." } },
    ],
    related: [L.river, L.micro, L.trips, L.contact],
  },
};
