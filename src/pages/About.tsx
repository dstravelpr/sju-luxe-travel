import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

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
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Sobre SJU Luxe Travel — Asesor de Viajes de Lujo en Puerto Rico"
        description="Conoce a Daniel Santiago Díaz, asesor de viajes de lujo certificado y bilingüe en San Juan, Puerto Rico. Itinerarios exclusivos y beneficios NCM Concierge en seis continentes."
        canonical="https://www.sjuluxetravel.com/about"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Daniel Santiago Díaz",
          "jobTitle": "Luxury Travel Advisor",
          "worksFor": { "@type": "TravelAgency", "name": "SJU Luxe Travel", "url": "https://www.sjuluxetravel.com" },
          "address": { "@type": "PostalAddress", "addressLocality": "San Juan", "addressRegion": "PR", "addressCountry": "US" },
          "knowsLanguage": ["Spanish", "English"],
          "url": "https://www.sjuluxetravel.com/about"
        }}
      />

      <section className="pt-32 pb-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">{t.about.label}</span>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-4">
            Daniel Santiago Díaz — <span className="text-gold-gradient italic">Asesor de Viajes de Lujo en San Juan, Puerto Rico</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-xl mx-auto">{t.about.subtitle}</p>
          <div className="mt-10 max-w-md mx-auto">
            <img src="/about/hero-portrait.jpg" alt="Daniel Santiago Díaz, founder of SJU Luxe Travel, luxury travel advisor in Puerto Rico" className="w-full rounded-lg shadow-2xl object-cover aspect-[3/4]" loading="eager" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">{t.about.storyLabel}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3">
              {t.about.storyTitle}{" "}
              <span className="text-gold-gradient italic">{t.about.storyTitleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="text-muted-foreground text-sm leading-relaxed space-y-5">
              <p>{t.about.bioP1}</p>
              <p>{t.about.bioP2}</p>
            </div>
            <img src="/about/IMG_9540.jpg" alt="Daniel Santiago Díaz luxury travel experience abroad" className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]" loading="lazy" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <img src="/about/travel-1.jpg" alt="Daniel Santiago Díaz on a curated travel adventure" className="w-full rounded-lg shadow-xl object-cover aspect-[4/3] order-2 md:order-1" loading="lazy" />
            <div className="text-muted-foreground text-sm leading-relaxed space-y-5 order-1 md:order-2">
              <p>{t.about.bioP3}</p>
              <p>{t.about.bioP4}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="text-muted-foreground text-sm leading-relaxed space-y-5">
              <p>{t.about.bioP5}</p>
            </div>
            <img src="/about/Image_18.jpg" alt="Daniel Santiago Díaz travel advisor SJU Luxe Travel" className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]" loading="lazy" />
          </div>

          <blockquote className="max-w-3xl mx-auto mt-8 border-l-2 border-gold pl-6 py-2">
            <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed">
              "{t.about.quote}"
            </p>
            <cite className="block mt-4 text-gold text-sm not-italic tracking-wide">
              {t.about.quoteAuthor}
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-10">
            {t.about.galleryTitle} <span className="text-gold-gradient italic">{t.about.galleryTitleHighlight}</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[aboutImages[4], aboutImages[5], aboutImages[6]].map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className="w-full rounded-lg shadow-lg object-cover aspect-square" loading="lazy" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
