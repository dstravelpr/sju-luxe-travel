import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Heart, Users, Globe, Shield, Star, ChevronDown, Sparkles, Gift, Crown, LifeBuoy } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { Picture } from "@/components/Picture";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-beach-sunset.jpg";
import heroBgWebp from "@/assets/hero-beach-sunset.webp";
import logo from "@/assets/logo.png";
import maldivesImg from "@/assets/destination-maldives.jpg";
import maldivesImgWebp from "@/assets/destination-maldives.webp";
import portugalImg from "@/assets/destination-portugal.jpg";
import portugalImgWebp from "@/assets/destination-portugal.webp";
import mexicoImg from "@/assets/destination-mexico.jpg";
import mexicoImgWebp from "@/assets/destination-mexico.webp";
import cruiseImg from "@/assets/ocean/ritz-carlton.jpg";




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

import { ORG_ID, WEBSITE_REF, buildGraph } from "@/lib/schema";

const schemaJson = buildGraph(
  {
    "@type": "WebPage",
    "@id": "https://www.sjuluxetravel.com/#webpage",
    url: "https://www.sjuluxetravel.com/",
    name: "SJU Luxe Travel — Luxury Travel Agency in San Juan, Puerto Rico",
    isPartOf: WEBSITE_REF,
    about: { "@id": ORG_ID },
    inLanguage: "en",
  },
  {
    "@type": "LocalBusiness",
    "@id": "https://www.sjuluxetravel.com/#localbusiness",
    name: "SJU Luxe Travel",
    image: "https://www.sjuluxetravel.com/og-image.jpg",
    telephone: "+16179355714",
    email: "info@sjuluxetravel.com",
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
        name: "¿Vale la pena contratar un agente de viaje?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Un agente de viaje te da acceso a mejoras de habitación gratuitas, créditos de resort, check-in anticipado y atención personalizada 24/7 que no puedes obtener reservando directamente en línea.",
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
  }
);


