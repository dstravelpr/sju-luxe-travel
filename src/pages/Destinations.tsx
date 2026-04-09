import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import maldivesImg from "@/assets/destination-maldives.jpg";
import portugalImg from "@/assets/destination-portugal.jpg";
import mexicoImg from "@/assets/destination-mexico.jpg";

const destinations = [
  {
    subtitle: "Paradise on Earth",
    title: "The Maldives",
    image: maldivesImg,
    imageAlt: "The Maldives — luxury travel destination by SJU Luxe Travel",
    description:
      "Crystal-clear turquoise waters meet pristine white sand beaches in one of the most breathtaking archipelagos on the planet. The Maldives offers an unparalleled escape into overwater villas perched above vibrant coral reefs, world-class snorkeling and scuba diving, private beach dinners under the stars, and some of the most exclusive luxury resorts in the world. Whether you're celebrating a honeymoon, an anniversary, or simply seeking total serenity, the Maldives delivers an experience that stays with you long after you leave. Resorts like Ithaafushi Maldives, Huvawalhi, and Conrad Rangali Island provide the perfect backdrop for unforgettable moments.",
    location: "Indian Ocean",
    duration: "7-14 days",
    guests: "2+ guests",
    highlights: [
      "Overwater villas",
      "Snorkeling & diving",
      "Private beach dinners",
      "Spa retreats",
      "Dolphin cruises",
      "Underwater restaurants",
    ],
    imagePosition: "left" as const,
  },
  {
    subtitle: "Old World Charm",
    title: "Portugal",
    image: portugalImg,
    imageAlt: "Portugal — luxury travel destination by SJU Luxe Travel",
    description:
      "From Lisbon's historic cobblestone streets and iconic tram lines to the sun-kissed beaches of the Algarve, Portugal is a destination that captivates every type of traveler. Savor world-renowned Port wines in the Douro Valley, explore the fairy-tale palaces of Sintra, wander through the medieval alleyways of Porto, and immerse yourself in the haunting melodies of Fado music. Portugal offers a perfect blend of rich maritime heritage, vibrant culture, exceptional cuisine, and warm hospitality—all at an incredible value compared to other European destinations. Whether you're a couple seeking romance, a family looking for adventure, or a solo traveler chasing inspiration, Portugal has something extraordinary to offer.",
    location: "Western Europe",
    duration: "8-12 days",
    guests: "2-6 guests",
    highlights: [
      "Historic Lisbon tours",
      "Port wine tastings",
      "Algarve beaches",
      "Sintra palaces",
      "Fado music experiences",
      "Douro Valley cruises",
    ],
    imagePosition: "right" as const,
  },
  {
    subtitle: "Rich Culture & Beauty",
    title: "Mexico",
    image: mexicoImg,
    imageAlt: "Mexico — luxury travel destination by SJU Luxe Travel",
    description:
      "From the turquoise waters of the Riviera Maya and the ancient Mayan ruins of Tulum and Chichén Itzá to the colorful colonial cities of Oaxaca and San Miguel de Allende, Mexico offers an extraordinary tapestry of experiences. Dive into sacred cenotes hidden in the Yucatán jungle, savor world-class cuisine that earned UNESCO recognition, explore vibrant local markets, and experience a culture that seamlessly blends thousands of years of history with modern luxury. Mexico's diverse landscapes—from Pacific coast beaches to mountain highlands—make it one of the most versatile and rewarding destinations in the world. Whether you seek relaxation, adventure, or cultural immersion, Mexico delivers on every front.",
    location: "North America",
    duration: "7-14 days",
    guests: "2-8 guests",
    highlights: [
      "Riviera Maya beaches",
      "Mayan ruins at Tulum",
      "Cenote swimming",
      "Mexico City exploration",
      "Authentic cuisine tours",
      "Oaxaca cultural experiences",
    ],
    imagePosition: "left" as const,
  },
];

const DestinationCard = ({
  destination,
}: {
  destination: (typeof destinations)[0];
}) => {
  const imageOnLeft = destination.imagePosition === "left";

  return (
    <div className="py-16 border-t border-border/30 first:border-t-0">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${
          imageOnLeft ? "" : "md:[direction:rtl]"
        }`}
      >
        {/* Image */}
        <div className={`${imageOnLeft ? "" : "md:[direction:ltr]"}`}>
          <div className="aspect-[4/3] overflow-hidden gold-border rounded-sm">
            <img
              src={destination.image}
              alt={destination.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-muted-foreground text-xs mt-2 italic">
            {destination.imageAlt}
          </p>
        </div>

        {/* Content */}
        <div className={`${imageOnLeft ? "" : "md:[direction:ltr]"}`}>
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
            {destination.subtitle}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-6">
            {destination.title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {destination.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-xs mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gold" />
              {destination.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-gold" />
              {destination.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-gold" />
              {destination.guests}
            </span>
          </div>

          {/* Highlights */}
          <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-3">
            Highlights
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {destination.highlights.map((h) => (
              <span
                key={h}
                className="px-3 py-1.5 gold-border rounded-full text-xs text-muted-foreground hover:border-gold transition-colors"
              >
                {h}
              </span>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
          >
            Inquire Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <Layout>
      <SEOHead
        title="Destinations | SJU Luxe Travel — Maldives, Portugal, Mexico & More"
        description="Explore luxury travel destinations curated by SJU Luxe Travel: The Maldives, Portugal, Mexico, and beyond."
        canonical="https://sjuluxetravel.com/destinations"
      />

      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          {destinations.map((dest, i) => (
            <DestinationCard key={i} destination={dest} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
