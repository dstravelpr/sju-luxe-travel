/**
 * Single source of truth for structured data (JSON-LD).
 * Every page renders the shared #org and #website nodes from HERE — never inline.
 * Page-specific nodes (WebPage, BlogPosting, Service, AboutPage, etc.) MUST
 * reference the org/website by @id only.
 */

export const HOSTNAME = "https://www.sjuluxetravel.com";
export const ORG_ID = `${HOSTNAME}/#org`;
export const WEBSITE_ID = `${HOSTNAME}/#website`;
export const LOGO_URL = `${HOSTNAME}/logo.png`;

export const ORG_SCHEMA = {
  "@type": "TravelAgency",
  "@id": ORG_ID,
  name: "SJU Luxe Travel",
  url: HOSTNAME,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "SJU Luxe Travel is a boutique luxury travel agency based in San Juan, Puerto Rico. We craft bespoke international itineraries to the Maldives, Portugal, Mexico, and beyond — with exclusive NCM Concierge perks you can't get booking online. Bilingual luxury travel agent serving the US, Caribbean, and Latin America.",
  telephone: "+16179355714",
  email: "info@sjuluxetravel.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Juan",
    addressRegion: "PR",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/sjuluxetravel",
    "https://www.facebook.com/sjuluxetravel",
    "https://www.linkedin.com/company/sju-luxe-travel",
    "https://share.google/ahCukdIzbzs4A57sc",
  ],
  founder: {
    "@type": "Person",
    name: "Daniel Santiago Díaz",
    jobTitle: "Founder & Lead Travel Agent",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  priceRange: "$$-$$$$",
} as const;

export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: HOSTNAME,
  name: "SJU Luxe Travel",
  inLanguage: ["en", "es"],
  publisher: { "@id": ORG_ID },
} as const;

/**
 * Build a full @context + @graph document.
 * Always includes the shared #org and #website nodes.
 * Pass any page-specific nodes (WebPage, BlogPosting, AboutPage, Service, FAQPage, ...).
 */
export const buildGraph = (
  ...primaryNodes: Array<Record<string, unknown>>
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@graph": [ORG_SCHEMA, WEBSITE_SCHEMA, ...primaryNodes],
});

/** Reference the shared org node by @id. */
export const ORG_REF = { "@id": ORG_ID };
/** Reference the shared website node by @id. */
export const WEBSITE_REF = { "@id": WEBSITE_ID };
