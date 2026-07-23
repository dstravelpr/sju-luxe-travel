/**
 * Single source of truth for structured data (JSON-LD).
 *
 * The Organization (#organization) and WebSite (#website) nodes are rendered
 * statically in index.html so crawlers see them without executing JavaScript.
 * React pages only render page-specific nodes (WebPage, BlogPosting, Service,
 * AboutPage, BreadcrumbList, FAQPage, ...) and reference the static nodes by
 * @id via ORG_REF / WEBSITE_REF.
 */

export const HOSTNAME = "https://www.sjuluxetravel.com";
export const ORG_ID = `${HOSTNAME}/#organization`;
export const WEBSITE_ID = `${HOSTNAME}/#website`;
export const LOGO_URL = `${HOSTNAME}/logo.png`;

/** Reference the shared org node by @id. */
export const ORG_REF = { "@id": ORG_ID };
/** Reference the shared website node by @id. */
export const WEBSITE_REF = { "@id": WEBSITE_ID };

/** Canonical author (Person) block, used on every blog post. */
export const AUTHOR = {
  "@type": "Person",
  name: "Daniel Santiago Díaz",
  url: `${HOSTNAME}/about`,
  jobTitle: "Luxury Travel Advisor",
} as const;

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

/** Build a BreadcrumbList node from an ordered list of crumbs. */
export const breadcrumbList = (
  crumbs: BreadcrumbCrumb[]
): Record<string, unknown> => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
});

/**
 * Build a full @context + @graph document from page-specific nodes.
 *
 * The shared #organization and #website nodes are NOT emitted here — they live
 * in the static <head> of index.html to guarantee crawlers see them without
 * running JS, and to prevent duplicate @id entries on the page.
 */
export const buildGraph = (
  ...primaryNodes: Array<Record<string, unknown>>
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@graph": primaryNodes,
});
