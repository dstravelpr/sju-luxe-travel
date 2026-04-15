import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import mexicoImg from "@/assets/destination-mexico.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Mexico",
  description: "Luxury vacation packages to Mexico, planned from San Juan Puerto Rico by SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca & more.",
  touristType: "Luxury travelers",
  url: "https://www.sjuluxetravel.com/destinations/mexico",
};

const Mexico = () => {
  const { t } = useLanguage();
  const d = t.destinations.mexico;

  return (
    <Layout>
      <SEOHead
        title="Viajes de Lujo a México desde Puerto Rico | SJU Luxe Travel"
        description="Desde Tulum hasta la Ciudad de México — itinerarios de lujo personalizados para viajeros de Puerto Rico. Resorts boutique, cultura y gastronomía de clase mundial."
        canonical="https://www.sjuluxetravel.com/destinations/mexico"
        schemaJson={schemaJson}
      />

      <section className="relative pt-24">
        <div className="aspect-[21/9] max-h-[480px] overflow-hidden">
          <img src={mexicoImg} alt="Luxury travel to Mexico — Riviera Maya, Tulum & Oaxaca curated by SJU Luxe Travel" className="w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-6">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{d.label}</span>
            <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-2">{d.title}</h1>
            <p className="text-muted-foreground text-sm mt-2">{d.curatedBy} <span className="text-gold">SJU Luxe Travel</span></p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-wrap gap-6 text-muted-foreground text-xs mb-10">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> {d.locationLabel}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" /> {d.duration}</span>
            <span className="flex items-center gap-1.5"><Users size={14} className="text-gold" /> {d.guests}</span>
          </div>
          <div className="text-muted-foreground text-sm leading-relaxed space-y-5 mb-12">
            <p>{d.p1}</p>
            <p>{d.p2}</p>
            <p>{d.p3}</p>
            <p>{d.p4}</p>
          </div>
          <h2 className="font-heading text-2xl text-foreground mb-6">
            {d.highlightsTitle} <span className="text-gold-gradient italic">{d.highlightsTitleHighlight}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {d.highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 p-3 gold-border rounded-sm text-sm text-muted-foreground">
                <Star size={14} className="text-gold flex-shrink-0" />{h}
              </div>
            ))}
          </div>
          <div className="text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {d.ctaTitle} <span className="text-gold-gradient italic">{d.ctaTitleHighlight}</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{d.ctaDescription}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
              {d.startPlanning}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mexico;
