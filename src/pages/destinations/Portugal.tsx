import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import portugalImg from "@/assets/destination-portugal.jpg";

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Luxury Portugal Travel Packages",
  description:
    "Curated luxury travel to Portugal by SJU Luxe Travel. Lisbon, Porto, Algarve, Douro Valley & Sintra with exclusive hotel perks.",
  url: "https://sjuluxetravel.com/destinations/portugal",
};

const highlights = [
  "Private guided tours of Lisbon & Porto",
  "Port wine tastings in the Douro Valley",
  "Algarve beach & cliff excursions",
  "Sintra fairy-tale palace visits",
  "Authentic Fado music experiences",
  "Michelin-starred dining reservations",
  "Boutique hotel stays with exclusive perks",
  "Douro River cruises",
];

const Portugal = () => (
  <Layout>
    <SEOHead
      title="Luxury Portugal Travel Packages — Curated by SJU Luxe Travel"
      description="Plan your luxury Portugal vacation with SJU Luxe Travel. Lisbon, Porto, Algarve beaches, Douro Valley wine tours & exclusive hotel perks. Boutique travel agency in San Juan, PR."
      canonical="https://sjuluxetravel.com/destinations/portugal"
      schemaJson={schemaJson}
    />

    <section className="relative pt-24">
      <div className="aspect-[21/9] max-h-[480px] overflow-hidden">
        <img src={portugalImg} alt="Luxury travel to Portugal — Lisbon, Porto & Algarve curated by SJU Luxe Travel" className="w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">Featured Destination</span>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-2">Luxury Portugal Travel Packages</h1>
          <p className="text-muted-foreground text-sm mt-2">Curated by <span className="text-gold">SJU Luxe Travel</span></p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-wrap gap-6 text-muted-foreground text-xs mb-10">
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> Western Europe</span>
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" /> 8–12 days recommended</span>
          <span className="flex items-center gap-1.5"><Users size={14} className="text-gold" /> Couples, families & solo travelers</span>
        </div>

        <div className="text-muted-foreground text-sm leading-relaxed space-y-5 mb-12">
          <p>
            Portugal is one of Europe's most captivating destinations — a country where centuries of maritime
            history meet vibrant modern culture, world-class cuisine, and stunning coastal landscapes. At
            SJU Luxe Travel, we design immersive Portugal itineraries that reveal the country's hidden gems
            alongside its iconic landmarks.
          </p>
          <p>
            Explore Lisbon's historic cobblestone streets and iconic yellow trams, wander through the
            medieval alleyways of Porto, discover the fairy-tale palaces of Sintra, and unwind on the
            dramatic cliffs and golden beaches of the Algarve. In the Douro Valley, cruise along
            terraced vineyards and enjoy private Port wine tastings at centuries-old estates.
          </p>
          <p>
            Portugal offers extraordinary value compared to other Western European destinations without
            compromising on luxury. From boutique palace hotels in Sintra to five-star oceanfront
            properties in the Algarve, we secure exclusive perks including complimentary upgrades,
            resort credits, and VIP experiences through our preferred partner network.
          </p>
          <p>
            Whether you're seeking a romantic escape through Lisbon and the Algarve, a culinary journey
            through Porto and the Douro Valley, or a multi-city cultural immersion, Portugal delivers
            on every front. Let us craft an itinerary that matches your pace, interests, and travel style.
          </p>
        </div>

        <h2 className="font-heading text-2xl text-foreground mb-6">
          What's Included in Our <span className="text-gold-gradient italic">Portugal Packages</span>
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
            Ready to Explore <span className="text-gold-gradient italic">Portugal?</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Contact us for a complimentary consultation. We'll design a personalized Portugal itinerary
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

export default Portugal;
