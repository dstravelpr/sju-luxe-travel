import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { Picture } from "@/components/Picture";
import portugalImg from "@/assets/destination-portugal.jpg";
import portugalImgWebp from "@/assets/destination-portugal.webp";
import { RelatedArticles } from "@/components/RelatedArticles";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Portugal",
  description:
    "Bespoke travel itineraries to Portugal, planned from San Juan Puerto Rico by SJU Luxe Travel. Lisbon, Porto, Algarve & Douro Valley.",
  touristType: "Discerning Travelers",
  url: "https://www.sjuluxetravel.com/destinations/portugal",
};

const Portugal = () => {
  const { t, localPath, language } = useLanguage();
  const d = t.destinations.portugal;

  return (
    <Layout>
      <SEOHead
        title="Viajes a Portugal desde Puerto Rico — Itinerarios a la Medida | SJU Luxe Travel"
        description="Planifica tu viaje a Portugal desde Puerto Rico con SJU Luxe Travel. Lisboa, Valle del Duero, Algarve y más — itinerarios personalizados con beneficios exclusivos incluidos."
        titleEs="Viajes a Portugal desde Puerto Rico — Itinerarios a la Medida | SJU Luxe Travel"
        descriptionEs="Planifica tu viaje a Portugal desde Puerto Rico con SJU Luxe Travel. Lisboa, Valle del Duero, Algarve y más — itinerarios personalizados con beneficios exclusivos incluidos."
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          {
            name: "Destinations",
            url: "https://www.sjuluxetravel.com/destinations",
          },
          {
            name: "Portugal",
            url: "https://www.sjuluxetravel.com/destinations/portugal",
          },
        ]}
        schemaJson={schemaJson}
        emitHreflang
      />

      <section className="relative pt-24">
        <div className="aspect-[21/9] max-h-[480px] overflow-hidden">
          <Picture
            src={portugalImg}
            webpSrc={portugalImgWebp}
            alt="bespoke travel to Portugal — Lisbon, Porto & Algarve curated by SJU Luxe Travel"
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
                ? "Portugal es uno de los destinos europeos más buscados por viajeros de Puerto Rico por su cercanía cultural, gastronomía de clase mundial y precios más razonables que otros destinos exclusivos. Desde San Juan (SJU) volamos vía Miami o Newark: TAP Air Portugal opera vuelos directos MIA–LIS y EWR–LIS/OPO, y United tiene servicio estacional desde EWR. Los highlights incluyen Lisboa (Belém, Alfama, cenas privadas con fadista), Porto y el valle del Duero (bodegas históricas de Oporto y crucero fluvial opcional), y la costa del Algarve (playas de acantilado, resorts boutique como Vila Vita Parc y Bela Vista)."
                : "Portugal is one of the most requested European destinations for Puerto Rico travelers thanks to cultural closeness, world-class food and better value than other European trips. From San Juan (SJU) we route via Miami or Newark: TAP Air Portugal runs nonstop MIA–LIS and EWR–LIS/OPO, and United flies seasonal EWR–LIS. Highlights include Lisbon (Belém, Alfama, private fado dinners), Porto and the Douro Valley (historic Port wine lodges plus optional river cruise), and the Algarve coast (cliff beaches, boutique resorts like Vila Vita Parc and Bela Vista)."}
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12">
            {language === "es"
              ? "¿Planificando la ruta desde San Juan? Consulta nuestra guía de "
              : "Planning the route from San Juan? See our "}
            <Link
              to={localPath("/blog/vuelos-puerto-rico-portugal")}
              className="text-gold hover:text-gold-light underline"
            >
              {language === "es"
                ? "vuelos de Puerto Rico a Portugal — mejores rutas y aerolíneas"
                : "Puerto Rico to Portugal flights — best routes and airlines"}
            </Link>
            {language === "es" ? ", pásate por " : ", explore our "}
            <Link
              to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")}
              className="text-gold hover:text-gold-light underline"
            >
              {language === "es"
                ? "cruceros fluviales desde PR"
                : "River cruises from PR"}
            </Link>
            {language === "es" ? " o " : " or "}
            <Link
              to={localPath("/contact")}
              className="text-gold hover:text-gold-light underline"
            >
              {language === "es"
                ? "agenda una consulta gratuita"
                : "Book a free consultation"}
            </Link>
            .
          </p>
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
                title: "Vuelos de Puerto Rico a Portugal: mejores rutas",
                href: "/blog/vuelos-puerto-rico-portugal",
                category: "Vuelos",
              },
              {
                title: "Crucero fluvial por el Duero desde Puerto Rico",
                href: "/blog/crucero-fluvial-duero-desde-puerto-rico",
                category: "Cruceros",
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

export default Portugal;
