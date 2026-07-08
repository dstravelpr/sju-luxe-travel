import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/traveler-airport.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Servicios de Concierge de Viaje: Qué Son, Qué Incluyen y Por Qué Valen la Pena",
  description: "Guía completa de servicios de concierge de viaje: qué es un travel concierge, qué incluye (reservas VIP, upgrades, asistencia 24/7) y cómo acceder gratis con un asesor de lujo en Puerto Rico.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
  datePublished: "2026-05-29",
  inLanguage: "es-PR",
  url: "https://www.sjuluxetravel.com/blog/servicios-concierge-viaje",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un servicio de concierge de viaje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un servicio de concierge de viaje es un profesional que se encarga de planificar, coordinar y resolver cada detalle de tu viaje —desde el diseño del itinerario hasta la asistencia 24/7 mientras estás fuera. En vez de que tú corras detrás de reservas, vuelos y cambios de última hora, un concierge lo hace por ti con acceso a contactos y beneficios que no aparecen en las páginas públicas."
      }
    },
    {
      "@type": "Question",
      name: "¿Qué incluye un servicio de concierge de viaje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incluye diseño de itinerario a la medida, reservas VIP en hoteles y restaurantes con estrella Michelin, tours privados con guías locales, coordinación de visados y documentación, transferencias privadas y asistencia 24/7 en español e inglés durante el viaje. También cubre upgrades de habitación, amenidades de cortesía y re-booking inmediato si hay cancelaciones o cambios."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un travel concierge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En SJU Luxe Travel el servicio de concierge está incluido —no cobramos honorarios para itinerarios de lujo porque somos compensados directamente por nuestros hoteles y cruceros partners. Ofrecemos una consulta inicial gratuita para evaluar tu viaje, y solo en casos de itinerarios extremadamente complejos aplicamos un fee de planificación, siempre confirmado al inicio."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre un concierge y un agente de viajes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un agente de viajes tradicional se enfoca principalmente en reservar vuelos, hoteles y paquetes al mejor precio. Un concierge de viaje va mucho más allá: diseña la experiencia completa, negocia beneficios exclusivos, coordina cada detalle en tierra y te acompaña 24/7 durante el viaje. En la práctica, todo buen concierge también es agente de viajes, pero no todo agente de viajes ofrece servicio de concierge real."
      }
    }
  ]
};

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/servicios-concierge-viaje.jpg"
        title="Servicios de Concierge de Viaje — Qué Incluye y Cuándo Vale"
        description="Concierge de viaje desde Puerto Rico: qué cubre, qué no, cuánto cuesta y cuándo realmente vale la pena contratarlo."
        canonical="https://www.sjuluxetravel.com/blog/servicios-concierge-viaje"
        schemaJson={schemaJson}
      />
      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />{isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>
          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{isEs ? "Servicios" : "Services"}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">{isEs ? "Servicios de Concierge de Viaje: Qué Incluye y Cuándo Vale" : "Travel Concierge Services: What's Included & When It's Worth It"}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "29 de mayo de 2026" : "May 29, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "5 min de lectura" : "5 min read"}</span>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt={isEs ? "Servicios de concierge de viaje" : "Travel concierge services"} className="w-full h-full object-cover" />
          </div>
          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>{isEs ? "\"Servicio de concierge de viaje\" suena a lujo abstracto, pero significa algo muy concreto: alguien que se encarga de los detalles antes, durante y después de tu viaje. Esto es lo que realmente incluye un buen concierge desde Puerto Rico." : "\"Travel concierge\" sounds like abstract luxury, but it means something very concrete: someone who handles the details before, during and after your trip. Here's what a good concierge actually includes from Puerto Rico."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Antes del viaje" : "Before the trip"}</h2>
            <ul className="space-y-2 list-none">
              {(isEs ? ["Diseño del itinerario completo","Reservas en restaurantes con estrella Michelin (acceso real, no \"sin disponibilidad\")","Tours privados con guías locales pre-seleccionados","Coordinación de visados, seguros y documentación","Transferencias VIP, choferes y vehículos privados"] : ["Full itinerary design","Michelin-star restaurant reservations (real access, not \"unavailable\")","Private tours with pre-vetted local guides","Visa, insurance, documentation coordination","VIP transfers, drivers and private vehicles"]).map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Durante el viaje" : "During the trip"}</h2>
            <ul className="space-y-2 list-none">
              {(isEs ? ["Asistencia 24/7 en español e inglés","Cambios de última hora resueltos sin que tú llames","Detalles sorpresa: champagne en habitación, cena privada en la playa","Contacto directo con los gerentes de tus hoteles","Re-booking de vuelos cancelados antes de que tú te enteres"] : ["24/7 assistance in Spanish and English","Last-minute changes solved without you calling","Surprise touches: in-room champagne, private beach dinner","Direct line to your hotel managers","Re-booking cancelled flights before you find out"]).map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "¿Cuándo vale la pena?" : "When is it worth it?"}</h2>
            <p>{isEs ? "Vale cuando el viaje es lo suficientemente complejo (multi-destino, lunas de miel, aniversarios importantes, viajes de negocios de alto valor) o cuando simplemente no quieres dedicarle 20+ horas a planificarlo. Para fines de semana en Miami, no." : "Worth it when the trip is complex enough (multi-destination, honeymoons, major anniversaries, high-value business travel) or when you simply don't want to spend 20+ hours planning. For Miami weekends, no."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "¿Cuánto cuesta?" : "How much does it cost?"}</h2>
            <p>{isEs ? "En SJU Luxe Travel no cobramos honorarios de concierge para itinerarios de lujo — somos compensados por nuestros hoteles y cruceros partners. Solo para itinerarios muy complejos cobramos un fee de planificación, siempre confirmado al inicio." : "At SJU Luxe Travel we don't charge concierge fees for luxury itineraries — we're compensated by our hotel and cruise partners. Only for highly complex itineraries do we charge a planning fee, always confirmed up front."}</p>

            <p>{isEs ? "Si estás evaluando un viaje complejo, agenda una " : "If you're evaluating a complex trip, book a "}<Link to={localPath("/contact")} className="text-gold hover:text-gold-light underline">{isEs ? "consulta gratis con nuestro concierge de viajes" : "free consultation with our travel concierge"}</Link>{isEs ? " o explora nuestros " : " or explore our "}<Link to={localPath("/viajes-de-lujo-desde-puerto-rico")} className="text-gold hover:text-gold-light underline">{isEs ? "viajes de lujo a medida desde Puerto Rico" : "bespoke luxury trips from Puerto Rico"}</Link>{isEs ? "." : "."}</p>
          </div>
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Consulta tu Caso" : "Discuss Your Trip"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{isEs ? "30 minutos gratis para evaluar si el concierge tiene sentido para tu viaje." : "Complimentary 30 minutes to evaluate if concierge makes sense for your trip."}</p>
            <Link to={localPath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">{isEs ? "Agendar Consulta" : "Book Consultation"}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
