import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/blog-wellness-maldives.jpg";

const POST_URL = "https://www.sjuluxetravel.com/blog/wellness-travel-intentional-luxury";
const OG_IMAGE = "https://www.sjuluxetravel.com/og/wellness-travel.jpg";

const FAQS_EN = [
  {
    q: "What is intentional luxury travel?",
    a: "Intentional luxury travel is a trip designed around restoring your nervous system — silence, nature, nourishing food, movement and real rest — rather than packing in sightseeing. Every element (flights, hotel, guides, spa) is chosen to support that wellness outcome.",
  },
  {
    q: "Is wellness travel actually good for mental health?",
    a: "Yes. Research summarized by Condé Nast Traveler and the Global Wellness Institute shows that even 72 hours of intentional disconnection lowers cortisol, improves sleep, and restores cognitive function for weeks afterward.",
  },
  {
    q: "What is the best wellness destination from Puerto Rico?",
    a: "For travelers from San Juan (SJU), Mexico's Riviera Maya is the most efficient: same time zone, direct flights under 4 hours, and properties like Chablé Yucatán or Maroma — A Belmond Hotel. For a longer immersion, the Maldives (Joali Being, Six Senses Laamu) is the gold standard.",
  },
  {
    q: "How long should a wellness trip be?",
    a: "A minimum of four full days at the destination is the sweet spot. Three nights is usually too short to fully decompress; seven to ten days delivers the deepest, longest-lasting benefits.",
  },
  {
    q: "How much does a luxury wellness retreat cost from San Juan?",
    a: "A four-night curated wellness retreat in the Riviera Maya typically runs $4,500–$9,000 per person all-in (flights, transfers, 5-star resort, spa program, private guide). A seven-night Maldives wellness program at Joali Being or Six Senses Laamu starts around $12,000 per person and scales with villa category and treatments.",
  },
  {
    q: "What is the difference between a wellness retreat and a regular vacation?",
    a: "A regular vacation is built around activities and sightseeing; a wellness retreat is built around outcomes — sleep quality, stress reduction, nutrition, movement and mental clarity. The schedule, food, treatments and even Wi-Fi access are designed to deliver measurable physiological recovery.",
  },
  {
    q: "Do I need a passport for a wellness trip from Puerto Rico?",
    a: "Mexico, the Maldives, Costa Rica and most international wellness destinations require a U.S. passport. If you don't have one yet, we can also design a no-passport wellness escape — St. Thomas, St. Croix or stateside retreats in Sedona and Miraval all qualify.",
  },
  {
    q: "When is the best time of year to book a wellness retreat?",
    a: "January through March is peak demand (New Year resets) and books out 4–6 months ahead. The smartest value windows are late April to early June, and September to mid-November, when 5-star resorts offer shoulder-season rates without compromising weather.",
  },
];

