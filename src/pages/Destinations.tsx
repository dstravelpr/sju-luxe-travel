import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import maldivesImg from "@/assets/destination-maldives.jpg";
import portugalImg from "@/assets/destination-portugal.jpg";
import mexicoImg from "@/assets/destination-mexico.jpg";
import koveliBadge from "@/assets/koveli-maldives-expert.png";

const DestinationCard = ({
  destination,
}: {
  destination: {
    subtitle: string;
    title: string;
    image: string;
    imageAlt: string;
    description: string;
    location: string;
    duration: string;
    guests: string;
    highlights: string[];
    imagePosition: "left" | "right";
    inquireNow: string;
    highlightsLabel: string;
    badge?: { src: string; alt: string; label: string };
  };
}) => {
  const { localPath } = useLanguage();
  const imageOnLeft = destination.imagePosition === "left";

  return (
    <div className="py-16 border-t border-border/30 first:border-t-0">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${imageOnLeft ? "" : "md:[direction:rtl]"}`}>
        <div className={`${imageOnLeft ? "" : "md:[direction:ltr]"}`}>
          <div className="aspect-[4/3] overflow-hidden gold-border rounded-sm">
            <img src={destination.image} alt={destination.imageAlt} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <p className="text-muted-foreground text-xs mt-2 italic">{destination.imageAlt}</p>
        </div>
        <div className={`${imageOnLeft ? "" : "md:[direction:ltr]"}`}>
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{destination.subtitle}</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-6">{destination.title}</h2>
          {destination.badge && (
            <div className="flex items-center gap-3 mb-6 p-3 gold-border rounded-sm">
              <img src={destination.badge.src} alt={destination.badge.alt} className="w-12 h-12 rounded-full flex-shrink-0" />
              <span className="text-muted-foreground text-xs leading-relaxed">{destination.badge.label}</span>
            </div>
          )}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{destination.description}</p>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-xs mb-6">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" />{destination.location}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" />{destination.duration}</span>
            <span className="flex items-center gap-1.5"><Users size={14} className="text-gold" />{destination.guests}</span>
          </div>
          <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-3">{destination.highlightsLabel}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {destination.highlights.map((h) => (
              <span key={h} className="px-3 py-1.5 gold-border rounded-full text-xs text-muted-foreground hover:border-gold transition-colors">{h}</span>
            ))}
          </div>
          <Link to={localPath("/contact")} className="inline-flex items-center gap-2 px-6 py-3 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
            {destination.inquireNow}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  const { t, localPath } = useLanguage();
  const dp = t.destinations.page;

  const destinations = [
    {
      subtitle: dp.paradiseOnEarth,
      title: t.home.maldives,
      image: maldivesImg,
      imageAlt: "The Maldives — luxury travel destination by SJU Luxe Travel",
      description: dp.maldivesDesc,
      location: dp.indianOcean,
      duration: dp.duration7_14,
      guests: dp.guests2plus,
      highlights: dp.ovwHighlights.maldives,
      imagePosition: "left" as const,
      inquireNow: dp.inquireNow,
      highlightsLabel: dp.highlights,
      badge: {
        src: koveliBadge,
        alt: "Koveli Maldives Expert Badge",
        label: dp.koveliBadgeLabel,
      },
    },
    {
      subtitle: dp.oldWorldCharm,
      title: t.home.portugal,
      image: portugalImg,
      imageAlt: "Portugal — luxury travel destination by SJU Luxe Travel",
      description: dp.portugalDesc,
      location: dp.westernEurope,
      duration: dp.duration8_12,
      guests: dp.guests2_6,
      highlights: dp.ovwHighlights.portugal,
      imagePosition: "right" as const,
      inquireNow: dp.inquireNow,
      highlightsLabel: dp.highlights,
    },
    {
      subtitle: dp.richCulture,
      title: t.home.mexico,
      image: mexicoImg,
      imageAlt: "Mexico — luxury travel destination by SJU Luxe Travel",
      description: dp.mexicoDesc,
      location: dp.northAmerica,
      duration: dp.duration7_14,
      guests: dp.guests2_8,
      highlights: dp.ovwHighlights.mexico,
      imagePosition: "left" as const,
      inquireNow: dp.inquireNow,
      highlightsLabel: dp.highlights,
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Destinos de Lujo — Itinerarios Personalizados | SJU Luxe Travel"
        description="Explora destinos de lujo curados por tu asesor de viajes en San Juan, Puerto Rico: Maldivas, Portugal, México y más. Beneficios exclusivos de NCM Concierge en cada propiedad."
        canonical="https://www.sjuluxetravel.com/destinations"
      />
      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-8 text-center">
            {dp.headingMain} <span className="text-gold-gradient italic">{dp.headingHighlight}</span>
          </h1>
          {destinations.map((dest, i) => (
            <DestinationCard key={i} destination={dest} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
