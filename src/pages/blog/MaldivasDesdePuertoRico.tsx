import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/destination-maldives.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Maldivas desde Puerto Rico: Guía Completa de Ruta, Costo y Resorts",
  description: "Cómo llegar a Maldivas desde San Juan, cuánto cuesta un viaje de lujo y los mejores resorts según tu estilo.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
  datePublished: "2026-05-29",
  inLanguage: "es-PR",
  url: "https://www.sjuluxetravel.com/blog/maldivas-desde-puerto-rico-guia",
};

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/maldivas-desde-puerto-rico.jpg"
        title="Maldivas desde Puerto Rico: Ruta, Costo y Mejores Resorts"
        description="Guía completa para planificar Maldivas desde San Juan: vuelos, presupuesto realista, mejor temporada y resorts top según tu estilo."
        canonical="https://www.sjuluxetravel.com/blog/maldivas-desde-puerto-rico-guia"
        schemaJson={schemaJson}
      />
      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />{isEs ? "Volver al Blog" : "Back to Blog"}
          </Link>
          <div className="mb-10">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{isEs ? "Destinos" : "Destinations"}</span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">{isEs ? "Maldivas desde Puerto Rico: Guía Completa 2026" : "Maldives from Puerto Rico: Complete 2026 Guide"}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5"><User size={12} className="text-gold" />Daniel Santiago Díaz</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "29 de mayo de 2026" : "May 29, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "9 min de lectura" : "9 min read"}</span>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt={isEs ? "Maldivas desde Puerto Rico" : "Maldives from Puerto Rico"} className="w-full h-full object-cover" />
          </div>
          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>{isEs ? "Maldivas es el viaje soñado de muchas parejas en Puerto Rico — pero también el que más dudas genera por el costo y la distancia. Esta es la guía honesta que damos a nuestros clientes." : "Maldives is the dream trip for many Puerto Rico couples — and the one that generates the most questions about cost and distance. Here's the honest guide we give our clients."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Cómo llegar (la mejor ruta)" : "How to get there (best routing)"}</h2>
            <p>{isEs ? "Recomendada: SJU → MIA → DOH → MLE en Qatar Airways. ~22h totales. Alternativa: SJU → JFK → DXB → MLE con Emirates. Ambas tienen la mejor business class del mundo y vale la pena en este viaje." : "Recommended: SJU → MIA → DOH → MLE on Qatar Airways. ~22h total. Alternative: SJU → JFK → DXB → MLE with Emirates. Both have the world's top business class — worth it for this trip."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Mejor temporada" : "Best season"}</h2>
            <p>{isEs ? "Noviembre a abril (estación seca). Diciembre y enero son los más caros. Mayo, junio y septiembre dan los mejores precios con muy buen clima la mayoría de los días." : "November to April (dry season). December and January are the priciest. May, June and September offer best pricing with great weather most days."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Presupuesto realista (7 noches, 2 personas)" : "Realistic budget (7 nights, 2 people)"}</h2>
            <ul className="space-y-2 list-none">
              {(isEs ? ["Vuelos business class: $9,000–14,000","Resort 5★ todo incluido: $7,000–15,000","Resort ultra-lujo (Soneva, Cheval Blanc, One&Only): $20,000–40,000+","Traslado en hidroavión: $600–900 por persona","Total típico: $20,000–35,000"] : ["Business flights: $9,000–14,000","5★ all-inclusive resort: $7,000–15,000","Ultra-luxury resort (Soneva, Cheval Blanc, One&Only): $20,000–40,000+","Seaplane transfer: $600–900 per person","Typical total: $20,000–35,000"]).map((it, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{it}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "Resorts según tu estilo" : "Resorts by style"}</h2>
            <p><strong className="text-foreground">{isEs ? "Romántico clásico:" : "Classic romantic:"}</strong> Conrad Rangali, Hurawalhi, You&Me Maldives.</p>
            <p><strong className="text-foreground">{isEs ? "Familiar de lujo:" : "Luxury family:"}</strong> Soneva Fushi, Four Seasons Landaa Giraavaru.</p>
            <p><strong className="text-foreground">{isEs ? "Ultra-lujo sin niños:" : "Adults-only ultra-luxe:"}</strong> Cheval Blanc Randheli, One&Only Reethi Rah.</p>
            <p><strong className="text-foreground">{isEs ? "Mejor valor:" : "Best value:"}</strong> Ayada Maldives, Nala Maldives.</p>
          </div>
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Cotiza Tu Maldivas" : "Quote Your Maldives Trip"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{isEs ? "Te enviamos 3 opciones de resort según tu presupuesto y estilo." : "We'll send 3 resort options matched to your budget and style."}</p>
            <Link to={localPath("/destinations/maldives")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">{isEs ? "Ver Maldivas" : "Explore Maldives"}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
