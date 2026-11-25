import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { SearchAnswers } from "@/components/SearchAnswers";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/traveler-airport.jpg";

const planningFeeAnswers = {
  es: [
    { question: "¿SJU Luxe Travel cobra un cargo por planificación de viajes?", answer: "Para saber si tu viaje requiere un cargo por planificación, consulta con Daniel Santiago Díaz, agente de viaje de SJU Luxe Travel en Puerto Rico, antes de solicitar el desarrollo de tu itinerario. Confirma si aplica un cargo, su importe y los servicios que cubre antes de autorizar trabajo con costo. No asumas que la planificación es gratuita ni que todos los viajes tienen el mismo cargo." },
    { question: "¿Qué es un cargo por planificación y qué puede afectar su costo?", answer: "Un cargo por planificación, cuando aplica, remunera el trabajo de investigación, diseño del itinerario y coordinación acordado con el agente de viaje. Es distinto del costo de vuelos, hoteles, cruceros y excursiones. El alcance del trabajo puede variar según los destinos, la duración, la cantidad de viajeros, la anticipación y las revisiones solicitadas; confirma cómo se evalúa tu caso." },
    { question: "¿Qué debo confirmar antes de pagar por la planificación de mi viaje?", answer: "Solicita por escrito el importe, los servicios incluidos, la cantidad de propuestas o revisiones, el momento del pago y las condiciones de cambios y reembolsos. Pregunta si el cargo se acredita al costo del viaje o se paga por separado. No des por hecho que incluye cargos de proveedores, cancelaciones o asistencia fuera del alcance acordado." },
  ],
  en: [
    { question: "Does SJU Luxe Travel charge a travel planning fee?", answer: "To find out whether your trip requires a planning fee, contact Daniel Santiago Díaz, a travel agent at SJU Luxe Travel in Puerto Rico, before requesting itinerary development. Confirm whether a fee applies, its amount and the services it covers before authorizing paid work. Do not assume planning is free or that every trip carries the same fee." },
    { question: "What is a planning fee, and what can affect its cost?", answer: "A planning fee, when applicable, pays for the research, itinerary design and coordination agreed with your travel agent. It is separate from the cost of flights, hotels, cruises and excursions. The scope of work can vary with destinations, trip length, traveler count, lead time and requested revisions; confirm how your trip is assessed." },
    { question: "What should I confirm before paying a travel planning fee?", answer: "Request the amount, included services, number of proposals or revisions, payment timing, and change and refund conditions in writing. Ask whether the fee is credited toward your trip or paid separately. Do not assume it covers supplier charges, cancellations or assistance beyond the agreed scope." },
  ],
};

