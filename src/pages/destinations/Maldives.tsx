import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import maldivesImg from "@/assets/destination-maldives.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Luxury Maldives Travel Packages",
  description:
    "Curated luxury travel packages to the Maldives by SJU Luxe Travel. Overwater villas, private beach dinners, world-class diving, and exclusive resort perks.",
  touristType: "Luxury travelers, honeymooners, wellness seekers",
  url: "https://sjuluxetravel.com/destinations/maldives",
};

const highlights = [
  "Overwater villa stays at top-rated resorts",
  "Private beach dinners under the stars",
  "World-class snorkeling & scuba diving",
  "Sunset dolphin cruises",
  "Underwater restaurant experiences",
  "Couples spa & wellness retreats",
  "Complimentary room upgrades & resort credits",
  "Seaplane transfers & island hopping",
];

const Maldives = () => (
  <Layout>
    <SEOHead
      title="Luxury Maldives Travel Packages — Curated by SJU Luxe Travel"
      description="Plan your luxury Maldives vacation with SJU Luxe Travel. Overwater villas, private dinners, diving & exclusive resort perks from San Juan, PR."
      canonical="https://sjuluxetravel.com/destinations/maldives"
      schemaJson={schemaJson}
    />

    {/* Hero */}
    <section className="relative pt-24">
      <div className="aspect-[21/9] max-h-[480px] overflow-hidden">
        <img
          src={maldivesImg}
          alt="Luxury overwater villas in the Maldives — curated by SJU Luxe Travel"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
            Featured Destination
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-2">
            Luxury Maldives Travel Packages
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Curated by <span className="text-gold">SJU Luxe Travel</span>
          </p>
        </div>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-wrap gap-6 text-muted-foreground text-xs mb-10">
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> Indian Ocean</span>
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" /> 7–14 days recommended</span>
          <span className="flex items-center gap-1.5"><Users size={14} className="text-gold" /> Couples, families & groups</span>
          <span className="flex items-center gap-1.5"><Star size={14} className="text-gold" /> Best for honeymooners</span>
        </div>

        <div className="text-muted-foreground text-sm leading-relaxed space-y-5 mb-12">
          <p>
            The Maldives is the ultimate luxury escape — a chain of 1,190 coral islands in the Indian Ocean
            known for crystal-clear turquoise lagoons, pristine white-sand beaches, and some of the most
            exclusive resorts on the planet. At SJU Luxe Travel, we design bespoke Maldives itineraries
            that go far beyond the typical resort booking.
          </p>
          <p>
            Imagine waking up in an overwater villa suspended above a vibrant coral reef, spending the
            morning snorkeling with manta rays, enjoying a private lunch on a secluded sandbank, and
            ending the day with a sunset dolphin cruise followed by dinner at an underwater restaurant.
            These are the kinds of intentional, once-in-a-lifetime experiences we curate for our clients.
          </p>
          <p>
            As an independent agent of NCM Concierge, we secure exclusive perks at top Maldives properties
            including Ithaafushi, Huvawalhi, Conrad Rangali Island, St. Regis, and Soneva Fushi —
            complimentary room upgrades, resort credits, early check-in, spa credits, and VIP amenities
            that aren't available when booking directly online.
          </p>
          <p>
            Whether you're planning a romantic honeymoon, an anniversary celebration, a wellness retreat,
            or a family adventure, the Maldives offers an unparalleled setting. Let us handle every detail
            — from seaplane transfers and island selection to restaurant reservations and excursion planning
            — so you can focus entirely on the experience.
          </p>
        </div>

        {/* Highlights */}
        <h2 className="font-heading text-2xl text-foreground mb-6">
          What's Included in Our <span className="text-gold-gradient italic">Maldives Packages</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-3 p-3 gold-border rounded-sm text-sm text-muted-foreground">
              <Star size={14} className="text-gold flex-shrink-0" />
              {h}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-12 gold-border rounded-lg">
          <h3 className="font-heading text-2xl text-foreground mb-3">
            Ready to Plan Your <span className="text-gold-gradient italic">Maldives Getaway?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Contact us for a complimentary consultation. We'll design a personalized Maldives itinerary
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

export default Maldives;
