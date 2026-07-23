import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import maldivesImg from "@/assets/honeymoon/maldives.png";
import santoriniImg from "@/assets/honeymoon/santorini.png";
import amalfiImg from "@/assets/honeymoon/amalfi.png";
import boraBoraImg from "@/assets/honeymoon/bora-bora.png";
import portugalImg from "@/assets/honeymoon/portugal.png";
import tuscanyImg from "@/assets/honeymoon/tuscany.png";
import { FAQSection } from "@/components/FAQSection";

const FAQ_ITEMS = [
  {
    q: "¿Cuándo debo empezar a planificar mi luna de miel de lujo?",
    a: "Lo ideal es comenzar entre 6 y 12 meses antes de tu boda. Esto garantiza disponibilidad en los mejores resorts y suites, y nos da tiempo para personalizar cada detalle de tu experiencia.",
  },
  {
    q: "¿Qué destinos recomiendas para una luna de miel desde Puerto Rico?",
    a: "Las Maldivas, Portugal, Santorini, Italia y el Caribe de lujo son nuestros destinos más solicitados para parejas. Seleccionamos propiedades que ofrecen detalles románticos exclusivos para nuestra clientela.",
  },
  {
    q: "¿Está incluida la decoración romántica y los detalles especiales?",
    a: "Coordinamos con los hoteles para arreglos de flores, cenas privadas en la playa, tratamientos de spa, y sorpresas personalizadas según tus preferencias.",
  },
  {
    q: "¿Trabajan con parejas que tienen fechas de viaje flexibles?",
    a: "Sí. La flexibilidad de fechas nos permite conseguir mejores tarifas y disponibilidad en propiedades exclusivas. Cuéntanos tu rango de fechas y lo optimizamos.",
  },
];

import { ORG_REF, WEBSITE_REF, buildGraph, breadcrumbList } from "@/lib/schema";

const PAGE_URL = "https://www.sjuluxetravel.com/luna-de-miel-de-lujo";
const schema = buildGraph(
  {
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Luna de Miel de Lujo desde Puerto Rico",
    isPartOf: WEBSITE_REF,
    inLanguage: "es",
  },
  {
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Luxury Honeymoon Travel Planning",
    description:
      "Personalized luxury honeymoon itineraries from Puerto Rico to top romantic destinations worldwide.",
    provider: ORG_REF,
    areaServed: { "@type": "State", name: "Puerto Rico" },
    serviceType: "Honeymoon Travel Planning",
    url: PAGE_URL,
  },
  breadcrumbList([
    { name: "Home", url: "https://www.sjuluxetravel.com" },
    { name: "Luna de Miel de Lujo", url: PAGE_URL },
  ])
);

const LunaDeMiel = () => {
  const { t, localPath } = useLanguage();
  const d = t.lunaDeMiel;

  const destinations = [
    { ...d.destMaldives, img: maldivesImg },
    { ...d.destSantorini, img: santoriniImg },
    { ...d.destAmalfi, img: amalfiImg },
    { ...d.destBoraBora, img: boraBoraImg },
    { ...d.destPortugal, img: portugalImg },
    { ...d.destTuscany, img: tuscanyImg },
  ];

  return (
    <Layout>
      <SEOHead
        title="Luna de Miel de Lujo desde PR | SJU Luxe Travel"
        description="Planifica tu luna de miel de lujo desde San Juan, PR. Maldivas, Amalfi, Santorini, Bora Bora y más — itinerarios románticos a medida."
        canonical="https://www.sjuluxetravel.com/luna-de-miel-de-lujo"
        schemaJson={schema}
      />

      <article className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{d.label}</span>
          <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
            {d.h1} <span className="text-gold-gradient italic">{d.h1Highlight}</span>
          </h1>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">{d.p1}</p>
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.p2 }} />

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Destinations}</h2>
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.destinationsIntro }} />

            {destinations.map((dest, i) => (
              <div key={i} className="mt-8">
                <div className="overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <img
                    src={dest.img}
                    alt={dest.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="font-heading text-xl text-foreground">{dest.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{dest.desc}</p>
              </div>
            ))}

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Includes}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.includesIntro}</p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.includesItems.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-foreground">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2When}</h2>
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.whenP1 }} />
            <p className="text-muted-foreground text-base leading-relaxed">{d.whenP2}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2NoPassport}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.noPassportP}</p>

            <p className="text-muted-foreground text-base leading-relaxed">
              ¿Quieres ideas concretas por destino? Lee nuestros <Link to={localPath("/blog/luna-de-miel-puerto-rico-2026")} className="text-gold hover:text-gold-light underline">mejores destinos de luna de miel 2026 desde Puerto Rico</Link> con itinerarios, rutas de vuelo y presupuestos.
            </p>
          </div>

          <FAQSection heading="Preguntas Frecuentes sobre Lunas de Miel" items={FAQ_ITEMS} />

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {d.ctaTitle} <span className="text-gold-gradient italic">{d.ctaTitleHighlight}</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">{d.ctaDescription}</p>
            <Link to={localPath("/contact")} className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105">
              {d.ctaButton}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default LunaDeMiel;
