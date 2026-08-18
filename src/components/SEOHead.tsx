import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface BreadcrumbCrumb {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  /** Optional Spanish overrides — applied automatically when the URL is under /es. */
  titleEs?: string;
  descriptionEs?: string;
  /** Optional English override URL (defaults to `${BASE}${strippedPath}`). Kept for legacy calls; canonical is now URL-derived by default. */
  canonical?: string;
  schemaJson?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbCrumb[];
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  /** Emit hreflang alternates (only where full en/es/x-default set exists). */
  emitHreflang?: boolean;
  suppressCanonical?: boolean;
}

const DEFAULT_OG_IMAGE = "https://www.sjuluxetravel.com/og-image.jpg";
const BASE = "https://www.sjuluxetravel.com";

export const SEOHead = ({
  title,
  description,
  titleEs,
  descriptionEs,
  canonical,
  schemaJson,
  breadcrumbs,
  ogImage,
  ogType = "website",
  noindex,
  emitHreflang = false,
  suppressCanonical = false,
}: SEOHeadProps) => {
  const location = useLocation();
  const isEs = /^\/es(\/|$)/.test(location.pathname);
  const lang: "en" | "es" = isEs ? "es" : "en";

  const strippedPath =
    location.pathname.replace(/^\/(en|es)(\/|$)/, "/").replace(/\/$/, "") ||
    "/";

  // Canonical rule:
  //   /es/*  -> self-canonical (https://.../es/...)
  //   root & /en/* -> https://.../<stripped>
  const effectiveCanonical = (() => {
    if (isEs) {
      return strippedPath === "/" ? `${BASE}/es` : `${BASE}/es${strippedPath}`;
    }
    // If a caller passed an explicit canonical, honor it (for root or non-es).
    if (canonical) return canonical;
    return strippedPath === "/" ? `${BASE}/` : `${BASE}${strippedPath}`;
  })();

  const enUrl = strippedPath === "/" ? `${BASE}/` : `${BASE}${strippedPath}`;
  const esUrl =
    strippedPath === "/" ? `${BASE}/es` : `${BASE}/es${strippedPath}`;

  const finalTitle = isEs && titleEs ? titleEs : title;
  const finalDescription = isEs && descriptionEs ? descriptionEs : description;

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: c.url,
          })),
        }
      : null;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const ogLocale = lang === "es" ? "es_PR" : "en_US";
  const ogLocaleAlt = lang === "es" ? "en_US" : "es_PR";

  return (
    <Helmet>
      <html lang={lang === "es" ? "es-PR" : "en"} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta name="geo.region" content="US-PR" />
      <meta name="geo.placename" content="San Juan, Puerto Rico" />
      <meta name="geo.position" content="18.4528361;-66.0635516" />
      <meta name="ICBM" content="18.4528361, -66.0635516" />

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      {!suppressCanonical && (
        <meta property="og:url" content={effectiveCanonical} />
      )}
      <meta property="og:site_name" content="SJU Luxe Travel" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {!suppressCanonical && <link rel="canonical" href={effectiveCanonical} />}

      {emitHreflang && !suppressCanonical && (
        <link rel="alternate" hrefLang="es-PR" href={esUrl} />
      )}
      {emitHreflang && !suppressCanonical && (
        <link rel="alternate" hrefLang="en" href={enUrl} />
      )}
      {emitHreflang && !suppressCanonical && (
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
      )}

      {schemaJson && (
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};