const FAQS_ES = [
  {
    q: "¿Qué es el viaje de lujo intencional?",
    a: "El viaje de lujo intencional es un viaje diseñado para restaurar tu sistema nervioso — silencio, naturaleza, comida nutritiva, movimiento y descanso real — en lugar de acumular turismo. Cada elemento (vuelos, hotel, guías, spa) se elige para reforzar ese objetivo de bienestar.",
  },
  {
    q: "¿El turismo de bienestar realmente ayuda a la salud mental?",
    a: "Sí. Investigaciones recopiladas por Condé Nast Traveler y el Global Wellness Institute muestran que incluso 72 horas de desconexión intencional reducen el cortisol, mejoran el sueño y restauran la función cognitiva durante semanas.",
  },
  {
    q: "¿Cuál es el mejor destino de bienestar desde Puerto Rico?",
    a: "Para viajeros desde San Juan (SJU), la Riviera Maya de México es lo más eficiente: misma zona horaria, vuelos directos de menos de 4 horas y propiedades como Chablé Yucatán o Maroma — A Belmond Hotel. Para una inmersión más profunda, Maldivas (Joali Being, Six Senses Laamu) es el estándar de oro.",
  },
  {
    q: "¿Cuánto debe durar un viaje de bienestar?",
    a: "Un mínimo de cuatro días completos en el destino es ideal. Tres noches suele ser muy poco para desconectar; de siete a diez días entrega los beneficios más profundos y duraderos.",
  },
  {
    q: "¿Cuánto cuesta un retiro de bienestar de lujo desde San Juan?",
    a: "Un retiro de bienestar curado de cuatro noches en la Riviera Maya cuesta típicamente $4,500–$9,000 por persona todo incluido (vuelos, traslados, resort 5 estrellas, programa de spa, guía privado). Un programa de siete noches en Maldivas en Joali Being o Six Senses Laamu comienza alrededor de $12,000 por persona.",
  },
  {
    q: "¿Cuál es la diferencia entre un retiro de bienestar y unas vacaciones normales?",
    a: "Unas vacaciones normales se construyen alrededor de actividades y turismo; un retiro de bienestar se construye alrededor de resultados — calidad de sueño, reducción de estrés, nutrición, movimiento y claridad mental. Cada detalle está diseñado para entregar recuperación fisiológica medible.",
  },
  {
    q: "¿Necesito pasaporte para un viaje de bienestar desde Puerto Rico?",
    a: "México, Maldivas, Costa Rica y la mayoría de destinos internacionales requieren pasaporte estadounidense. Si aún no tienes uno, también diseñamos escapes de bienestar sin pasaporte — St. Thomas, St. Croix o retiros como Sedona y Miraval en EE. UU.",
  },
  {
    q: "¿Cuál es la mejor época para reservar un retiro de bienestar?",
    a: "Enero a marzo es la temporada alta (resets de Año Nuevo) y se agota con 4–6 meses de anticipación. Las mejores ventanas de valor son finales de abril a principios de junio, y septiembre a mediados de noviembre.",
  },
];

