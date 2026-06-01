import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/honeymoon/maldives.png";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Mejores Destinos de Luna de Miel 2026 desde Puerto Rico",
  description: "Los 7 mejores destinos de luna de miel 2026 desde San Juan: Maldivas, Bora Bora, Amalfi, Santorini, Portugal. Itinerarios y vuelos por asesor de lujo.",
  author: { "@type": "Person", name: "Daniel Santiago Díaz" },
  publisher: { "@type": "Organization", name: "SJU Luxe Travel", url: "https://www.sjuluxetravel.com" },
  datePublished: "2026-06-01",
  inLanguage: "es-PR",
  image: "https://www.sjuluxetravel.com/og/honeymoon-2026.jpg",
  keywords: [
    "mejores destinos luna de miel 2026",
    "honeymoon destinations 2026",
    "luna de miel desde Puerto Rico",
    "paquetes luna de miel",
    "luna de miel Maldivas",
    "luna de miel Bora Bora",
    "luna de miel todo incluido",
  ],
  url: "https://www.sjuluxetravel.com/blog/luna-de-miel-puerto-rico-2026",
};

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        title="Mejores Destinos de Luna de Miel 2026 desde Puerto Rico"
        description="Los 7 mejores destinos de luna de miel 2026 desde San Juan: Maldivas, Bora Bora, Amalfi, Santorini, Portugal. Itinerarios y vuelos por asesor de lujo."
        canonical="https://www.sjuluxetravel.com/blog/luna-de-miel-puerto-rico-2026"
        schemaJson={schemaJson}
      />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to={localPath("/blog")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm tracking-wide mb-8">
            <ArrowLeft size={16} />{isEs ? "Volver al Blog" : "Back to Blog"}
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
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{isEs ? "29 de mayo de 2026" : "May 29, 2026"}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" />{isEs ? "8 min de lectura" : "8 min read"}</span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img src={heroImg} alt={isEs ? "Luna de miel de lujo desde Puerto Rico" : "Luxury honeymoon from Puerto Rico"} className="w-full h-full object-cover" />
          </div>

          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>{isEs
              ? "Planificar una luna de miel desde Puerto Rico tiene su propio conjunto de consideraciones: vuelos con escalas estratégicas, husos horarios, requisitos de pasaporte y la temporada perfecta. En SJU Luxe Travel hemos coordinado decenas de lunas de miel saliendo desde SJU, y estos son los 7 destinos que más solicitan las parejas en 2026."
              : "Planning a honeymoon from Puerto Rico comes with its own considerations: strategic connecting flights, time zones, passport requirements, and the perfect season. At SJU Luxe Travel we've coordinated dozens of honeymoons departing SJU — these are the 7 destinations most requested by couples in 2026."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">1. {isEs ? "Maldivas — el clásico definitivo" : "Maldives — the definitive classic"}</h2>
            <p>{isEs ? "Villas sobre el agua, snorkel con rayas manta y la privacidad absoluta que merece esta semana. Vuelo recomendado: SJU → MIA → DOH → MLE en Qatar Airways. 7–10 noches ideal." : "Overwater villas, snorkeling with manta rays and absolute privacy. Recommended routing: SJU → MIA → DOH → MLE on Qatar Airways. 7–10 nights ideal."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">2. {isEs ? "Bora Bora, Polinesia Francesa" : "Bora Bora, French Polynesia"}</h2>
            <p>{isEs ? "Para quienes sueñan con el Pacífico Sur. Bungalows del Four Seasons o el InterContinental Thalasso. Combina con Moorea para 10 noches mágicas." : "For those dreaming of the South Pacific. Four Seasons or InterContinental Thalasso bungalows. Combine with Moorea for 10 magical nights."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">3. {isEs ? "Santorini + Mykonos" : "Santorini + Mykonos"}</h2>
            <p>{isEs ? "Atardeceres sobre el Egeo y cuevas convertidas en suites boutique. Mejor combinar dos islas en 8–10 noches." : "Sunsets over the Aegean and cave suites. Best combined as two islands across 8–10 nights."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">4. {isEs ? "Costa Amalfitana, Italia" : "Amalfi Coast, Italy"}</h2>
            <p>{isEs ? "Positano, Ravello y Capri. Yates privados, cenas con vista al Mar Tirreno, y la mejor pasta de tu vida. Junio o septiembre — evita agosto." : "Positano, Ravello and Capri. Private yachts, dinners over the Tyrrhenian, and the best pasta of your life. June or September — avoid August."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">5. {isEs ? "Portugal — Lisboa, Douro y Algarve" : "Portugal — Lisbon, Douro & Algarve"}</h2>
            <p>{isEs ? "El secreto mejor guardado de Europa para parejas. Palacios convertidos en hoteles boutique, vinos del Douro y playas privadas del Algarve. Vuelo directo desde SJU vía MIA/JFK." : "Europe's best-kept secret for couples. Palace hotels, Douro wines and private Algarve beaches. Direct routing from SJU via MIA/JFK."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">6. {isEs ? "Toscana + Costa Esmeralda (Cerdeña)" : "Tuscany + Costa Smeralda (Sardinia)"}</h2>
            <p>{isEs ? "Villas entre viñedos, trufa blanca, y luego playas turquesas en Cerdeña. Combinación perfecta de cultura y mar." : "Villas among vineyards, white truffle, then turquoise Sardinian beaches. The perfect culture + sea combo."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">7. {isEs ? "Sudáfrica + Mauricio" : "South Africa + Mauritius"}</h2>
            <p>{isEs ? "Safari de lujo en Sabi Sand seguido de una semana en Mauricio. Para la pareja aventurera que quiere algo verdaderamente único en 2026." : "Luxury safari at Sabi Sand followed by a week in Mauritius. For the adventurous couple wanting something genuinely unique in 2026."}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{isEs ? "¿Cuándo empezar a planificar?" : "When should you start planning?"}</h2>
            <p>{isEs ? "Recomendamos comenzar 8–12 meses antes para Maldivas, Bora Bora y safari. Para Europa, 6 meses es suficiente. Las mejores villas se reservan con un año de anticipación." : "We recommend starting 8–12 months out for Maldives, Bora Bora and safari. For Europe, 6 months is enough. The best villas book a year ahead."}</p>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">{isEs ? "Planifica Tu Luna de Miel" : "Plan Your Honeymoon"}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{isEs ? "Consulta gratuita para diseñar tu itinerario perfecto desde Puerto Rico." : "Complimentary consultation to design your perfect itinerary from Puerto Rico."}</p>
            <Link to={localPath("/luna-de-miel-de-lujo")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">{isEs ? "Comenzar" : "Start Planning"}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
