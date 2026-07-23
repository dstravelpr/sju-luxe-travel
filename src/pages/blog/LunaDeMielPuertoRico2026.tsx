import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/honeymoon/maldives.png";
import boraImg from "@/assets/honeymoon/bora-bora.png";
import santoriniImg from "@/assets/honeymoon/santorini.png";
import amalfiImg from "@/assets/honeymoon/amalfi.png";
import portugalImg from "@/assets/honeymoon/portugal.png";
import tuscanyImg from "@/assets/honeymoon/tuscany.png";
import safariImg from "@/assets/honeymoon/safari.jpg";

const schemaJson = buildGraph({
  "@type": "BlogPosting",
  headline: "Mejores Destinos de Luna de Miel 2026 desde Puerto Rico",
  description:
    "Los 7 mejores destinos de luna de miel 2026 desde San Juan: Maldivas, Bora Bora, Amalfi, Santorini, Portugal. Itinerarios, vuelos, presupuestos y temporadas por agente de lujo.",
  author: AUTHOR,
  publisher: ORG_REF,

  datePublished: "2026-06-01",
  dateModified: "2026-07-23",
  inLanguage: "es-PR",
  image: "https://www.sjuluxetravel.com/og/honeymoon-2026.png",
  keywords: [
    "mejores destinos luna de miel 2026",
    "honeymoon destinations 2026",
    "luna de miel desde Puerto Rico",
    "paquetes luna de miel",
    "luna de miel Maldivas",
    "luna de miel Bora Bora",
    "luna de miel todo incluido",
    "honeymoon from San Juan",
  ],
  url: "https://www.sjuluxetravel.com/blog/luna-de-miel-puerto-rico-2026",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una luna de miel de lujo desde Puerto Rico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una luna de miel de lujo desde San Juan suele costar entre $12,000 y $35,000 por pareja para 7–10 noches, incluyendo vuelos en business class, hotel 5 estrellas y experiencias privadas. Maldivas y Bora Bora están en el extremo superior; Portugal, Italia y Grecia ofrecen lujo a un costo menor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo debo empezar a planificar mi luna de miel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos 8 a 12 meses antes para Maldivas, Bora Bora y safaris en África. Para Europa (Italia, Grecia, Portugal) con 6 meses es suficiente. Las villas sobre el agua y las suites más codiciadas se reservan hasta con un año de antelación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el mejor destino de luna de miel para 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para 2026 los destinos más solicitados son Maldivas, Bora Bora, la Costa Amalfitana, Santorini y Portugal. La elección depende del estilo de la pareja: playa absoluta (Maldivas/Bora Bora), cultura + mar (Amalfi/Grecia) o aventura (Sudáfrica + Mauricio).",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito pasaporte para todos estos destinos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, todos los destinos en esta lista requieren pasaporte estadounidense vigente con al menos 6 meses de validez desde la fecha de regreso. Algunos países también requieren páginas en blanco para sellos.",
      },
    },
  ],
};

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/honeymoon-2026.png"
        title="Mejores Destinos de Luna de Miel 2026 desde Puerto Rico"
        description="Los 7 mejores destinos de luna de miel 2026 desde San Juan: Maldivas, Bora Bora, Amalfi, Santorini, Portugal. Itinerarios y vuelos por agente de lujo."
        canonical="https://www.sjuluxetravel.com/blog/luna-de-miel-puerto-rico-2026"
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          { name: 'Mejores Destinos de Luna de Miel 2026 desde Puerto Rico', url: "https://www.sjuluxetravel.com/blog/luna-de-miel-puerto-rico-2026" },
        ]}
        schemaJson={schemaJson}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to={localPath("/blog")}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8"
          >
            <ArrowLeft size={16} />
            {isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>

          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{isEs ? "Romance" : "Romance"}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "Mejores Destinos de Luna de Miel 2026 — 7 Escapadas de Lujo desde Puerto Rico"
                : "Best Honeymoon Destinations 2026 — 7 Luxury Escapes from Puerto Rico"}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "1 de junio de 2026" : "June 1, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "14 min de lectura" : "14 min read"}</span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img
              src={heroImg}
              alt={isEs ? "Villa sobre el agua en Maldivas para luna de miel desde Puerto Rico" : "Overwater villa in Maldives for honeymoon from Puerto Rico"}
              className="w-full h-full object-cover"
              width={1024}
              height={576}
            />
          </div>

          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p className="text-lg text-foreground/90">
              {isEs
                ? "Planificar una luna de miel desde Puerto Rico tiene su propio conjunto de consideraciones: vuelos con escalas estratégicas vía MIA, JFK o ATL, husos horarios que pueden costar un día entero de viaje, requisitos de pasaporte vigente y la temporada perfecta para cada destino. En SJU Luxe Travel hemos coordinado decenas de lunas de miel saliendo desde SJU, y estos son los 7 destinos que más nos solicitan las parejas en 2026 — con itinerarios reales, rutas de vuelo, presupuestos estimados y los meses ideales para viajar."
                : "Planning a honeymoon from Puerto Rico comes with its own considerations: strategic connecting flights via MIA, JFK or ATL, time zones that can cost an entire travel day, valid passport requirements, and the perfect season for each destination. At SJU Luxe Travel we've coordinated dozens of honeymoons departing SJU — these are the 7 destinations most requested by couples in 2026, with real itineraries, flight routes, budget estimates and the ideal months to travel."}
            </p>

            <p>
              {isEs
                ? "Antes de entrar en los destinos, una nota práctica: el factor decisivo para una luna de miel exitosa desde Puerto Rico no es el destino — es el calendario. La diferencia entre viajar en temporada ideal vs. temporada equivocada puede significar lluvia diaria en Maldivas, multitudes en Santorini, calor sofocante en Amalfi o el monzón en Bora Bora. Cada destino abajo incluye la ventana exacta que recomendamos."
                : "Before diving into the destinations, a practical note: the decisive factor for a successful honeymoon from Puerto Rico isn't the destination — it's the calendar. The difference between traveling in the ideal vs. wrong season can mean daily rain in the Maldives, crowds in Santorini, sweltering heat in Amalfi, or monsoon in Bora Bora. Each destination below includes the exact window we recommend."}
            </p>

            {/* 1. Maldives */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              1. {isEs ? "Maldivas — el clásico definitivo de luna de miel" : "Maldives — the definitive honeymoon classic"}
            </h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border my-6">
              <img src={heroImg} alt={isEs ? "Villa sobre el agua en Maldivas" : "Overwater villa in Maldives"} className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
            </div>
            <p>
              {isEs
                ? "Si solo vas a tener una luna de miel en tu vida, Maldivas sigue siendo la respuesta más segura. Villas sobre el agua con piscina privada, snorkel con rayas manta y tiburones de arrecife inofensivos, cenas privadas en bancos de arena al amanecer, y una privacidad que ningún otro destino del mundo iguala. La logística es real — son 28 a 32 horas de viaje puerta a puerta desde SJU — pero el destino lo vale."
                : "If you're only going to have one honeymoon in your life, the Maldives is still the safest answer. Overwater villas with private pools, snorkeling with manta rays and harmless reef sharks, private sunrise dinners on sandbanks, and a level of privacy no other destination in the world matches. The logistics are real — 28 to 32 hours door-to-door from SJU — but the destination is worth it."}
            </p>
            <p><strong className="text-foreground">{isEs ? "Vuelo recomendado:" : "Recommended routing:"}</strong> SJU → MIA → DOH → MLE (Qatar Airways Qsuite) o SJU → JFK → DXB → MLE (Emirates First). {isEs ? "Reserva business class — 14 horas en economy desde Doha hasta Miami es brutal para una luna de miel." : "Book business class — 14 hours in economy from Doha to Miami is brutal for a honeymoon."}</p>
            <p><strong className="text-foreground">{isEs ? "Mejor temporada:" : "Best season:"}</strong> {isEs ? "Noviembre a abril (estación seca). Evita mayo a octubre — monzón con lluvias diarias." : "November to April (dry season). Avoid May to October — monsoon with daily rain."}</p>
            <p><strong className="text-foreground">{isEs ? "Duración ideal:" : "Ideal length:"}</strong> {isEs ? "7 a 10 noches en una sola isla, o 5+5 entre dos resorts (uno de playa, uno de buceo)." : "7–10 nights at one resort, or 5+5 between two (one beach, one diving)."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Luxe:" : "Luxe Budget:"}</strong> {isEs ? "$18,000–$45,000 por pareja para 7 noches con vuelos en business class, villa sobre el agua con piscina privada y traslado en hidroavión." : "$18,000–$45,000 per couple for 7 nights with business-class flights, overwater villa with private pool and seaplane transfer."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Budget Friendly:" : "Budget Friendly:"}</strong> {isEs ? "$9,500–$14,000 por pareja para 7 noches con vuelos en economy/premium economy, beach villa (no sobre el agua) en resorts como Kuramathi, Anantara Dhigu o Conrad Rangali, y traslado en lancha rápida en lugar de hidroavión." : "$9,500–$14,000 per couple for 7 nights with economy/premium-economy flights, beach villa (not overwater) at resorts like Kuramathi, Anantara Dhigu or Conrad Rangali, and speedboat transfer instead of seaplane."}</p>
            <p><strong className="text-foreground">{isEs ? "Resorts que recomendamos:" : "Resorts we recommend:"}</strong> Soneva Jani, Cheval Blanc Randheli, Four Seasons Landaa Giraavaru, Waldorf Astoria Ithaafushi. {isEs ? "Para presupuesto medio-alto, Como Maalifushi y Anantara Kihavah son excepcionales." : "For mid-high budget, Como Maalifushi and Anantara Kihavah are exceptional."}</p>
            <p>
              <Link to={localPath("/blog/maldivas-desde-puerto-rico-guia")} className="text-gold hover:text-gold-light underline">
                {isEs ? "Lee nuestra guía completa de Maldivas desde Puerto Rico →" : "Read our full Maldives from Puerto Rico guide →"}
              </Link>
            </p>

            {/* 2. Bora Bora */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              2. {isEs ? "Bora Bora, Polinesia Francesa — el sueño del Pacífico Sur" : "Bora Bora, French Polynesia — the South Pacific dream"}
            </h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border my-6">
              <img src={boraImg} alt={isEs ? "Bungalows sobre el agua en Bora Bora" : "Overwater bungalows in Bora Bora"} className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
            </div>
            <p>
              {isEs
                ? "Bora Bora ofrece algo que Maldivas no puede: una montaña volcánica dramática (el Monte Otemanu) como telón de fondo de cada foto. El agua es de un turquesa más claro, la cultura polinesia es palpable, y los bungalows del Four Seasons o el InterContinental Thalasso tienen pisos de cristal sobre la laguna. Si tu pareja sueña con tatuajes polinesios, leis de tiaré y cenas con música ukulele, este es tu destino."
                : "Bora Bora offers something the Maldives can't: a dramatic volcanic mountain (Mount Otemanu) as the backdrop to every photo. The water is a brighter turquoise, Polynesian culture is palpable, and the Four Seasons or InterContinental Thalasso bungalows have glass floors over the lagoon. If your partner dreams of Polynesian tattoos, tiare leis, and dinners with ukulele music, this is your destination."}
            </p>
            <p><strong className="text-foreground">{isEs ? "Vuelo recomendado:" : "Recommended routing:"}</strong> SJU → LAX → PPT (Air Tahiti Nui) → BOB. {isEs ? "Es el vuelo más largo de la lista — 24+ horas — pero LAX-Tahiti directo es cómodo en business." : "Longest flight on the list — 24+ hours — but LAX-Tahiti direct is comfortable in business."}</p>
            <p><strong className="text-foreground">{isEs ? "Mejor temporada:" : "Best season:"}</strong> {isEs ? "Mayo a octubre (estación seca, menos humedad)." : "May to October (dry season, less humidity)."}</p>
            <p><strong className="text-foreground">{isEs ? "Duración ideal:" : "Ideal length:"}</strong> {isEs ? "10–12 noches: 3 en Tahití, 4 en Moorea, 5 en Bora Bora." : "10–12 nights: 3 in Tahiti, 4 in Moorea, 5 in Bora Bora."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Luxe:" : "Luxe Budget:"}</strong> {isEs ? "$22,000–$50,000 por pareja para 10 noches con vuelos premium y dos bungalows sobre el agua." : "$22,000–$50,000 per couple for 10 nights with premium flights and two overwater bungalows."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Budget Friendly:" : "Budget Friendly:"}</strong> {isEs ? "$11,000–$16,000 por pareja para 8 noches con vuelos en economy (Air Tahiti Nui ofrece tarifas razonables desde LAX), bungalow de jardín o playa en el InterContinental Le Moana o Maitai Polynesia, y noches divididas entre Moorea (más económica) y Bora Bora." : "$11,000–$16,000 per couple for 8 nights with economy flights (Air Tahiti Nui offers reasonable LAX fares), garden or beach bungalow at InterContinental Le Moana or Maitai Polynesia, and nights split between Moorea (more affordable) and Bora Bora."}</p>
            <p><strong className="text-foreground">{isEs ? "Resorts:" : "Resorts:"}</strong> Four Seasons Bora Bora, St. Regis Bora Bora, InterContinental Thalasso Spa, Conrad Bora Bora Nui.</p>

            {/* 3. Santorini */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              3. {isEs ? "Santorini + Mykonos — la postal del Egeo" : "Santorini + Mykonos — the Aegean postcard"}
            </h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border my-6">
              <img src={santoriniImg} alt={isEs ? "Atardecer en Oia, Santorini" : "Sunset in Oia, Santorini"} className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
            </div>
            <p>
              {isEs
                ? "Santorini es la luna de miel de las fotos icónicas: cúpulas azules, atardeceres en Oia, suites-cueva con piscinas privadas talladas en la caldera. Pero Santorini sola se siente corta — la isla es pequeña y se recorre en 3 días. Combínala con Mykonos (vida nocturna sofisticada, playas como Psarou) o con Creta (más cultura, menos multitudes) para una luna de miel completa de 8 a 10 noches."
                : "Santorini is the honeymoon of iconic photos: blue domes, Oia sunsets, cave-suites with private pools carved into the caldera. But Santorini alone feels short — the island is small and walkable in 3 days. Combine it with Mykonos (sophisticated nightlife, beaches like Psarou) or Crete (more culture, fewer crowds) for a complete 8–10 night honeymoon."}
            </p>
            <p><strong className="text-foreground">{isEs ? "Vuelo recomendado:" : "Recommended routing:"}</strong> SJU → JFK → ATH → JTR (Santorini). {isEs ? "Aegean Airlines y Olympic Air conectan Atenas con las islas." : "Aegean Airlines and Olympic Air connect Athens with the islands."}</p>
            <p><strong className="text-foreground">{isEs ? "Mejor temporada:" : "Best season:"}</strong> {isEs ? "Mayo a principios de junio, o septiembre a mediados de octubre. Evita julio y agosto — multitudes europeas y calor extremo." : "May to early June, or September to mid-October. Avoid July and August — European crowds and extreme heat."}</p>
            <p><strong className="text-foreground">{isEs ? "Duración ideal:" : "Ideal length:"}</strong> {isEs ? "8–10 noches: 2 en Atenas, 4 en Santorini, 3 en Mykonos o Creta." : "8–10 nights: 2 in Athens, 4 in Santorini, 3 in Mykonos or Crete."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Luxe:" : "Luxe Budget:"}</strong> {isEs ? "$14,000–$28,000 por pareja con suites caldera y traslados en lancha privada." : "$14,000–$28,000 per couple with caldera suites and private speedboat transfers."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Budget Friendly:" : "Budget Friendly:"}</strong> {isEs ? "$6,500–$10,000 por pareja con vuelos en economy, hoteles boutique fuera del borde de la caldera (Imerovigli o Firostefani en vez de Oia), ferry en lugar de lancha privada entre islas, y viaje en mayo o principios de octubre para mejores tarifas." : "$6,500–$10,000 per couple with economy flights, boutique hotels just off the caldera edge (Imerovigli or Firostefani instead of Oia), ferry instead of private speedboat between islands, and travel in May or early October for the best rates."}</p>
            <p><strong className="text-foreground">{isEs ? "Hoteles:" : "Hotels:"}</strong> Canaves Oia Epitome, Grace Hotel Auberge, Katikies, Cavo Tagoo Mykonos.</p>

            {/* 4. Amalfi */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              4. {isEs ? "Costa Amalfitana, Italia — el romance del Tirreno" : "Amalfi Coast, Italy — Tyrrhenian romance"}
            </h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border my-6">
              <img src={amalfiImg} alt={isEs ? "Positano en la Costa Amalfitana" : "Positano on the Amalfi Coast"} className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
            </div>
            <p>
              {isEs
                ? "Si para tu pareja la luna de miel perfecta es vino, comida y vistas dramáticas — Amalfi gana. Positano colgada de los acantilados, Ravello con sus jardines sobre el mar, Capri y la Gruta Azul en yate privado, cenas en Le Sirenuse o La Sponda. Italia es además uno de los pocos destinos donde el desayuno, la comida y la cena son todos memorables — no solo la cena tasting menu."
                : "If for your partner the perfect honeymoon is wine, food and dramatic views — Amalfi wins. Positano clinging to cliffs, Ravello with its sea-facing gardens, Capri and the Blue Grotto by private yacht, dinners at Le Sirenuse or La Sponda. Italy is also one of the few destinations where breakfast, lunch and dinner are all memorable — not just the tasting-menu dinner."}
            </p>
            <p><strong className="text-foreground">{isEs ? "Vuelo recomendado:" : "Recommended routing:"}</strong> SJU → JFK → NAP (Nápoles) {isEs ? "vía American/Delta + ITA o Lufthansa. Traslado privado a Positano: 90 min." : "via American/Delta + ITA or Lufthansa. Private transfer to Positano: 90 min."}</p>
            <p><strong className="text-foreground">{isEs ? "Mejor temporada:" : "Best season:"}</strong> {isEs ? "Mediados de mayo a junio, o septiembre. Evita agosto — todos los italianos están de vacaciones, precios al doble." : "Mid-May to June, or September. Avoid August — all of Italy is on holiday, prices double."}</p>
            <p><strong className="text-foreground">{isEs ? "Duración ideal:" : "Ideal length:"}</strong> {isEs ? "8–10 noches: 4 en Amalfi (Positano o Ravello), 2 en Capri, 2 en Roma." : "8–10 nights: 4 in Amalfi (Positano or Ravello), 2 in Capri, 2 in Rome."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Luxe:" : "Luxe Budget:"}</strong> {isEs ? "$16,000–$32,000 por pareja con hoteles 5★ y un día completo de yate privado." : "$16,000–$32,000 per couple with 5★ hotels and a full day of private yacht."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Budget Friendly:" : "Budget Friendly:"}</strong> {isEs ? "$7,500–$12,000 por pareja con vuelos en economy, hoteles 4★ boutique en Praiano o Minori (en vez de Positano), tour compartido en barco a Capri en lugar de yate privado, y traslado en tren + ferry desde Nápoles." : "$7,500–$12,000 per couple with economy flights, 4★ boutique hotels in Praiano or Minori (instead of Positano), shared group boat tour to Capri instead of private yacht, and train + ferry transfer from Naples."}</p>
            <p><strong className="text-foreground">{isEs ? "Hoteles:" : "Hotels:"}</strong> Le Sirenuse (Positano), Hotel Caruso (Ravello), JK Place Capri, Borgo Santandrea.</p>

            {/* 5. Portugal */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              5. {isEs ? "Portugal — Lisboa, Douro y Algarve" : "Portugal — Lisbon, Douro & Algarve"}
            </h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border my-6">
              <img src={portugalImg} alt={isEs ? "Costa de Portugal" : "Portuguese coastline"} className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
            </div>
            <p>
              {isEs
                ? "Portugal es el secreto mejor guardado de Europa para lunas de miel — menos turistas que Italia o Grecia, mejor valor, y una mezcla única de ciudad sofisticada (Lisboa), región vinícola dramática (Douro) y playas privadas de acantilados (Algarve). Palacios reales convertidos en hoteles boutique, vinos del Douro que cuestan la mitad que los franceses, y mariscos frescos que rivalizan con cualquier costa mediterránea."
                : "Portugal is Europe's best-kept honeymoon secret — fewer tourists than Italy or Greece, better value, and a unique mix of sophisticated city (Lisbon), dramatic wine region (Douro) and private cliff beaches (Algarve). Royal palaces converted into boutique hotels, Douro wines at half the price of French ones, and fresh seafood that rivals any Mediterranean coast."}
            </p>
            <p><strong className="text-foreground">{isEs ? "Vuelo recomendado:" : "Recommended routing:"}</strong> SJU → MIA → LIS (TAP Air Portugal) {isEs ? "— vuelo directo desde MIA, 8 horas." : "— direct from MIA, 8 hours."}</p>
            <p><strong className="text-foreground">{isEs ? "Mejor temporada:" : "Best season:"}</strong> {isEs ? "Mayo a junio, o septiembre a octubre. El Algarve es bueno hasta noviembre." : "May to June, or September to October. Algarve is good through November."}</p>
            <p><strong className="text-foreground">{isEs ? "Duración ideal:" : "Ideal length:"}</strong> {isEs ? "10 noches: 3 en Lisboa, 3 en el Douro, 4 en el Algarve." : "10 nights: 3 in Lisbon, 3 in Douro, 4 in Algarve."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Luxe:" : "Luxe Budget:"}</strong> {isEs ? "$12,000–$22,000 por pareja — el mejor valor de esta lista." : "$12,000–$22,000 per couple — the best value on this list."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Budget Friendly:" : "Budget Friendly:"}</strong> {isEs ? "$5,500–$8,500 por pareja con vuelo directo TAP en economy desde MIA, hoteles boutique de 4★ en Lisboa (Memmo Alfama) y Porto, una quinta familiar en el Douro en lugar de Six Senses, y pousadas históricas en el Algarve." : "$5,500–$8,500 per couple with direct TAP economy from MIA, 4★ boutique hotels in Lisbon (Memmo Alfama) and Porto, a family-run quinta in the Douro instead of Six Senses, and historic pousadas in the Algarve."}</p>
            <p><strong className="text-foreground">{isEs ? "Hoteles:" : "Hotels:"}</strong> Six Senses Douro Valley, Bairro Alto Hotel (Lisboa), Vila Vita Parc (Algarve).</p>
            <p>
              <Link to={localPath("/blog/vuelos-puerto-rico-portugal")} className="text-gold hover:text-gold-light underline">
                {isEs ? "Lee nuestra guía de vuelos Puerto Rico → Portugal →" : "Read our Puerto Rico → Portugal flight guide →"}
              </Link>
            </p>

            {/* 6. Tuscany + Sardinia */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              6. {isEs ? "Toscana + Costa Esmeralda (Cerdeña)" : "Tuscany + Costa Smeralda (Sardinia)"}
            </h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border my-6">
              <img src={tuscanyImg} alt={isEs ? "Viñedo en la Toscana" : "Tuscan vineyard"} className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
            </div>
            <p>
              {isEs
                ? "La combinación perfecta de cultura y mar. Empiezas en una villa entre viñedos toscanos — Castiglion del Bosco o Rosewood Castiglion — con clases de cocina, catas de Brunello y excursiones a Florencia y Siena. Después vuelas a Olbia para una semana en la Costa Esmeralda de Cerdeña, donde el mar es de un turquesa que rivaliza con el Caribe y los yates de Porto Cervo son su propio espectáculo."
                : "The perfect culture + sea combo. You start in a Tuscan villa among vineyards — Castiglion del Bosco or Rosewood Castiglion — with cooking classes, Brunello tastings and day trips to Florence and Siena. Then you fly to Olbia for a week on Sardinia's Costa Smeralda, where the sea rivals Caribbean turquoise and the Porto Cervo yachts are their own show."}
            </p>
            <p><strong className="text-foreground">{isEs ? "Vuelo recomendado:" : "Recommended routing:"}</strong> SJU → JFK → FCO (Roma) → FLR (Florencia), luego FLR → OLB (Olbia). </p>
            <p><strong className="text-foreground">{isEs ? "Mejor temporada:" : "Best season:"}</strong> {isEs ? "Junio o septiembre — Toscana en pleno verde, Cerdeña en su mejor mar." : "June or September — Tuscany in full green, Sardinia at peak sea."}</p>
            <p><strong className="text-foreground">{isEs ? "Duración ideal:" : "Ideal length:"}</strong> {isEs ? "10–12 noches: 5 en Toscana, 6 en Cerdeña, 1 en Roma." : "10–12 nights: 5 in Tuscany, 6 in Sardinia, 1 in Rome."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Luxe:" : "Luxe Budget:"}</strong> {isEs ? "$20,000–$38,000 por pareja." : "$20,000–$38,000 per couple."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Budget Friendly:" : "Budget Friendly:"}</strong> {isEs ? "$9,000–$14,000 por pareja con vuelos en economy, agriturismo de lujo en la Toscana (Castello di Velona o similar) en lugar de Rosewood, y hoteles 4★ frente al mar en Cerdeña fuera de Porto Cervo (Baja Sardinia o Cannigione)." : "$9,000–$14,000 per couple with economy flights, luxury agriturismo in Tuscany (Castello di Velona or similar) instead of Rosewood, and 4★ beachfront hotels in Sardinia outside Porto Cervo (Baja Sardinia or Cannigione)."}</p>
            <p><strong className="text-foreground">{isEs ? "Hoteles:" : "Hotels:"}</strong> Rosewood Castiglion del Bosco, Belmond Castello di Casole, Hotel Cala di Volpe (Cerdeña), Hotel Pitrizza.</p>

            {/* 7. South Africa + Mauritius */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              7. {isEs ? "Sudáfrica + Mauricio — la luna de miel de la aventura" : "South Africa + Mauritius — the adventure honeymoon"}
            </h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border my-6">
              <img src={safariImg} alt={isEs ? "Lodge de safari de lujo en Sabi Sand, Sudáfrica" : "Luxury safari lodge in Sabi Sand, South Africa"} className="w-full h-full object-cover" loading="lazy" width={1024} height={576} />
            </div>
            <p>
              {isEs
                ? "Para la pareja que no quiere quedarse 10 días en una sola playa. Empiezas con safari de lujo en Sabi Sand (al lado del Kruger) — drives matutinos y vespertinos para ver los Big Five, cenas bajo las estrellas en el bush, y lodges como Singita o Royal Malewane que están entre los mejores del mundo. Después vuelas a Mauricio para una semana de playa absoluta en el Océano Índico. La combinación perfecta de adrenalina y descanso."
                : "For the couple that doesn't want to spend 10 days on one beach. You start with luxury safari in Sabi Sand (next to Kruger) — morning and evening drives for the Big Five, dinners under the stars in the bush, and lodges like Singita or Royal Malewane that rank among the world's best. Then fly to Mauritius for a week of pure Indian Ocean beach. The perfect adrenaline + rest combo."}
            </p>
            <p><strong className="text-foreground">{isEs ? "Vuelo recomendado:" : "Recommended routing:"}</strong> SJU → ATL → JNB (Johannesburgo) con Delta. JNB → MQP (Kruger) o vuelo charter directo al lodge. JNB → MRU (Mauricio) con Air Mauritius.</p>
            <p><strong className="text-foreground">{isEs ? "Mejor temporada:" : "Best season:"}</strong> {isEs ? "Mayo a septiembre (estación seca, mejor visibilidad de animales)." : "May to September (dry season, best animal visibility)."}</p>
            <p><strong className="text-foreground">{isEs ? "Duración ideal:" : "Ideal length:"}</strong> {isEs ? "12–14 noches: 4 en safari, 7 en Mauricio, 1–2 en Ciudad del Cabo." : "12–14 nights: 4 on safari, 7 in Mauritius, 1–2 in Cape Town."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Luxe:" : "Luxe Budget:"}</strong> {isEs ? "$25,000–$60,000 por pareja — el safari de lujo es el gasto más alto." : "$25,000–$60,000 per couple — luxury safari is the biggest line item."}</p>
            <p><strong className="text-foreground">{isEs ? "Presupuesto Budget Friendly:" : "Budget Friendly:"}</strong> {isEs ? "$12,000–$18,000 por pareja con vuelos en economy, lodges de safari de gama media-alta (Kapama Karula o Thornybush) en lugar de Singita, y resorts 4–5★ en Mauricio como LUX* Belle Mare o Constance Belle Mare Plage en lugar de One&Only." : "$12,000–$18,000 per couple with economy flights, mid-upper safari lodges (Kapama Karula or Thornybush) instead of Singita, and 4–5★ Mauritius resorts like LUX* Belle Mare or Constance Belle Mare Plage instead of One&Only."}</p>
            <p><strong className="text-foreground">{isEs ? "Lodges y resorts:" : "Lodges and resorts:"}</strong> Singita Sabi Sand, Royal Malewane, Londolozi (safari); One&Only Le Saint Géran, Four Seasons Anahita (Mauricio).</p>

            {/* Planning */}
            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "¿Cuándo empezar a planificar?" : "When should you start planning?"}
            </h2>
            <p>
              {isEs
                ? "Una luna de miel no es un viaje cualquiera, y la planificación tampoco lo es. Estos son los plazos que recomendamos según destino:"
                : "A honeymoon isn't a regular trip, and planning isn't either. These are the timelines we recommend by destination:"}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{isEs ? <><strong className="text-foreground">12 meses antes:</strong> Maldivas en temporada alta (diciembre–marzo), Bora Bora, safari en Sudáfrica, villas específicas en Amalfi/Cerdeña.</> : <><strong className="text-foreground">12 months out:</strong> Maldives high season (Dec–Mar), Bora Bora, South Africa safari, specific villas in Amalfi/Sardinia.</>}</li>
              <li>{isEs ? <><strong className="text-foreground">8–10 meses antes:</strong> Maldivas temporada media, Italia y Grecia en mayo/septiembre, Portugal en cualquier temporada.</> : <><strong className="text-foreground">8–10 months out:</strong> Maldives shoulder season, Italy and Greece in May/September, Portugal anytime.</>}</li>
              <li>{isEs ? <><strong className="text-foreground">6 meses antes:</strong> Mínimo absoluto para conseguir hoteles 5★ — más tarde y las mejores suites ya estarán reservadas.</> : <><strong className="text-foreground">6 months out:</strong> Absolute minimum for 5★ hotels — any later and the best suites will already be booked.</>}</li>
              <li>{isEs ? <><strong className="text-foreground">3 meses antes:</strong> Posible para Portugal, México o Caribe — destinos donde la oferta es más amplia.</> : <><strong className="text-foreground">3 months out:</strong> Possible for Portugal, Mexico or Caribbean — destinations with broader inventory.</>}</li>
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "Errores comunes a evitar" : "Common mistakes to avoid"}
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>{isEs ? <><strong className="text-foreground">Volar en economy a Asia.</strong> 28+ horas con escala — destruye los primeros 3 días de luna de miel. Business class es obligatorio para Maldivas/Bora Bora.</> : <><strong className="text-foreground">Flying economy to Asia.</strong> 28+ hours with connection — destroys the first 3 days of honeymoon. Business class is mandatory for Maldives/Bora Bora.</>}</li>
              <li>{isEs ? <><strong className="text-foreground">Subestimar el jet lag.</strong> De Puerto Rico a Maldivas hay 9 horas de diferencia. Planea 2 noches de "buffer" al llegar antes de actividades intensas.</> : <><strong className="text-foreground">Underestimating jet lag.</strong> Puerto Rico to Maldives is 9 hours difference. Plan 2 buffer nights on arrival before intense activities.</>}</li>
              <li>{isEs ? <><strong className="text-foreground">Reservar solo el hotel.</strong> Los traslados, cenas privadas, experiencias y upgrades son lo que diferencia una luna de miel "linda" de una inolvidable. Un agente coordina todo esto.</> : <><strong className="text-foreground">Booking just the hotel.</strong> Transfers, private dinners, experiences and upgrades are what separate a "nice" honeymoon from an unforgettable one. An agent coordinates all of it.</>}</li>
              <li>{isEs ? <><strong className="text-foreground">Ignorar el pasaporte.</strong> Necesitas mínimo 6 meses de vigencia desde la fecha de regreso. Renueva antes de reservar.</> : <><strong className="text-foreground">Ignoring the passport.</strong> You need at least 6 months validity from your return date. Renew before booking.</>}</li>
              <li>{isEs ? <><strong className="text-foreground">No mencionar que es luna de miel.</strong> La mayoría de hoteles 5★ ofrecen amenidades de cortesía (champagne, decoración, upgrades) — pero solo si saben. Un agente las gestiona por ti.</> : <><strong className="text-foreground">Not mentioning it's a honeymoon.</strong> Most 5★ hotels offer complimentary amenities (champagne, decor, upgrades) — but only if they know. An agent arranges all of it.</>}</li>
            </ol>

            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "¿Por qué reservar con un agente de viaje?" : "Why book with a luxury travel agent?"}
            </h2>
            <p>
              {isEs
                ? "Como Independent Affiliate de NCM Concierge (parte de Travel Leaders), tenemos acceso a programas preferidos como Virtuoso, Four Seasons Preferred Partner, Belmond Bellini Club y Rosewood Elite. Eso significa que la misma habitación que reservarías online viene con beneficios extra sin costo adicional: desayuno diario para dos, crédito de spa o resort de $100+ por estadía, upgrade gratis sujeto a disponibilidad, check-in temprano y check-out tardío garantizados, y amenidad de bienvenida (champagne, fruta, nota escrita a mano)."
                : "As an Independent Affiliate of NCM Concierge (part of Travel Leaders), we have access to preferred programs like Virtuoso, Four Seasons Preferred Partner, Belmond Bellini Club and Rosewood Elite. That means the same room you'd book online comes with extra benefits at no additional cost: daily breakfast for two, $100+ spa or resort credit per stay, complimentary upgrade subject to availability, guaranteed early check-in and late check-out, and a welcome amenity (champagne, fruit, handwritten note)."}
            </p>
            <p>
              {isEs
                ? "Para una luna de miel, esos beneficios pueden sumar $1,500–$3,000 de valor real — pagados por el hotel, no por ti. Nuestra comisión la cubre el hotel, no se añade a tu factura."
                : "For a honeymoon, those benefits can add $1,500–$3,000 of real value — paid by the hotel, not by you. Our commission is paid by the hotel, never added to your bill."}
            </p>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Planifica Tu Luna de Miel" : "Plan Your Honeymoon"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Consulta gratuita para diseñar tu itinerario perfecto desde Puerto Rico — con beneficios exclusivos de hotel incluidos."
                : "Complimentary consultation to design your perfect itinerary from Puerto Rico — with exclusive hotel benefits included."}
            </p>
            <Link
              to={localPath("/luna-de-miel-de-lujo")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {isEs ? "Comenzar" : "Start Planning"}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
