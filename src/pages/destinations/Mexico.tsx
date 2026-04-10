import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import mexicoImg from "@/assets/destination-mexico.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Luxury Mexico Travel Packages",
  description:
    "Curated luxury travel to Mexico by SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca, San Miguel de Allende & cenote experiences with exclusive resort perks.",
  url: "https://sjuluxetravel.com/destinations/mexico",
};

const highlights = [
  "Riviera Maya beachfront resort stays",
  "Private cenote swimming excursions",
  "Guided Mayan ruins tours (Tulum & Chichén Itzá)",
  "Oaxaca culinary & mezcal experiences",
  "San Miguel de Allende cultural immersion",
  "Mexico City art, food & architecture tours",
  "Exclusive resort credits & VIP amenities",
  "Wellness retreats & spa experiences",
];

const Mexico = () => (
  <Layout>
    <SEOHead
      title="Luxury Mexico Travel Packages — Curated by SJU Luxe Travel"
      description="Plan your luxury Mexico vacation with SJU Luxe Travel. Riviera Maya, Tulum, Oaxaca, cenotes & exclusive resort perks. Boutique travel agency in San Juan, PR."
      canonical="https://sjuluxetravel.com/destinations/mexico"
      schemaJson={schemaJson}
    />

    <section className="relative pt-24">
      <div className="aspect-[21/9] max-h-[480px] overflow-hidden">
        <img src={mexicoImg} alt="Luxury travel to Mexico — Riviera Maya, Tulum & Oaxaca curated by SJU Luxe Travel" className="w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Featured Destination</span>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-2">Luxury Mexico Travel Packages</h1>
          <p className="text-muted-foreground text-sm mt-2">Curated by <span className="text-gold">SJU Luxe Travel</span></p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-wrap gap-6 text-muted-foreground text-xs mb-10">
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> North America</span>
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" /> 7–14 days recommended</span>
          <span className="flex items-center gap-1.5"><Users size={14} className="text-gold" /> Couples, families & groups</span>
        </div>

        <div className="text-muted-foreground text-sm leading-relaxed space-y-5 mb-12">
          <p>
            Mexico is one of the most diverse and rewarding luxury travel destinations in the world —
            a country where ancient civilizations, vibrant culture, UNESCO-recognized cuisine, and
            stunning natural landscapes come together in extraordinary fashion. At SJU Luxe Travel,
            we craft bespoke Mexico itineraries that go far beyond the all-inclusive resort experience.
          </p>
          <p>
            Dive into sacred cenotes hidden deep in the Yucatán jungle, explore the ancient Mayan ruins
            of Tulum perched above turquoise Caribbean waters, wander the colorful colonial streets of
            San Miguel de Allende, and discover Oaxaca's world-renowned culinary scene — from
            traditional mole workshops to mezcal distillery tours.
          </p>
          <p>
            Mexico's Pacific and Caribbean coastlines offer some of the finest luxury resorts in the
            Americas. Through our preferred partner network as an independent agent of NCM Concierge,
            we secure exclusive perks at top properties — complimentary upgrades, resort credits,
            spa treatments, and VIP dining experiences that aren't available through online booking.
          </p>
          <p>
            Whether you're planning a honeymoon on the Riviera Maya, a family adventure through the
            Yucatán Peninsula, a culinary pilgrimage to Oaxaca, or a wellness retreat in Tulum,
            Mexico delivers on every front. Let us design an itinerary that captures the best of
            this incredible country.
          </p>
        </div>

        <h2 className="font-heading text-2xl text-foreground mb-6">
          What's Included in Our <span className="text-gold-gradient italic">Mexico Packages</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-3 p-3 gold-border rounded-sm text-sm text-muted-foreground">
              <Star size={14} className="text-gold flex-shrink-0" />
              {h}
            </div>
          ))}
        </div>

        <div className="text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            Ready to Discover <span className="text-gold-gradient italic">Mexico?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Contact us for a complimentary consultation. We'll design a personalized Mexico itinerary
            based on your preferences, budget, and travel dates.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
          >
            Start Planning
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Mexico;
