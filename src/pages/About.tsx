import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About | SJU Luxe Travel — Meet Your Advisor"
        description="Meet Daniel Santiago Díaz, founder of SJU Luxe Travel. Over a decade of experience crafting intentional luxury travel from San Juan, Puerto Rico."
        canonical="https://sjuluxetravel.com/about"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
            Meet Your Advisor
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-4">
            Daniel Santiago <span className="text-gold-gradient italic">Díaz</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-xl mx-auto">
            Founder & Lead Travel Advisor — Crafting Intentional Luxury Travel
            Experiences from San Juan, Puerto Rico
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 max-w-4xl mx-auto">
            {/* Left: caption */}
            <div className="hidden md:block">
              <p className="text-muted-foreground text-xs leading-relaxed italic">
                Daniel Santiago Díaz, founder of SJU Luxe Travel, in Portugal
              </p>
            </div>

            {/* Right: content */}
            <div>
              <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
                About
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3 mb-8">
                The Story Behind{" "}
                <span className="text-gold-gradient italic">SJU Luxe Travel</span>
              </h2>

              <div className="text-muted-foreground text-sm leading-relaxed space-y-5">
                <p>
                  Daniel Santiago Díaz is the founder of SJU Luxe Travel, a boutique travel advisory
                  headquartered in San Juan, Puerto Rico. With over a decade of luxury sales experience
                  across six continents, Daniel is a certified travel professional and independent agent
                  of NCM Concierge — one of the most respected concierge travel networks in the Americas.
                  Licensed in Florida (ST15578), California (2090937-50), Washington (UBID 603189022),
                  and Iowa (Agency #1202), he brings a uniquely strategic, client-centered approach to
                  crafting intentional travel experiences.
                </p>
                <p>
                  His career in travel began with the Puerto Rico Tourism Company, where he worked in
                  business development and gained deep insight into destination marketing and tourism
                  strategy. He later transitioned into luxury travel sales and international sales
                  management, building relationships with hotels, resorts, cruise lines, and tour
                  operators across the globe.
                </p>
                <p>
                  Holding an MBA in International Business, Daniel combines analytical rigor with
                  creative vision. He specializes in curated cruises, immersive multi-destination
                  itineraries, honeymoon planning, wellness retreats, and experience-driven travel
                  that goes far beyond the typical vacation package.
                </p>
                <p>
                  Daniel has traveled extensively across six continents—from the overwater villas of
                  the Maldives and the historic streets of Lisbon to the temples of India, the outback
                  of Australia, the deserts of Africa, and the cenotes of Mexico. This firsthand
                  knowledge allows him to recommend destinations, properties, and experiences with
                  genuine authority and personal insight.
                </p>
                <p>
                  As an independent agent of NCM Concierge, Daniel has access to an extensive network
                  of preferred travel partners, enabling him to secure exclusive amenities,
                  complimentary upgrades, resort credits, and VIP perks for his clients—benefits that
                  aren't available through direct online booking.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="mt-12 border-l-2 border-gold pl-6 py-2">
                <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed">
                  "Travel is not a luxury—it's an opportunity to explore the world with clarity,
                  ease, and intention."
                </p>
                <cite className="block mt-4 text-gold text-sm not-italic tracking-wide">
                  — Daniel Santiago Díaz
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
