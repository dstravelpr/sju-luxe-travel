import { Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, WEBSITE_REF, buildGraph } from "@/lib/schema";
import heroImg from "@/assets/hero-beach-sunset.jpg";

const schemaJson = buildGraph({
  "@type": "BlogPosting",
  headline: "Viajes a medida sin Pasaporte desde Puerto Rico",
  description:
    "Los mejores destinos sin pasaporte para residentes de Puerto Rico: Islas Vírgenes, Hawaii, Florida Keys y más.",
  author: AUTHOR,
  publisher: ORG_REF,
  datePublished: "2026-05-29",
  dateModified: "2026-07-23",
  inLanguage: "Es-PR",
  url: "https://www.sjuluxetravel.com/blog/viajes-sin-pasaporte-desde-pr",
});

const Post = () => {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";

  return (
    <Layout>
      <SEOHead
        ogType="article"
        ogImage="https://www.sjuluxetravel.com/og/viajes-sin-pasaporte.jpg"
        title="viajes a medida sin Pasaporte desde Puerto Rico"
        description="Los mejores destinos sin pasaporte para residentes de PR: USVI, Hawaii, Florida Keys, Napa y más — sin trámites internacionales."
        canonical="https://www.sjuluxetravel.com/blog/viajes-sin-pasaporte-desde-pr"
        breadcrumbs={[
          { name: "Home", url: "https://www.sjuluxetravel.com" },
          { name: "Blog", url: "https://www.sjuluxetravel.com/blog" },
          {
            name: "viajes a medida sin Pasaporte desde Puerto Rico",
            url: "https://www.sjuluxetravel.com/blog/viajes-sin-pasaporte-desde-pr",
          },
        ]}
        schemaJson={schemaJson}
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
              {isEs ? "Consejos" : "Travel Tips"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
              {isEs
                ? "viajes a medida sin Pasaporte desde Puerto Rico"
                : "Trips Without a Passport from Puerto Rico"}
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
                  — {isEs ? "Agente de viajes a medida" : "Travel Advisor"}
                </span>
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-gold" />
                {isEs ? "29 de mayo de 2026" : "May 29, 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-gold" />
                {isEs ? "6 min de lectura" : "6 min read"}
              </span>
            </div>
            <p className="text-muted-foreground/70 text-xs mt-3 italic">
              {isEs
                ? "Última actualización: 23 de julio de 2026"
                : "Last updated: July 23, 2026"}
            </p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg gold-border mb-12">
            <img
              src={heroImg}
              alt={
                isEs
                  ? "Destinos sin pasaporte desde Puerto Rico"
                  : "No-passport destinations from Puerto Rico"
              }
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose-custom space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>
              {isEs
                ? "Una ventaja única de ser residente de Puerto Rico: como ciudadano de EE.UU., tienes acceso a destinos sin necesidad de pasaporte. Solo licencia o ID real. Estos son los que más recomendamos."
                : "A unique advantage of being a Puerto Rico resident: as a US citizen, you have access to destinations without a passport — just a license or REAL ID. These are the ones we recommend most."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              1.{" "}
              {isEs
                ? "Islas Vírgenes Estadounidenses (USVI)"
                : "US Virgin Islands (USVI)"}
            </h2>
            <p>
              {isEs
                ? "St. John y St. Thomas — el Caribe más cercano. Rosewood Little Dix Bay (BVI requiere pasaporte, pero USVI no), Frenchman's Reef y villas privadas con chef. Vuelo directo desde SJU."
                : "St. John and St. Thomas — the closest Caribbean. Rosewood Little Dix Bay (BVI needs a passport, USVI doesn't), Frenchman's Reef, and private villas with chef. Direct flight from SJU."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              2. Hawaii
            </h2>
            <p>
              {isEs
                ? "Maui, Kauai y la Big Island ofrecen los resorts más espectaculares sin salir de EE.UU. Four Seasons Hualalai, Montage Kapalua Bay, Andaz Maui. Vuelo: SJU → DFW/LAX → HNL."
                : "Maui, Kauai and the Big Island offer the most spectacular resorts without leaving the US. Four Seasons Hualalai, Montage Kapalua Bay, Andaz Maui. Routing: SJU → DFW/LAX → HNL."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              3. Florida Keys & Miami
            </h2>
            <p>
              {isEs
                ? "Little Palm Island, Cheeca Lodge, The Setai Miami Beach. Para escapadas cortas de 3–4 noches sin estrés."
                : "Little Palm Island, Cheeca Lodge, The Setai Miami Beach. For short 3–4 night escapes with zero stress."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              4. Napa Valley & Sonoma
            </h2>
            <p>
              {isEs
                ? "Auberge du Soleil, Meadowood, Montage Healdsburg. Cata privada, helicóptero sobre viñedos, gastronomía Michelin. La California más sofisticada."
                : "Auberge du Soleil, Meadowood, Montage Healdsburg. Private tastings, vineyard helicopter, Michelin dining. California's most sophisticated side."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              5. {isEs ? "Sedona y el Suroeste" : "Sedona & the Southwest"}
            </h2>
            <p>
              {isEs
                ? "Enchantment Resort y L'Auberge de Sedona, combinado con Amangiri en Utah para viajeros aventureros."
                : "Enchantment Resort and L'Auberge de Sedona, combined with Amangiri in Utah for adventurous travelers."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              6.{" "}
              {isEs ? "Nueva York & los Hamptons" : "New York & the Hamptons"}
            </h2>
            <p>
              {isEs
                ? "Aman New York o The Mark, seguido de unos días en The Maidstone o Topping Rose House. Cultura + playa en un solo viaje."
                : "Aman New York or The Mark, followed by a few days at The Maidstone or Topping Rose House. Culture + beach in one trip."}
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {isEs
                ? "¿Y crucero sin pasaporte?"
                : "What about cruises without a passport?"}
            </h2>
            <p>
              {isEs
                ? 'Sí — cruceros de "closed loop" que salen y regresan a San Juan permiten viajar solo con licencia (Royal Caribbean, Celebrity y otros operan desde SJU).'
                : 'Yes — "closed loop" cruises departing and returning to San Juan allow travel with just a license (Royal Caribbean, Celebrity and others operate from SJU).'}
            </p>
          </div>
          <p
            data-cta="contextual-service-cta"
            className="mt-12 mb-4 text-center text-muted-foreground text-base leading-relaxed"
          >
            {isEs
              ? "¿Listo para tu próxima escapada sin pasaporte? "
              : "Ready for your next no-passport escape? "}
            <Link
              to={localPath("/viajes-de-lujo-desde-puerto-rico")}
              className="text-gold hover:text-gold-light underline font-semibold"
            >
              {isEs
                ? "Explora nuestros servicios de viajes a medida →"
                : "Explore our luxury travel services →"}
            </Link>
          </p>
          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {isEs ? "Planifica sin Trámites" : "Plan Without the Paperwork"}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {isEs
                ? "Te diseñamos el viaje perfecto sin necesidad de pasaporte."
                : "We'll design the perfect trip — no passport required."}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {isEs ? "Contactar" : "Contact"}
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
