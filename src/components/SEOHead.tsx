import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schemaJson?: Record<string, unknown>;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE = "https://www.sjuluxetravel.com/og-image.jpg";

const BASE = "https://www.sjuluxetravel.com";

export const SEOHead = ({ title, description, canonical, schemaJson, ogImage, ogType = "website", noindex }: SEOHeadProps) => {
  const image = ogImage || DEFAULT_OG_IMAGE;
  const location = useLocation();
  const lang = typeof document !== "undefined" ? document.documentElement.lang : "es-PR";
  const ogLocale = lang.startsWith("en") ? "en_US" : "es_PR";
  const ogLocaleAlt = lang.startsWith("en") ? "es_PR" : "en_US";

  // Canonical is always the non-prefixed URL
  const currentPath = location.pathname.replace(/^\/(en|es)(\/|$)/, "/") || "/";
  const pageUrl = `${BASE}${currentPath === "/" ? "" : currentPath}`;
  const effectiveCanonical = canonical || pageUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Geo meta tags */}
      <meta name="geo.region" content="US-PR" />
      <meta name="geo.placename" content="San Juan, Puerto Rico" />
      <meta name="geo.position" content="18.4655;-66.1057" />
      <meta name="ICBM" content="18.4655, -66.1057" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={effectiveCanonical} />
      <meta property="og:site_name" content="SJU Luxe Travel" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={effectiveCanonical} />

      {/* Hreflang — distinct URLs per language */}
      <link rel="alternate" hrefLang="es-PR" href={`${BASE}/es${currentPath === "/" ? "" : currentPath}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE}/en${currentPath === "/" ? "" : currentPath}`} />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />

      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
};
