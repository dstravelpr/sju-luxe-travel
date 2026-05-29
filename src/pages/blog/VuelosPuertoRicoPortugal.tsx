import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/destination-portugal.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Vuelos de Puerto Rico a Portugal: Mejores Rutas y Aerolíneas",
  description: "Cómo volar de San Juan a Lisboa y Porto: rutas con menos escalas, mejores aerolíneas y consejos para clase ejecutiva.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
  datePublished: "2026-05-29",
  inLanguage: "es-PR",
  url: "https://www.sjuluxetravel.com/blog/vuelos-puerto-rico-portugal",
};

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        title="Vuelos de Puerto Rico a Portugal — Mejores Rutas 2026"
        description="Guía completa de vuelos SJU a Lisboa y Porto: rutas con menos escalas, mejores aerolíneas, consejos para business class y honeymoons."
        canonical="https://www.sjuluxetravel.com/blog/vuelos-puerto-rico-portugal"
        schemaJson={schemaJson}
      />
      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />{isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>
          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{isEs ? "Destinos" : "Destinations"}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">{isEs ? "Vuelos de Puerto Rico a Portugal: Las Mejores Rutas" : "Flights from Puerto Rico to Portugal: Best Routes"}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "29 de mayo de 2026" : "May 29, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "5 min de lectura" : "5 min read"}</span>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt={isEs ? "Vuelos a Portugal desde Puerto Rico" : "Flights to Portugal from Puerto Rico"} className="w-full h-full object-cover" />
          </div>
          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>{isEs ? "No hay vuelo directo de San Juan (SJU) a Portugal — pero las conexiones correctas hacen el viaje mucho más cómodo. Aquí las opciones que recomendamos según presupuesto y comodidad." : "There's no nonstop from San Juan (SJU) to Portugal — but the right connection makes the trip far easier. Here are the options we recommend by budget and comfort."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Ruta 1: SJU → MIA → LIS (la más rápida)" : "Route 1: SJU → MIA → LIS (fastest)"}</h2>
            <p>{isEs ? "American Airlines hasta Miami, luego TAP Air Portugal o American directo a Lisboa. Total ~12h. Mejor opción en business class — TAP tiene una de las mejores cabinas premium para el Atlántico." : "American Airlines to Miami, then TAP Air Portugal or American direct to Lisbon. Total ~12h. Best in business class — TAP has one of the best Atlantic premium cabins."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Ruta 2: SJU → JFK → LIS" : "Route 2: SJU → JFK → LIS"}</h2>
            <p>{isEs ? "JetBlue o Delta a Nueva York, luego TAP, Delta o United a Lisboa. Útil si combinas con días en NYC. Más opciones de horarios." : "JetBlue or Delta to New York, then TAP, Delta or United to Lisbon. Useful if you combine with NYC days. More schedule options."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Ruta 3: SJU → MAD → LIS (premium)" : "Route 3: SJU → MAD → LIS (premium)"}</h2>
            <p>{isEs ? "Iberia desde Miami con Madrid como hub. Excelente para combinar Portugal con España en el mismo viaje. Su business class \"Next\" es muy recomendable." : "Iberia from Miami via Madrid. Excellent for combining Portugal with Spain in the same trip. Their \"Next\" business class is highly recommended."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Consejos prácticos" : "Practical tips"}</h2>
            <ul className="space-y-2 list-none">
              {(isEs ? ["Reserva 3–6 meses antes para mejores tarifas business","Sale más barato con stopover en Lisboa (TAP lo permite gratis)","Mayo, junio y septiembre = clima perfecto + menos turistas","Considera volar a Porto en lugar de Lisboa si tu plan es el Douro"] : ["Book 3–6 months ahead for best business fares","Cheaper with a TAP Lisbon stopover (they allow it free)","May, June, September = perfect weather + fewer tourists","Consider flying to Porto if your plan is Douro Valley"]).map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>
          </div>
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Planifica Tu Viaje a Portugal" : "Plan Your Portugal Trip"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{isEs ? "Combinamos vuelos, hoteles boutique y experiencias privadas." : "We combine flights, boutique hotels and private experiences."}</p>
            <Link to={localPath("/destinations/portugal")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">{isEs ? "Ver Portugal" : "Explore Portugal"}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