const WellnessTravel = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";
  const faqs = isEs ? FAQS_ES : FAQS_EN;

  const title = isEs
    ? "Viajes de Bienestar: Por Qué Tu Médico Tiene Razón (Guía 2026)"
    : "Wellness Travel: Why Your Doctor Might Be Right (2026 Guide)";
  const description = isEs
    ? "El viaje de lujo intencional no es una tendencia, es una estrategia de salud mental. Descubre cómo retiros en Maldivas y Riviera Maya generan bienestar real."
    : "Intentional luxury travel isn't a trend — it's a mental health strategy. See how wellness retreats in the Maldives and Riviera Maya deliver lasting benefits.";

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description,
        image: OG_IMAGE,
        author: {
          "@type": "Person",
          name: "Daniel Santiago Díaz",
          url: "https://www.sjuluxetravel.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "SJU Luxe Travel",
          url: "https://www.sjuluxetravel.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.sjuluxetravel.com/favicon.png",
          },
        },
        datePublished: "2026-05-15",
        dateModified: "2026-05-15",
        inLanguage: isEs ? "es-PR" : "en-US",
        mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
        url: POST_URL,
        keywords: isEs
          ? "viajes de bienestar, lujo intencional, Maldivas, Riviera Maya, salud mental, Puerto Rico"
          : "wellness travel, intentional luxury, Maldives, Riviera Maya, mental health, Puerto Rico",
        about: [
          { "@type": "Thing", name: "Wellness tourism" },
          { "@type": "Place", name: "Maldives" },
          { "@type": "Place", name: "Riviera Maya, Mexico" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sjuluxetravel.com/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.sjuluxetravel.com/blog" },
          { "@type": "ListItem", position: 3, name: title, item: POST_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage={OG_IMAGE}
        title={title}
        description={description}
        canonical={POST_URL}
        schemaJson={schemaJson}
      />


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
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              {isEs ? "Bienestar y Viajes" : "Wellness & Travel"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "Viajes de Bienestar: Por Qué Tu Médico Tiene Razón"
                : "Wellness Travel: Why Your Doctor Might Be Right"}
            </h1>
            <p className="font-heading text-xl md:text-2xl text-muted-foreground italic mb-6">
              {isEs
                ? "El viaje de lujo intencional como inversión en salud mental"
                : "Intentional luxury travel as a mental health investment"}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "Mayo 2026" : "May 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "7 min de lectura" : "7 min read"}</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-10">
            <img
              src={heroImg}
              alt={
                isEs
                  ? "Villa de bienestar sobre el agua en Maldivas al atardecer — viaje de lujo intencional"
                  : "Overwater wellness villa in the Maldives at sunset — intentional luxury travel"
              }
              className="w-full h-full object-cover"
              width={1600}
              height={900}
            />
          </div>

          {/* TL;DR Box */}
          <div className="mb-12 p-6 md:p-8 gold-border rounded-lg bg-charcoal/40">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                {isEs ? "Resumen Rápido" : "TL;DR — Key Takeaways"}
              </span>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-none">
              {(isEs
                ? [
                    "El viaje de lujo intencional es una estrategia de salud mental respaldada por la ciencia.",
                    "La industria global del wellness travel supera los $830 mil millones (Global Wellness Institute).",
                    "Destinos como Maldivas y Riviera Maya combinan lujo con bienestar real.",
                    "El beneficio dura mucho más allá del viaje — si está bien planificado.",
                  ]
                : [
                    "Intentional luxury travel is a science-backed mental health strategy.",
                    "Global wellness tourism is now an $830B+ industry (Global Wellness Institute).",
                    "Destinations like the Maldives and Riviera Maya pair luxury with real wellness.",
                    "Benefits last long after you unpack — when the trip is planned right.",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Tu médico podría tener razón: tomarse un descanso real ya no es un capricho. El viaje de lujo intencional —el tipo que se planifica con propósito en lugar de reservar por impulso— se está convirtiendo en una de las inversiones más inteligentes que puedes hacer en tu salud mental este año."
                : "Your doctor might be right: taking a real break isn't indulgent anymore. Intentional luxury travel — the kind planned with purpose rather than booked on impulse — is becoming one of the smartest investments you can make in your mental health this year."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Según el "
                : "According to the "}
              <a
                href="https://globalwellnessinstitute.org/press-room/statistics-and-facts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
              >
                Global Wellness Institute
              </a>
              {isEs
                ? ", el turismo de bienestar supera los 830 mil millones de dólares anuales y crece más rápido que cualquier otro segmento de viajes. No es una moda — es un cambio de mentalidad."
                : ", wellness tourism now exceeds $830 billion annually and is growing faster than any other travel segment. It's not a fad — it's a mindset shift."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Qué es realmente el viaje de lujo intencional" : "What intentional luxury travel really is"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "El viaje de lujo intencional no se trata de hoteles caros. Se trata de diseñar una experiencia que restaure tu sistema nervioso: silencio, naturaleza, comida nutritiva, movimiento y descanso real. Cuando trabajamos en "
                : "Intentional luxury travel isn't about expensive hotels. It's about designing an experience that restores your nervous system: silence, nature, nourishing food, movement, and real rest. When we craft "}
              <Link to={localPath("/viajes-de-lujo-desde-puerto-rico")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "itinerarios a la medida" : "bespoke itineraries"}
              </Link>
              {isEs
                ? ", cada elección — el vuelo, el spa, el guía privado — refuerza ese objetivo."
                : ", every choice — the flight, the spa, the private guide — reinforces that goal."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Maldivas: el destino más subestimado de bienestar" : "The Maldives: the most underrated wellness destination"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Cuando piensas en Maldivas, piensas en lunas de miel. Pero los resorts de bienestar de Maldivas — pensemos en Joali Being o Six Senses Laamu — están redefiniendo el retiro de lujo: programas de sueño, inmersión en el océano, ayurveda, y silencio absoluto sobre el agua. Es uno de los pocos lugares en el mundo donde puedes dejar de mirar tu teléfono sin esfuerzo."
                : "When you think of the Maldives, you think honeymoons. But the Maldives' wellness resorts — think Joali Being or Six Senses Laamu — are redefining the luxury retreat: sleep programs, ocean immersion, ayurveda, and absolute silence over water. It's one of the few places on earth where you stop checking your phone without trying."}
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "Explora el destino completo en nuestra guía de " : "Explore the full destination in our "}
              <Link to={localPath("/destinations/maldives")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "Maldivas" : "Maldives guide"}
              </Link>
              .
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Riviera Maya: bienestar más cerca de casa" : "Riviera Maya: wellness closer to home"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Para clientes desde San Juan, "
                : "For clients flying from San Juan, "}
              <Link to={localPath("/destinations/mexico")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "México" : "Mexico's Riviera Maya"}
              </Link>
              {isEs
                ? " ofrece la opción más eficiente: misma zona horaria, vuelo directo, y propiedades como Chablé Yucatán o Maroma — A Belmond Hotel — que combinan cenotes sagrados, temazcal, y cocina maya consciente. Cuatro días aquí pueden tener el mismo impacto que dos semanas en otro lugar."
                : " offers the most efficient option: same time zone, direct flight, and properties like Chablé Yucatán or Maroma — A Belmond Hotel — that combine sacred cenotes, temazcal, and mindful Mayan cuisine. Four days here can deliver the same impact as two weeks elsewhere."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "La ciencia detrás del descanso real" : "The science behind real rest"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs ? "La investigación publicada en " : "Research published in "}
              <a
                href="https://www.cntraveler.com/story/the-science-of-wellness-travel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
              >
                Condé Nast Traveler
              </a>
              {isEs
                ? " y el trabajo de "
                : " and the work of "}
              <a
                href="https://visitsweden.com/what-to-do/nature-outdoors/nature/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
              >
                Visit Sweden
              </a>
              {isEs
                ? " sobre la inmersión en la naturaleza muestra que incluso 72 horas de desconexión intencional reducen el cortisol, mejoran el sueño y restauran la función cognitiva durante semanas."
                : " on nature immersion shows that even 72 hours of intentional disconnection lowers cortisol, improves sleep, and restores cognitive function for weeks afterward."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Por qué la planificación importa más que el destino" : "Why planning matters more than destination"}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? "Un retiro de bienestar mal planificado es solo un viaje cansado con yoga. Como "
                : "A poorly planned wellness retreat is just a tired trip with yoga. As a "}
              <Link to={localPath("/about")} className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
                {isEs ? "agencia boutique de viajes" : "boutique travel agency"}
              </Link>
              {isEs
                ? ", construimos cada itinerario alrededor de tu sistema nervioso, no solo de tu calendario."
                : ", we build every itinerary around your nervous system — not just your calendar."}
            </p>

            <p className="text-foreground text-lg leading-relaxed font-heading italic">
              {isEs
                ? "El mejor viaje de bienestar es el que sigue trabajando para ti mucho después de regresar a casa."
                : "The best wellness trip is the one that keeps working for you long after you come home."}
            </p>
          </div>

          {/* FAQ — AEO */}
          <section className="mt-16" aria-labelledby="wellness-faq-heading">
            <h2 id="wellness-faq-heading" className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="gold-border rounded-lg p-5 group">
                  <summary className="font-heading text-lg text-foreground cursor-pointer list-none flex justify-between items-center gap-4">
                    {f.q}
                    <span className="text-gold transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 text-center py-12 gold-border rounded-lg">

            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs ? "¿Listo para invertir en tu bienestar?" : "Ready to invest in your wellbeing?"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Reserva una consulta gratuita y diseñemos juntos un viaje de bienestar verdaderamente intencional."
                : "Book a free consultation and let's design a truly intentional wellness trip together."}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {isEs ? "Solicitar Consulta Gratuita" : "Book Free Consultation"}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default WellnessTravel;
