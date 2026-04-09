import { Link } from "react-router-dom";
import { ArrowRight, Compass, Heart, Users, Globe, Shield, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import heroBg from "@/assets/hero-beach-sunset.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";
import portugalImg from "@/assets/destination-portugal.jpg";
import mexicoImg from "@/assets/destination-mexico.jpg";

const services = [
  {
    icon: Compass,
    title: "Curated Itineraries",
    description:
      "Thoughtfully designed travel plans that go beyond tourist spots to reveal authentic, immersive experiences. Every itinerary is handcrafted based on your preferences, interests, and travel style—so no two journeys are ever the same.",
  },
  {
    icon: Heart,
    title: "Intentional Experiences",
    description:
      "Every journey is crafted with purpose—creating memories that transform and inspire. Whether it's a private sunset dinner on a beach in the Maldives or a cultural walking tour through Lisbon, we design moments that matter.",
  },
  {
    icon: Users,
    title: "Personal Concierge",
    description:
      "Dedicated support from planning to return, ensuring every detail exceeds expectations. Your personal travel concierge handles reservations, transfers, special requests, and real-time support throughout your trip.",
  },
  {
    icon: Globe,
    title: "International Expertise",
    description:
      "With firsthand experience across six continents and deep relationships with global travel partners, we provide insider knowledge and exclusive access to the world's most captivating destinations.",
  },
  {
    icon: Shield,
    title: "Booking Protection",
    description:
      "Travel with confidence knowing your investment is protected. We guide you through comprehensive travel insurance options and advocate on your behalf if plans change or issues arise during your trip.",
  },
  {
    icon: Star,
    title: "Luxury Accommodations",
    description:
      "Hand-selected boutique hotels, five-star resorts, and private villas chosen for exceptional service, stunning locations, and authentic character. We match you with accommodations that elevate every stay.",
  },
];

const destinations = [
  {
    image: maldivesImg,
    title: "The Maldives",
    subtitle: "Paradise on Earth",
  },
  {
    image: portugalImg,
    title: "Portugal",
    subtitle: "Old World Charm",
  },
  {
    image: mexicoImg,
    title: "Mexico",
    subtitle: "Ancient & Vibrant",
  },
];

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "SJU Luxe Travel",
  url: "https://sjuluxetravel.com",
  description:
    "SJU Luxe Travel is a boutique luxury travel agency based in San Juan, Puerto Rico, specializing in curated international travel experiences to destinations including the Maldives, Portugal, Mexico, and beyond.",
  telephone: "+16179355714",
  email: "dsantiago@ncmconcierge.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Juan",
    addressRegion: "PR",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/sjuluxetravel/",
    "https://www.facebook.com/sjuluxetravel",
    "https://www.linkedin.com/company/sju-luxe-travel",
  ],
  founder: {
    "@type": "Person",
    name: "Daniel Santiago Díaz",
    jobTitle: "Founder & Lead Travel Advisor",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  priceRange: "$$-$$$$",
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Boutique Luxury Travel Agency | San Juan, Puerto Rico"
        description="SJU Luxe Travel crafts curated luxury vacations to the Maldives, Portugal, Mexico & beyond. Boutique travel agency in San Juan, PR."
        canonical="https://sjuluxetravel.com/"
        schemaJson={schemaJson}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Luxury beach sunset — SJU Luxe Travel"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="font-body text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in text-destructive-foreground">
            Based in San Juan, Puerto Rico
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up">
            Travel is not a Luxury,
            <br />
            <span className="text-gold-gradient italic">It's an Opportunity</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay">
            Your gateway to extraordinary international destinations. We specialize in crafting
            unforgettable, intentional journeys to the world's most captivating places—from overwater villas in the Maldives to the sun-kissed coasts of Portugal and the vibrant culture of Mexico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(43,74%,49%,0.6)] hover:scale-105"
            >
              Explore Destinations
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gold-border text-gold font-body text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-300 hover:bg-gold/10"
            >
              Start Planning
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full gold-border flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-8">
              Intentional Travel,{" "}
              <span className="text-gold-gradient italic">Extraordinary Memories</span>
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-5">
              <p>
                SJU Luxe Travel is a boutique travel advisory based in San Juan, Puerto Rico,
                specializing in intentional, experience-driven travel. We believe travel is not a
                luxury—it's an opportunity to slow down, connect, and live more fully.
              </p>
              <p>
                Our approach blends expert planning, insider knowledge, and firsthand experience to
                ensure every trip is thoughtfully designed—not rushed, generic, or overwhelming. From
                honeymoons and milestone celebrations to cultural immersions and wellness retreats,
                we tailor each itinerary around what matters most to you.
              </p>
              <p>
                Founded by Daniel Santiago Díaz, a travel professional with over a decade of
                experience in luxury sales and international tourism, SJU Luxe Travel brings a
                uniquely personal, hands-on approach to travel advisory.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body tracking-wide"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4">
              Exceptional <span className="text-gold-gradient italic">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
              From the first consultation to your return home, we provide end-to-end luxury travel planning designed around your vision, budget, and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-background gold-border gold-border-hover rounded-lg text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
                Featured
              </span>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4">
                Popular <span className="text-gold-gradient italic">Destinations</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-xl">
                Explore our most sought-after international destinations, each handpicked for its unique blend of natural beauty, cultural richness, and world-class hospitality.
              </p>
            </div>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body tracking-wide"
            >
              View All Destinations
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Link
                key={index}
                to="/destinations"
                className="group relative aspect-[4/5] overflow-hidden rounded-lg gold-border gold-border-hover"
              >
                <img
                  src={dest.image}
                  alt={`${dest.title} — luxury travel destination curated by SJU Luxe Travel`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">
                    {dest.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl text-foreground">{dest.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
              Why SJU Luxe Travel
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-8">
              The Difference Is in the <span className="text-gold-gradient italic">Details</span>
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-5">
              <p>
                What sets SJU Luxe Travel apart is our commitment to intentional, personalized service. We don't sell cookie-cutter vacation packages. Instead, we take the time to understand your travel goals, design bespoke itineraries, and handle every logistical detail so you can focus entirely on the experience.
              </p>
              <p>
                As an independent agent of NCM Concierge, we have access to an extensive network of preferred travel partners, including luxury hotel chains, boutique properties, cruise lines, and destination management companies.
              </p>
              <p>
                Whether you're planning a romantic getaway, a family adventure, a destination wedding, or a solo retreat, we bring the same level of care, expertise, and personal attention to every trip we design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
            Ready to Begin Your <span className="text-gold-gradient italic">Journey?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let us help you plan an unforgettable international travel experience. Whether you have a destination in mind or need inspiration, our team is ready to design a journey tailored to your dreams.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold-gradient text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(43,74%,49%,0.6)] hover:scale-105"
          >
            Start Planning Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
