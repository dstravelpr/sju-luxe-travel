import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

const aboutImages = [
  { src: "/about/IMG_2975.jpg", alt: "Daniel Santiago Díaz exploring international destinations" },
  { src: "/about/IMG_9540.jpg", alt: "Daniel Santiago Díaz luxury travel experience" },
  { src: "/about/travel-1.jpg", alt: "Daniel Santiago Díaz on a curated travel adventure" },
  { src: "/about/Image_18.jpg", alt: "Daniel Santiago Díaz travel advisor SJU Luxe Travel" },
  { src: "/about/IMG_0941.jpg", alt: "Daniel Santiago Díaz destination scouting" },
  { src: "/about/IMG_3214.jpg", alt: "Daniel Santiago Díaz international travel professional" },
  { src: "/about/IMG_2086.jpg", alt: "Daniel Santiago Díaz founder of SJU Luxe Travel" },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About | SJU Luxe Travel — Meet Your Advisor"
        description="Meet Daniel Santiago Díaz, founder of SJU Luxe Travel. Over a decade of experience crafting intentional luxury travel from San Juan, Puerto Rico."
        canonical="https://sjuluxetravel.com/about"
      />

      {/* Hero with featured photo */}
      <section className="pt-32 pb-16 bg-background text-center">
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

          {/* Hero portrait */}
          <div className="mt-10 max-w-md mx-auto">
            <img
            src="/about/hero-portrait.jpg"
              alt="Daniel Santiago Díaz, founder of SJU Luxe Travel, luxury travel advisor in Puerto Rico"
              className="w-full rounded-lg shadow-2xl object-cover aspect-[3/4]"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
              About
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3">
              The Story Behind{" "}
              <span className="text-gold-gradient italic">SJU Luxe Travel</span>
            </h2>
          </div>

          {/* Bio with side image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="text-muted-foreground text-sm leading-relaxed space-y-5">
              <p>
                Daniel Santiago Díaz is the founder of SJU Luxe Travel, a boutique travel advisory
                headquartered in San Juan, Puerto Rico. With over a decade of luxury sales experience
                across six continents, Daniel is a certified travel professional and independent agent
                of NCM Concierge — one of the most respected concierge travel networks in the Americas.
              </p>
              <p>
                His career in travel began with the Puerto Rico Tourism Company, where he worked in
                business development and gained deep insight into destination marketing and tourism
                strategy. He later transitioned into luxury travel sales and international sales
                management, building relationships with hotels, resorts, cruise lines, and tour
                operators across the globe.
              </p>
            </div>
            <img
              src="/about/IMG_9540.jpg"
              alt="Daniel Santiago Díaz luxury travel experience abroad"
              className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <img
              src="/about/travel-1.jpg"
              alt="Daniel Santiago Díaz on a curated travel adventure"
              className="w-full rounded-lg shadow-xl object-cover aspect-[4/3] order-2 md:order-1"
              loading="lazy"
            />
            <div className="text-muted-foreground text-sm leading-relaxed space-y-5 order-1 md:order-2">
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="text-muted-foreground text-sm leading-relaxed space-y-5">
              <p>
                As an independent agent of NCM Concierge, Daniel has access to an extensive network
                of preferred travel partners, enabling him to secure exclusive amenities,
                complimentary upgrades, resort credits, and VIP perks for his clients—benefits that
                aren't available through direct online booking.
              </p>
            </div>
            <img
              src="/about/Image_18.jpg"
              alt="Daniel Santiago Díaz travel advisor SJU Luxe Travel"
              className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          {/* Quote */}
          <blockquote className="max-w-3xl mx-auto mt-8 border-l-2 border-gold pl-6 py-2">
            <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed">
              "Travel is not a luxury—it's an opportunity to explore the world with clarity,
              ease, and intention."
            </p>
            <cite className="block mt-4 text-gold text-sm not-italic tracking-wide">
              — Daniel Santiago Díaz
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-10">
            Around the <span className="text-gold-gradient italic">World</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[aboutImages[4], aboutImages[5], aboutImages[6]].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full rounded-lg shadow-lg object-cover aspect-square"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
