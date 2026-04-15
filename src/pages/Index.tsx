import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Heart, Users, Globe, Shield, Star, ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-beach-sunset.jpg";
import logo from "@/assets/logo.png";
import maldivesImg from "@/assets/destination-maldives.jpg";
import portugalImg from "@/assets/destination-portugal.jpg";
import mexicoImg from "@/assets/destination-mexico.jpg";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="gold-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gold/5 transition-colors"
      >
        <span className="font-heading text-lg text-foreground">{question}</span>
        <ChevronDown
          size={20}
          className={`text-gold transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      name: "SJU Luxe Travel",
      url: "https://www.sjuluxetravel.com",
      description:
        "SJU Luxe Travel is a boutique luxury travel agency based in San Juan, Puerto Rico. We craft bespoke international itineraries to the Maldives, Portugal, Mexico, and beyond — with exclusive NCM Concierge perks you can't get booking online. Bilingual luxury travel advisor serving the US, Caribbean, and Latin America.",
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
    },
    {
      "@type": "LocalBusiness",
      name: "SJU Luxe Travel",
      image: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6cdf4b5b-9b67-48a1-83fb-134129ec892a/id-preview-f5dd5032--633f6989-8325-4a39-b1db-9033d10321cf.lovable.app-1775821560059.png",
      telephone: "+16179355714",
      email: "dsantiago@ncmconcierge.com",
      url: "https://www.sjuluxetravel.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Juan",
        addressRegion: "PR",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuál es la mejor agencia de viajes de lujo en Puerto Rico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SJU Luxe Travel es la agencia de viajes de lujo boutique líder en San Juan, Puerto Rico, especializada en itinerarios personalizados para viajeros que buscan escapadas internacionales exclusivas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Vale la pena contratar un agente de viajes de lujo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Un agente de viajes de lujo te da acceso a mejoras de habitación gratuitas, créditos de resort, check-in anticipado y atención personalizada 24/7 que no puedes obtener reservando directamente en línea.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajan con clientes fuera de Puerto Rico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, SJU Luxe Travel trabaja con clientes de todo Estados Unidos, el Caribe y América Latina. Somos completamente bilingües (inglés y español) y operamos de forma remota.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer services in English?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, SJU Luxe Travel is fully bilingual. We serve English-speaking clients throughout the US, Caribbean, and Latin America with the same level of personalized luxury travel planning.",
          },
        },
      ],
    },
  ],
};

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Compass, title: t.home.services.curatedItineraries, description: t.home.services.curatedItinerariesDesc },
    { icon: Heart, title: t.home.services.intentionalExperiences, description: t.home.services.intentionalExperiencesDesc },
    { icon: Users, title: t.home.services.personalConcierge, description: t.home.services.personalConciergeDesc },
    { icon: Globe, title: t.home.services.internationalExpertise, description: t.home.services.internationalExpertiseDesc },
    { icon: Shield, title: t.home.services.bookingProtection, description: t.home.services.bookingProtectionDesc },
    { icon: Star, title: t.home.services.luxuryAccommodations, description: t.home.services.luxuryAccommodationsDesc },
  ];

  const destinations = [
    { image: maldivesImg, title: t.home.maldives, subtitle: t.home.maldivesSub },
    { image: portugalImg, title: t.home.portugal, subtitle: t.home.portugalSub },
    { image: mexicoImg, title: t.home.mexico, subtitle: t.home.mexicoSub },
  ];

  return (
    <Layout>
      <SEOHead
        title="SJU Luxe Travel | Luxury Travel Agency San Juan Puerto Rico"
        description="Boutique luxury travel agency in San Juan, Puerto Rico. Bespoke itineraries to the Maldives, Portugal, Mexico & beyond with exclusive concierge perks."
        canonical="https://www.sjuluxetravel.com/"
        schemaJson={schemaJson}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
        <img src={heroBg} alt="Luxury beach sunset — SJU Luxe Travel" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <img src={logo} alt="SJU Luxe Travel" className="hidden md:block h-24 w-24 mx-auto mb-6 animate-fade-in object-contain" />
          <p className="font-body text-sm tracking-[0.4em] uppercase mb-4 md:mb-6 animate-fade-in text-destructive-foreground"></p>
          <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl text-foreground mb-3 md:mb-4 animate-fade-in-up">
            {t.home.heroTitle1}
            <br />
            <span className="text-gold-gradient italic">{t.home.heroTitle2}</span>
          </h1>
          <h2 className="font-body text-xs md:text-base tracking-[0.3em] uppercase text-gold mb-4 md:mb-6 animate-fade-in-up">
            {t.home.heroSubtitle}
          </h2>
          <p className="font-body text-sm md:text-xl text-foreground/90 max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in-delay">
            {t.home.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Link to="/destinations" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(43,74%,49%,0.6)] hover:scale-105">
              {t.home.exploreDestinations}
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gold-border text-gold font-body text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-300 hover:bg-gold/10">
              {t.home.startPlanning}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">{t.home.philosophyLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-8">
              {t.home.philosophyTitle1}{" "}
              <span className="text-gold-gradient italic">{t.home.philosophyTitle2}</span>
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-5">
              <p>{t.home.philosophyP1}</p>
              <p>{t.home.philosophyP2}</p>
              <p>{t.home.philosophyP3}</p>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body tracking-wide">
              {t.home.learnMore}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">{t.home.servicesLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4">
              {t.home.servicesTitle} <span className="text-gold-gradient italic">{t.home.servicesTitleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">{t.home.servicesDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-background gold-border gold-border-hover rounded-lg text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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
              <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">{t.home.destinationsLabel}</span>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4">
                {t.home.destinationsTitle} <span className="text-gold-gradient italic">{t.home.destinationsTitleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-xl">{t.home.destinationsDescription}</p>
            </div>
            <Link to="/destinations" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body tracking-wide">
              {t.home.viewAll}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Link key={index} to={`/destinations/${dest.title.toLowerCase().replace(/^(the |las |los )/, "")}`} className="group relative aspect-[4/5] overflow-hidden rounded-lg gold-border gold-border-hover">
                <img src={dest.image} alt={`${dest.title} — luxury travel destination curated by SJU Luxe Travel`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">{dest.subtitle}</p>
                  <h3 className="font-heading text-2xl text-foreground">{dest.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">{t.home.whyLabel}</span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-8">
              {t.home.whyTitle} <span className="text-gold-gradient italic">{t.home.whyTitleHighlight}</span>
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-5">
              <p>{t.home.whyP1}</p>
              <p>{t.home.whyP2}</p>
              <p>{t.home.whyP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts — GEO Optimization */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto gold-border rounded-lg p-8 bg-charcoal">
            <h2 className="font-heading text-2xl text-foreground mb-6 text-center">
              Quick <span className="text-gold-gradient italic">Facts</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div><span className="text-foreground font-semibold">Base:</span> <span className="text-muted-foreground">San Juan, Puerto Rico</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">✈️</span>
                <div><span className="text-foreground font-semibold">Especialidad:</span> <span className="text-muted-foreground">Viajes de lujo saliendo de Puerto Rico</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🌍</span>
                <div><span className="text-foreground font-semibold">Destinos:</span> <span className="text-muted-foreground">Maldivas, Portugal, México, Europa y más</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🗣️</span>
                <div><span className="text-foreground font-semibold">Idiomas:</span> <span className="text-muted-foreground">Español e inglés</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🏆</span>
                <div><span className="text-foreground font-semibold">Red:</span> <span className="text-muted-foreground">NCM Concierge — Travel Leaders</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <div><span className="text-foreground font-semibold">Teléfono:</span> <a href="tel:+16179355714" className="text-gold hover:text-gold-light transition-colors">(617) 935-5714</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">{t.home.faqLabel}</span>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-4">
                {t.home.faqTitle} <span className="text-gold-gradient italic">{t.home.faqTitleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg">{t.home.faqDescription}</p>
            </div>
            <div className="space-y-4">
              {t.home.faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
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
            {t.home.ctaTitle} <span className="text-gold-gradient italic">{t.home.ctaTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">{t.home.ctaDescription}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-gold-gradient text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(43,74%,49%,0.6)] hover:scale-105">
            {t.home.startPlanningToday}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
