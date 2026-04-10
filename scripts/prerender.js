/**
 * Post-build prerender script.
 * Creates per-route index.html files with SEO-rich static content
 * so crawlers see meaningful HTML before JS hydrates.
 */
import fs from "fs";
import path from "path";

const DIST = path.resolve("dist");
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

// Route → static content mapping for crawlers
const pages = {
  "/about": {
    title: "About SJU Luxe Travel — Bilingual Luxury Travel Advisor in Puerto Rico",
    h1: "About SJU Luxe Travel — Your Bilingual Luxury Travel Advisor",
    body: "Founded by Daniel Santiago Díaz, a certified bilingual travel professional and private travel concierge with over a decade of luxury sales experience across six continents. As an independent agent of NCM Concierge, part of Travel Leaders, we deliver intentional luxury travel experiences, bespoke itineraries, and exclusive perks you cannot get booking online. Licensed in Florida (ST15578), California, Washington, and Iowa.",
  },
  "/destinations": {
    title: "Luxury Travel Destinations — Maldives, Portugal, Mexico & Beyond",
    h1: "Luxury Travel Destinations — Handpicked by Your Private Travel Concierge",
    body: "Explore our curated collection of luxury destinations including overwater villas in the Maldives, luxury Portugal travel itineraries through Lisbon and the Algarve, luxury Mexico vacation packages across the Riviera Maya and Oaxaca, and luxury cruises departing from San Juan Puerto Rico. Each bespoke itinerary is personally designed with insider access and exclusive NCM Concierge perks.",
  },
  "/destinations/maldives": {
    title: "Luxury Maldives Travel Packages — Overwater Villas & Private Island Resorts",
    h1: "Luxury Maldives Travel Packages — Overwater Villas & Private Island Resorts",
    body: "Experience the ultimate in luxury with our bespoke Maldives travel packages. From overwater villas at the world's finest resorts to private island experiences, your luxury travel advisor crafts every detail with exclusive NCM Concierge perks including complimentary room upgrades, resort credits, and VIP amenities.",
  },
  "/destinations/portugal": {
    title: "Luxury Portugal Travel Itinerary — Lisbon, Algarve & Porto",
    h1: "Luxury Portugal Travel Itinerary — Lisbon, Algarve & Porto",
    body: "Discover Portugal through a bespoke luxury itinerary. From Lisbon's historic charm to the Algarve's stunning coastline and Porto's wine country, we design private guided tours with exclusive NCM Concierge perks at top properties.",
  },
  "/destinations/mexico": {
    title: "Luxury Mexico Vacation Packages — Riviera Maya, Oaxaca & Beyond",
    h1: "Luxury Mexico Vacation Packages — Riviera Maya, Oaxaca & Beyond",
    body: "Experience Mexico's finest with our luxury vacation packages. From the Riviera Maya's pristine beaches to Oaxaca's culinary treasures, we craft bespoke itineraries with private guided tours and exclusive NCM Concierge perks.",
  },
  "/blog": {
    title: "Luxury Travel Blog — Tips, Guides & Insights from SJU Luxe Travel",
    h1: "Luxury Travel Blog — Tips, Guides & Insights",
    body: "Expert insights on luxury travel from your boutique travel advisor in San Juan, Puerto Rico. Learn about intentional luxury travel, why travel agents save you money, and how to plan bespoke itineraries to the world's most exclusive destinations.",
  },
  "/blog/what-luxury-travel-really-means": {
    title: "What Luxury Travel Really Means — Beyond Five Stars | SJU Luxe Travel",
    h1: "What Luxury Travel Really Means — Beyond Five Stars",
    body: "Luxury travel is not about the price tag or the star rating. It is about intentional experiences, private access, and moments that transform how you see the world. Learn what intentional luxury travel really means and why a boutique travel agency delivers experiences mass tourism never can.",
  },
  "/blog/do-travel-agents-really-help-save-money": {
    title: "Is It Worth Using a Travel Agent? Do They Save You Money? | SJU Luxe Travel",
    h1: "Is It Worth Using a Travel Agent? Do They Really Save You Money?",
    body: "Discover why luxury travelers consistently choose travel agents over online booking. From exclusive NCM Concierge perks like complimentary upgrades and resort credits to insider access and bespoke itinerary planning, learn how a boutique travel agency saves you both time and money.",
  },
  "/contact": {
    title: "Free Luxury Travel Consultation — Contact SJU Luxe Travel",
    h1: "Free Luxury Travel Consultation — Contact Your Luxury Travel Advisor",
    body: "Schedule your free luxury travel consultation today. Whether you are planning luxury cruises from San Juan, private guided tours, luxury solo travel for women, corporate incentive travel, or exclusive destinations without mass tourism — your boutique travel advisor is ready. Phone: (617) 935-5714. Email: dsantiago@ncmconcierge.com.",
  },
};

for (const [route, content] of Object.entries(pages)) {
  const dir = path.join(DIST, route);
  fs.mkdirSync(dir, { recursive: true });

  // Replace the root div content with route-specific SEO content
  const html = template
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${content.title}</title>`
    )
    .replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root"><h1>${content.h1}</h1><p>${content.body}</p></div>`
    );

  fs.writeFileSync(path.join(dir, "index.html"), html);
}

console.log(`✅ Prerendered ${Object.keys(pages).length} routes`);
