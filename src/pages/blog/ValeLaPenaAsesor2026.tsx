import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/travel-agent-desk.jpg";

const schemaJson = buildGraph({
  "@type": "BlogPosting",
  headline: "¿Vale la Pena un Agente de Viaje en 2026?",
  description: "Análisis honesto desde Puerto Rico: cuándo un agente de viaje te conviene en 2026 y cuándo es mejor reservar tú mismo.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: ORG_REF,
  datePublished: "2026-05-29",
  inLanguage: "es-PR",
  url: "https://www.sjuluxetravel.com/blog/vale-la-pena-asesor-viajes-2026",
});

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/vale-la-pena-asesor-2026.jpg"
        title="¿Vale la Pena un Agente de Viaje en 2026?"
        description="Cuándo vale la pena contratar un agente de viaje en 2026 y cuándo no — análisis honesto desde Puerto Rico por SJU Luxe Travel."
        canonical="https://www.sjuluxetravel.com/blog/vale-la-pena-asesor-viajes-2026"
        schemaJson={schemaJson}
      />
      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />{isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>
          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{isEs ? "Consejos" : "Travel Tips"}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">{isEs ? "¿Vale la Pena un Agente de Viaje en 2026?" : "Is a Luxury Travel Agent Worth It in 2026?"}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "29 de mayo de 2026" : "May 29, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "6 min de lectura" : "6 min read"}</span>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt={isEs ? "Consultor de viajes de lujo" : "Luxury travel agent"} className="w-full h-full object-cover" />
          </div>
          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>{isEs ? "En 2026, con IA reservando vuelos y Booking.com en cada bolsillo, la pregunta es legítima: ¿realmente necesitas un consultor de viajes? La respuesta honesta es: depende del viaje." : "In 2026, with AI booking flights and Booking.com in every pocket, the question is fair: do you really need a travel agent? The honest answer: it depends on the trip."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Cuándo NO necesitas un agente de viaje" : "When you DON'T need one"}</h2>
            <p>{isEs ? "Un fin de semana en Miami, dos noches en Nueva York, una escapada a República Dominicana — reserva tú mismo. La complejidad es baja, el riesgo financiero también, y las plataformas funcionan bien." : "A weekend in Miami, two nights in NYC, a quick Dominican Republic escape — book it yourself. Low complexity, low financial risk, the platforms work fine."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Cuándo SÍ vale cada peso" : "When it IS worth every penny"}</h2>
            <ul className="space-y-2 list-none">
              {(isEs ? ["Luna de miel o aniversario importante","Cualquier viaje a Maldivas, Polinesia, África o Asia","Itinerario multi-destino (3+ países)","Crucero de lujo o fluvial","Viaje familiar con 6+ personas","Cuando el precio total supera $10,000"] : ["Honeymoon or major anniversary","Any trip to Maldives, Polynesia, Africa or Asia","Multi-destination itinerary (3+ countries)","Luxury or river cruise","Family trip with 6+ people","Total budget over $10,000"]).map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Qué obtienes que la web no ofrece" : "What you get that the web doesn't"}</h2>
            <p>{isEs ? "Beneficios de programas como Virtuoso, Four Seasons Preferred Partner, Belmond Bellini Club o Rosewood Elite — créditos de resort de $100–300, desayuno gratis, upgrades cuando hay disponibilidad, check-in temprano y check-out tardío. Mismo precio que Expedia, valor agregado real." : "Perks from programs like Virtuoso, Four Seasons Preferred Partner, Belmond Bellini Club or Rosewood Elite — $100–300 resort credits, free breakfast, upgrades when available, early check-in, late check-out. Same price as Expedia, real added value."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "El factor humano" : "The human factor"}</h2>
            <p>{isEs ? "Cuando tu vuelo se cancela a las 2 AM en Frankfurt, ¿prefieres esperar 90 minutos en el chat de Expedia o que tu consultor ya esté reaccionando? Eso es lo que en realidad pagas." : "When your flight cancels at 2 AM in Frankfurt, do you prefer waiting 90 minutes in the Expedia chat — or your agent already on it? That's what you're really paying for."}</p>
          </div>
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Consulta Gratuita" : "Complimentary Consultation"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{isEs ? "Si tu viaje encaja, conversemos. Si no, te lo decimos." : "If your trip fits, let's talk. If not, we'll tell you."}</p>
            <Link to={localPath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">{isEs ? "Contactar" : "Contact"}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
