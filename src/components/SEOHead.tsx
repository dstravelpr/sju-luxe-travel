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
  /** Suppress hreflang tags (e.g. blog posts with no translations). Defaults true; set false only where full en/es/x-default set exists. */
  emitHreflang?: boolean;
  /** Suppress canonical tag entirely (used on 404). */
  suppressCanonical?: boolean;
}

const DEFAULT_OG_IMAGE = "https://www.sjuluxetravel.com/og-image.jpg";
const BASE = "https://www.sjuluxetravel.com";

export const SEOHead = ({
  title,
  description,
  canonical,
  schemaJson,
  ogImage,
  ogType = "website",
  noindex,
  emitHreflang = false,
  suppressCanonical = false,
}: SEOHeadProps) => {
  const image = ogImage || DEFAULT_OG_IMAGE;
  const location = useLocation();
  const lang = typeof document !== "undefined" ? document.documentElement.lang : "en";
  const ogLocale = lang.startsWith("es") ? "es_PR" : "en_US";
  const ogLocaleAlt = lang.startsWith("es") ? "en_US" : "es_PR";

  const currentPath = location.pathname.replace(/^\/(en|es)(\/|$)/, "/") || "/";
  const pageUrl = `${BASE}${currentPath === "/" ? "/" : currentPath}`;
  const effectiveCanonical = canonical || pageUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta name="geo.region" content="US-PR" />
      <meta name="geo.placename" content="San Juan, Puerto Rico" />
      <meta name="geo.position" content="18.4655;-66.1057" />
      <meta name="ICBM" content="18.4655, -66.1057" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      {!suppressCanonical && <meta property="og:url" content={effectiveCanonical} />}
      <meta property="og:site_name" content="SJU Luxe Travel" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {!suppressCanonical && <link rel="canonical" href={effectiveCanonical} />}

      {emitHreflang && !suppressCanonical && (
        <link rel="alternate" hrefLang="es-PR" href={`${BASE}/es${currentPath === "/" ? "" : currentPath}`} />
      )}
      {emitHreflang && !suppressCanonical && (
        <link rel="alternate" hrefLang="en" href={`${BASE}/en${currentPath === "/" ? "" : currentPath}`} />
      )}
      {emitHreflang && !suppressCanonical && (
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />
      )}

      {schemaJson && (
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      )}
    </Helmet>
  );
};
