import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { Picture } from "@/components/Picture";
import mexicoImg from "@/assets/destination-mexico.jpg";
import mexicoImgWebp from "@/assets/destination-mexico.webp";
import { RelatedArticles } from "@/components/RelatedArticles";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Mexico",
  description:
    "Tailored vacation packages to Mexico, planned from San Juan Puerto Rico by SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca & more.",
  touristType: "Discerning Travelers",
  url: "https://www.sjuluxetravel.com/destinations/mexico",
};

const Mexico = () => {
  const { t, localPath, language } = useLanguage();
  const d = t.destinations.mexico;

  return (
    <Layout>
      <SEOHead
        title="Mexico Vacations from Puerto Rico | SJU Luxe Travel"
        description="Bespoke Mexico trips from San Juan, PR: Riviera Maya, Tulum, Oaxaca & CDMX with boutique resorts and cultural experiences."
        titleEs="Viajes a México desde PR | SJU Luxe Travel"
        descriptionEs="Desde Tulum hasta CDMX — itinerarios personalizados para viajeros de PR. Resorts boutique, cultura y gastronomía de clase mundial."
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          {
            name: "Destinations",
            url: "https://www.sjuluxetravel.com/destinations",
          },
          {
            name: "Mexico",
            url: "https://www.sjuluxetravel.com/destinations/mexico",
          },
        ]}
        schemaJson={schemaJson}
        emitHreflang
      />

      <section className="relative pt-24">
        <div className="aspect-[21/9] max-h-[480px] overflow-hidden">
          <Picture
            src={mexicoImg}
            webpSrc={mexicoImgWebp}
            alt="bespoke travel to Mexico — Riviera Maya, Tulum & Oaxaca curated by SJU Luxe Travel"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-6">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
              {d.label}
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-2">
              {d.title}
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              {d.curatedBy} <span className="text-gold">SJU Luxe Travel</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-wrap gap-6 text-muted-foreground text-xs mb-10">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gold" /> {d.locationLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-gold" /> {d.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-gold" /> {d.guests}
            </span>
          </div>
          <div className="text-muted-foreground text-sm leading-relaxed space-y-5 mb-12">
            <p>{d.p1}</p>
            <p>{d.p2}</p>
            <p>{d.p3}</p>
            <p>{d.p4}</p>
            <p>
              {language === "es"
                ? "México es uno de los destinos favoritos para viajeros de Puerto Rico por una razón importante: los ciudadanos americanos (incluidos residentes de PR) pueden viajar con pasaporte estadounidense sin visa, y desde SJU hay vuelos directos a Cancún (CUN) con JetBlue y Frontier, además de conexiones cortas a CDMX vía Miami o Houston. La mejor temporada va de noviembre a mayo (temporada seca)."
                : "Mexico is one of the top destinations for Puerto Rico travelers for one big reason: U.S. citizens (including PR residents) travel with just a U.S. passport — no visa — and SJU has nonstop service to Cancún (CUN) on JetBlue and Frontier, plus short one-stop routes to CDMX via Miami or Houston. Best season is November through May (dry season)."}{" "}
              {language === "es" ? (
                <>
                  Explora también nuestros{" "}
                  <Link
                    to={localPath("/viajes-de-lujo-desde-puerto-rico")}
                    className="text-gold hover:text-gold-light underline"
                  >
                    viajes de lujo desde PR
                  </Link>{" "}
                  o{" "}
                  <Link
                    to={localPath("/contact")}
                    className="text-gold hover:text-gold-light underline"
                  >
                    agenda una consulta gratuita
                  </Link>
                  .
                </>
              ) : (
                <>
                  See also our{" "}
                  <Link
                    to={localPath("/viajes-de-lujo-desde-puerto-rico")}
                    className="text-gold hover:text-gold-light underline"
                  >
                    bespoke travel from PR
                  </Link>{" "}
                  or{" "}
                  <Link
                    to={localPath("/contact")}
                    className="text-gold hover:text-gold-light underline"
                  >
                    book a free consultation
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
          <h2 className="font-heading text-2xl text-foreground mb-6">
            {d.highlightsTitle}{" "}
            <span className="text-gold-gradient italic">
              {d.highlightsTitleHighlight}
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {d.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-3 p-3 gold-border rounded-sm text-sm text-muted-foreground"
              >
                <Star size={14} className="text-gold flex-shrink-0" />
                {h}
              </div>
            ))}
          </div>
          <RelatedArticles
            items={[
              {
                title: "Viajes sin pasaporte desde Puerto Rico",
                href: "/blog/viajes-sin-pasaporte-desde-pr",
                category: "Guía",
              },
              {
                title: "Viajes: qué significa realmente",
                href: "/blog/what-luxury-travel-really-means",
                category: "Lujo",
              },
            ]}
          />

          <div className="text-center py-12 gold-border rounded-lg mt-16">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {d.ctaTitle}{" "}
              <span className="text-gold-gradient italic">
                {d.ctaTitleHighlight}
              </span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {d.ctaDescription}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
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