const Index = () => {
  const { t, localPath } = useLanguage();

  const services = [
    { icon: Compass, title: t.home.services.curatedItineraries, description: t.home.services.curatedItinerariesDesc },
    { icon: Heart, title: t.home.services.intentionalExperiences, description: t.home.services.intentionalExperiencesDesc },
    { icon: Users, title: t.home.services.personalConcierge, description: t.home.services.personalConciergeDesc },
    { icon: Globe, title: t.home.services.internationalExpertise, description: t.home.services.internationalExpertiseDesc },
    { icon: Shield, title: t.home.services.bookingProtection, description: t.home.services.bookingProtectionDesc },
    { icon: Star, title: t.home.services.luxuryAccommodations, description: t.home.services.luxuryAccommodationsDesc },
  ];

  const destinations = [
    { image: maldivesImg, imageWebp: maldivesImgWebp, title: t.home.maldives, subtitle: t.home.maldivesSub, to: localPath("/destinations/maldives") },
    { image: portugalImg, imageWebp: portugalImgWebp, title: t.home.portugal, subtitle: t.home.portugalSub, to: localPath("/destinations/portugal") },
    { image: mexicoImg, imageWebp: mexicoImgWebp, title: t.home.mexico, subtitle: t.home.mexicoSub, to: localPath("/destinations/mexico") },
    { image: cruiseImg, imageWebp: undefined, title: t.home.cruises, subtitle: t.home.cruisesSub, to: localPath("/cruceros-de-lujo-desde-san-juan") },
  ];

  const affiliations = [
    { name: t.home.trustNameTravelLeaders, qualifier: t.home.trustQualNetwork },
    { name: t.home.trustNameNcm, qualifier: t.home.trustQualConcierge },
    { name: t.home.trustNameAma, qualifier: t.home.trustQualCertified },
    { name: t.home.trustNameAvalon, qualifier: t.home.trustQualCertified },
    { name: t.home.trustNameRiverside, qualifier: t.home.trustQualCertified },
    { name: t.home.trustNameKoveli, qualifier: t.home.trustQualExpert },
  ];

  const perks = [
    { icon: Crown, title: t.home.perk1Title, description: t.home.perk1Desc },
    { icon: Gift, title: t.home.perk2Title, description: t.home.perk2Desc },
    { icon: Sparkles, title: t.home.perk3Title, description: t.home.perk3Desc },
    { icon: LifeBuoy, title: t.home.perk4Title, description: t.home.perk4Desc },
  ];



  return (
    <Layout>
      <SEOHead
        title="SJU Luxe Travel | Luxury Travel Agency San Juan Puerto Rico"
        description="Boutique luxury travel agency in San Juan, Puerto Rico. Bespoke itineraries to the Maldives, Portugal, Mexico & beyond with exclusive concierge perks."
        titleEs="Agencia de Viajes de Lujo en San Juan, PR | SJU Luxe Travel"
        descriptionEs="Agencia boutique de viajes de lujo en San Juan, PR. Itinerarios a medida a Maldivas, Portugal, México y más, con beneficios exclusivos de concierge."
        schemaJson={schemaJson}
        emitHreflang
      />

      {/* Hero Section */}
      <section className="hero-section relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <Picture src={heroBg} webpSrc={heroBgWebp} alt="Overwater villas at sunset — luxury travel curated by SJU Luxe Travel" width={1920} height={1080} className="ken-burns absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" decoding="async" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <img src={logo} alt="SJU Luxe Travel" className="hidden md:block h-28 w-28 mx-auto mb-10 animate-fade-in object-contain" />
          <h1 className="sr-only">Boutique Luxury Travel Agency in San Juan, Puerto Rico</h1>
          <div aria-hidden="true" className="hero-title font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.15] text-foreground mb-6 md:mb-8 animate-fade-in-up">
            {t.home.heroTitle1}
            <br />
            <span className="text-gold-gradient italic">{t.home.heroTitle2}</span>
          </div>
          <h2 className="hero-subtitle font-body text-[12px] md:text-sm tracking-[0.32em] uppercase text-gold mb-10 md:mb-12 animate-fade-in-up">
            {t.home.heroSubtitle}
          </h2>
          <div className="flex justify-center animate-fade-in-delay">
            <Link to={localPath("/contact")} className="hero-ghost-btn pill-cta inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold font-body text-xs font-semibold tracking-[0.25em] uppercase hover:bg-gold/10">
              {t.home.startPlanning}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-14 md:py-16 bg-charcoal border-y border-border/40" aria-label={t.home.trustLabel}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-5 mb-10">
            <span className="h-px w-10 bg-gold/30" />
            <p className="text-center font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground/80">
              {t.home.trustLabel}
            </p>
            <span className="h-px w-10 bg-gold/30" />
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-6xl mx-auto">
            {affiliations.map((item, index) => (
              <li
                key={item.name}
                className="group flex flex-col items-center justify-center text-center min-h-[7rem] px-4 py-6 border-b border-r border-border/40 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(6n)]:border-r-0 lg:border-b-0"
              >
                <span className="block font-heading text-lg md:text-xl text-cream/90 group-hover:text-gold transition-colors duration-500">
                  {item.name}
                </span>
                <span className="mt-3 block max-w-[9rem] font-body text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-muted-foreground/70">
                  {item.qualifier}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* About Section */}
      <Reveal as="section" className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.home.philosophyLabel}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mt-6 mb-10">
              {t.home.philosophyTitle1}{" "}
              <span className="text-gold-gradient italic">{t.home.philosophyTitle2}</span>
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed mb-10 space-y-6">
              <p>{t.home.heroDescription}</p>
              <p>{t.home.philosophyP1}</p>
              <p>{t.home.philosophyP2}</p>
              <p>{t.home.philosophyP3}</p>
            </div>
            <Link to={localPath("/about")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body tracking-wide">
              {t.home.learnMore}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Reveal>


      {/* Services Section */}
      <Reveal as="section" className="py-28 md:py-36 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.home.servicesLabel}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mt-6">
              {t.home.servicesTitle} <span className="text-gold-gradient italic">{t.home.servicesTitleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-8">{t.home.servicesDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-10 bg-background gold-border gold-border-hover rounded-sm text-center group transition-colors duration-500">
                <div className="w-14 h-14 mx-auto mb-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                  <service.icon size={22} className="text-gold" strokeWidth={1.25} />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Destination Showcase */}
      <Reveal as="section" className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.home.showcaseLabel}</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mt-6">
                {t.home.showcaseTitle} <span className="text-gold-gradient italic">{t.home.showcaseTitleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-6 max-w-xl">{t.home.destinationsDescription}</p>
            </div>
            <Link to={localPath("/destinations")} className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body tracking-wide">
              {t.home.viewAll}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((dest, index) => (
              <Link key={index} to={dest.to} className="group relative aspect-[3/4] overflow-hidden rounded-sm gold-border gold-border-hover">
                <Picture src={dest.image} webpSrc={dest.imageWebp} alt={`${dest.title} — luxury travel destination curated by SJU Luxe Travel`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-[11px] tracking-[0.25em] uppercase mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-700">{dest.subtitle}</p>
                  <h3 className="font-heading text-2xl text-foreground">{dest.title}</h3>
                  <span className="mt-4 block h-px w-0 bg-gold transition-all duration-700 group-hover:w-14" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Concierge Perks */}
      <Reveal as="section" className="py-28 md:py-36 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.home.perksLabel}</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mt-6">
              {t.home.perksTitle} <span className="text-gold-gradient italic">{t.home.perksTitleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-8">{t.home.perksDescription}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 max-w-6xl mx-auto">
            {perks.map((perk, index) => (
              <div key={index} className="text-center px-2">
                <perk.icon size={26} strokeWidth={1} className="text-gold mx-auto" />
                <span className="block h-px w-10 bg-gold/40 mx-auto my-6" />
                <h3 className="font-heading text-xl text-foreground mb-3">{perk.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Meet Your Travel Agent */}
      <Reveal as="section" className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center max-w-5xl mx-auto">
            <img
              src="/about/hero-portrait.jpg"
              alt={t.home.founderPhotoAlt}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover rounded-sm gold-border"
            />
            <div>
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{t.home.founderLabel}</span>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight text-foreground mt-6">{t.home.founderName}</h2>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-4">{t.home.founderRole}</p>
              <div className="text-muted-foreground text-lg leading-relaxed mt-8 space-y-5">
                <p>{t.home.founderP1}</p>
                <p>{t.home.founderP2}</p>
              </div>
              <Link to={localPath("/contact")} className="pill-cta mt-10 inline-flex items-center gap-3 px-8 py-3.5 border border-gold/60 text-gold font-body text-xs font-semibold tracking-[0.25em] uppercase hover:bg-gold/10 hover:border-gold">
                {t.home.founderCta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>


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

      {/* Final CTA Section */}
      <Reveal as="section" className="py-32 md:py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-8">
            {t.home.ctaTitle} <span className="text-gold-gradient italic">{t.home.ctaTitleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">{t.home.ctaDescription}</p>
          <Link to={localPath("/contact")} className="pill-cta inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold font-body text-xs font-semibold tracking-[0.25em] uppercase hover:bg-gold/10">
            {t.home.requestConsultation}
            <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>

    </Layout>
  );
};

export default Index;