const generalFaqs = {
  es: [
    { question: "¿Qué es un servicio de concierge de viaje?", answer: "Es apoyo personalizado para planificar y coordinar los detalles de un viaje. El alcance, los costos y la disponibilidad de asistencia deben confirmarse con el agente de viaje antes de contratar el servicio." },
    { question: "¿Qué incluye un servicio de concierge de viaje?", answer: "Puede incluir diseño del itinerario, reservas, coordinación de traslados y recomendaciones. Los servicios y beneficios concretos dependen de la propuesta, el proveedor y la reserva; no todos los servicios están incluidos en todos los viajes." },
    { question: "¿Cuál es la diferencia entre un concierge y un agente de viaje?", answer: "Un agente de viaje ayuda a comparar y reservar opciones. La coordinación concierge puede añadir apoyo con el itinerario y otros detalles acordados. Los términos pueden solaparse; compara los servicios incluidos en lugar de asumir que el título garantiza un nivel de asistencia." },
  ],
  en: [
    { question: "What is a travel concierge service?", answer: "It is personalized support with planning and coordinating trip details. Confirm the scope, costs and availability of assistance with your travel agent before engaging the service." },
    { question: "What does a travel concierge service include?", answer: "It may include itinerary design, bookings, transfer coordination and recommendations. Specific services and benefits depend on the proposal, provider and booking; not every service is included in every trip." },
    { question: "What is the difference between a concierge and a travel agent?", answer: "A travel agent helps compare and book options. Concierge coordination may add support with the itinerary and other agreed details. The terms can overlap; compare included services rather than assuming a title guarantees a level of assistance." },
  ],
};

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";
  const locale = isEs ? "es" : "en";
  const feeAnswers = planningFeeAnswers[locale];
  const faqs = [...generalFaqs[locale], ...feeAnswers];
  const description = isEs
    ? "Qué es un servicio de concierge y qué significa en viajes: una persona que planifica, reserva y coordina tu viaje. Ejemplos y qué incluye desde Puerto Rico."
    : "A travel concierge plans, books and manages your trip for you: flights, hotels, tours and support while you travel. See what's included and what it costs.";
  const headline = isEs
    ? "¿Qué es un Servicio de Concierge? Significado y Qué Incluye en tus Viajes"
    : "What Does a Travel Concierge Do? Services, What's Included & Costs";
  const schemaJson = buildGraph({
    "@type": "BlogPosting",
    headline,
    description,
    author: AUTHOR,
    publisher: ORG_REF,
    datePublished: "2026-05-29",
    dateModified: "2026-11-25",
    inLanguage: isEs ? "es-PR" : "en",
    url: `https://www.sjuluxetravel.com${isEs ? "/es" : ""}/blog/servicios-concierge-viaje`,
  });
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/servicios-concierge-viaje.jpg"
        title="What Does a Travel Concierge Do? | SJU Luxe Travel"
        titleEs="¿Qué es un Servicio de Concierge? Significado | SJU Luxe"
        descriptionEs="Qué es un servicio de concierge y qué significa en viajes: una persona que planifica, reserva y coordina tu viaje. Ejemplos y qué incluye desde Puerto Rico."
        emitHreflang
        description="A travel concierge plans, books and manages your trip for you: flights, hotels, tours and support while you travel. See what's included and what it costs."
        canonical="https://www.sjuluxetravel.com/blog/servicios-concierge-viaje"
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          {
            name: "¿Qué es un Servicio de Concierge? Significado y Qué Incluye en tus Viajes",
            url: "https://www.sjuluxetravel.com/blog/servicios-concierge-viaje",
          },
        ]}
        schemaJson={schemaJson}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              {isEs ? "Servicios" : "Services"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "¿Qué es un Servicio de Concierge? Significado y Qué Incluye en tus Viajes"
                : "What Does a Travel Concierge Do? Services, What's Included & Costs"}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <Link
                to={localPath("/about")}
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <User size={12} className="text-gold" />
                Daniel Santiago Díaz
                <span className="text-muted-foreground/70">
                  {" "}
                  — {isEs ? "Agente de viajes personalizados" : "Travel Agent"}
                </span>
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-gold" />
                {isEs ? "29 de mayo de 2026" : "May 29, 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-gold" />
                {isEs ? "5 min de lectura" : "5 min read"}
              </span>
            </div>
            <p className="text-muted-foreground/70 text-xs mt-3 italic">
              {isEs
                ? "Última actualización: 25 de noviembre de 2026"
                : "Last updated: November 25, 2026"}
            </p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img
              src={heroImg}
              alt={
                isEs
                  ? "Servicios de concierge de viaje"
                  : "Travel concierge services"
              }
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>
              {isEs
                ? '"Servicio de concierge de viaje" suena abstracto, pero significa algo muy concreto: alguien que se encarga de los detalles antes, durante y después de tu viaje. Esto es lo que realmente incluye un buen concierge desde Puerto Rico.'
                : '"Travel concierge" sounds abstract, but it means something very concrete: someone who handles the details before, during and after your trip. Here\'s what a good concierge actually includes from Puerto Rico.'}
            </p>

            <div className="gold-border rounded-lg p-6 bg-card">
              <h2 className="font-heading text-2xl text-foreground mb-3">{isEs ? "¿Qué es un servicio de concierge?" : "What does a travel concierge do?"}</h2>
              <p>{isEs ? "Un servicio de concierge es atención personalizada: una persona se encarga de los detalles por ti. En viajes, significa que un agente de viaje planifica tu itinerario, compara y reserva vuelos, hoteles o cruceros, coordina traslados y te ayuda con cambios antes y durante el viaje." : "A travel concierge plans and manages your trip from start to finish. They compare flights and hotels, book tours and transfers, handle special requests like anniversaries or dietary needs, and stay on call while you travel. If something changes, like a delayed flight or a closed restaurant, your agent fixes it so you don't have to."}</p>
              <p className="mt-3">{isEs ? "Ejemplo: en vez de buscar tú solo vuelos, hotel y excursiones para tu luna de miel, le das tus fechas y presupuesto a tu agente, y recibes opciones listas para reservar." : "Example: instead of searching flights, hotels and tours for your honeymoon on your own, you share your dates and budget with your agent and receive options ready to book."}</p>
            </div>

            <div className="border-y border-border py-6">
              <h2 className="font-heading text-2xl text-foreground mb-3">{isEs ? "¿Qué necesitas para tu viaje?" : "What support does your trip need?"}</h2>
              <p>{isEs ? "Un agente de viaje ayuda a comparar y reservar opciones. La coordinación concierge añade apoyo con el itinerario, traslados y otros detalles acordados. Confirma qué servicios incluye tu propuesta, sus costos y cómo contactar al equipo durante el viaje; los beneficios dependen del proveedor y la reserva." : "A travel agent helps compare and book options. Concierge coordination adds support with the itinerary, transfers and other agreed details. Confirm the services, fees and contact arrangements in your proposal; benefits depend on the provider and booking."}</p>
              <Link to={localPath("/contact")} className="inline-flex items-center gap-2 text-gold underline mt-4">{isEs ? "Consultar mi viaje y presupuesto" : "Discuss my trip and budget"}</Link>
            </div>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Antes del viaje" : "Before the trip"}
            </h2>
            <ul className="space-y-2 list-none">
              {(isEs
                ? [
                    "Diseño del itinerario completo",
                    'Reservas en restaurantes con estrella Michelin (acceso real, no "sin disponibilidad")',
                    "Tours privados con guías locales pre-seleccionados",
                    "Coordinación de visados, seguros y documentación",
                    "Transferencias VIP, choferes y vehículos privados",
                  ]
                : [
                    "Full itinerary design",
                    'Michelin-star restaurant reservations (real access, not "unavailable")',
                    "Private tours with pre-vetted local guides",
                    "Visa, insurance, documentation coordination",
                    "VIP transfers, drivers and private vehicles",
                  ]
              ).map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {it}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "Durante el viaje" : "During the trip"}
            </h2>
            <ul className="space-y-2 list-none">
              {(isEs
                ? [
                    "Asistencia 24/7 en español e inglés",
                    "Cambios de última hora resueltos sin que tú llames",
                    "Detalles sorpresa: champagne en habitación, cena privada en la playa",
                    "Contacto directo con los gerentes de tus hoteles",
                    "Re-booking de vuelos cancelados antes de que tú te enteres",
                  ]
                : [
                    "24/7 assistance in Spanish and English",
                    "Last-minute changes solved without you calling",
                    "Surprise touches: in-room champagne, private beach dinner",
                    "Direct line to your hotel managers",
                    "Re-booking cancelled flights before you find out",
                  ]
              ).map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {it}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs ? "¿Cuándo vale la pena?" : "When is it worth it?"}
            </h2>
            <p>
              {isEs
                ? "Vale cuando el viaje es lo suficientemente complejo (multi-destino, lunas de miel, aniversarios importantes, viajes de negocios de alto valor) o cuando simplemente no quieres dedicarle 20+ horas a planificarlo. Para fines de semana en Miami, no."
                : "Worth it when the trip is complex enough (multi-destination, honeymoons, major anniversaries, high-value business travel) or when you simply don't want to spend 20+ hours planning. For Miami weekends, no."}
            </p>

            <section aria-labelledby="planning-fee-heading" className="border-y border-border py-6">
              <h2 id="planning-fee-heading" className="font-heading text-2xl text-foreground mb-3">
                {feeAnswers[0].question}
              </h2>
              <p>{feeAnswers[0].answer}</p>
              {feeAnswers.slice(1).map(({ question, answer }) => (
                <div key={question} className="mt-6">
                  <h3 className="font-heading text-xl text-foreground mb-2">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
              <Link to={localPath("/contact")} className="inline-flex text-gold underline mt-4">
                {isEs ? "Consultar el alcance y los cargos de mi viaje" : "Ask about my trip’s planning scope and fees"}
              </Link>
            </section>

            <p>
              {isEs
                ? "Si estás evaluando un viaje complejo, agenda una "
                : "If you're evaluating a complex trip, book a "}
              <Link
                to={localPath("/contact")}
                className="text-gold hover:text-gold-light underline"
              >
                {isEs
                  ? "consulta con nuestro agente de viaje"
                  : "Consultation with our travel agent"}
              </Link>
              {isEs ? " o explora nuestros " : " or explore our "}
              <Link
                to={localPath("/viajes-de-lujo-desde-puerto-rico")}
                className="text-gold hover:text-gold-light underline"
              >
                {isEs
                  ? "viajes personalizados desde Puerto Rico"
                  : "Personalized trips from Puerto Rico"}
              </Link>
              {isEs ? "." : "."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-12">
              {isEs ? "Preguntas frecuentes sobre servicios de concierge de viaje" : "Travel concierge frequently asked questions"}
            </h2>
            <div className="space-y-6">
              {generalFaqs[locale].map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-heading text-lg text-foreground mb-2">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </div>
          <p
            data-cta="contextual-service-cta"
            className="mt-12 mb-4 text-center text-muted-foreground text-base leading-relaxed"
          >
            {isEs
              ? "¿Listo para viajar con servicio concierge real? "
              : "Ready to travel with real concierge service? "}
            <Link
              to={localPath("/viajes-de-lujo-desde-puerto-rico")}
              className="text-gold hover:text-gold-light underline font-semibold"
            >
              {isEs
                ? "Explora nuestros servicios de viajes personalizados →"
                : "Explore our personalized travel services →"}
            </Link>
          </p>
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs ? "Consulta tu Caso" : "Discuss Your Trip"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Comparte tus fechas, destinos y presupuesto para consultar los servicios y cualquier cargo aplicable."
                : "Share your dates, destinations and budget to discuss services and any applicable planning fee."}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {isEs ? "Agendar Consulta" : "Book Consultation"}
            </Link>
          </div>
        </div>
      <SearchAnswers topic="concierge" />
      </article>
    </Layout>
  );
};

export default Post;
