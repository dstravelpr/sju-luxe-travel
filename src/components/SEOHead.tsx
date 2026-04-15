import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schemaJson?: Record<string, unknown>;
  ogImage?: string;
}

const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6cdf4b5b-9b67-48a1-83fb-134129ec892a/id-preview-f5dd5032--633f6989-8325-4a39-b1db-9033d10321cf.lovable.app-1775821560059.png";

export const SEOHead = ({ title, description, canonical, schemaJson, ogImage }: SEOHeadProps) => {
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Geo meta tags */}
      <meta name="geo.region" content="US-PR" />
      <meta name="geo.placename" content="San Juan, Puerto Rico" />
      <meta name="geo.position" content="18.4655;-66.1057" />
      <meta name="ICBM" content="18.4655, -66.1057" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Hreflang */}
      {canonical && <link rel="alternate" hrefLang="es-PR" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="en" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="x-default" href={canonical} />}

      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
};
