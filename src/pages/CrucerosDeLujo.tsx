import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { FAQSection } from "@/components/FAQSection";
import { RelatedArticles } from "@/components/RelatedArticles";
import azamaraImg from "@/assets/ocean/azamara.png";
import crystalImg from "@/assets/ocean/crystal.png";
import exploraImg from "@/assets/ocean/explora.png";
import regentImg from "@/assets/ocean/regent.png";
import seabournImg from "@/assets/ocean/seabourn.png";
import seadreamImg from "@/assets/ocean/seadream.png";
import silverseaImg from "@/assets/ocean/silversea.png";
import vikingImg from "@/assets/ocean/viking.png";
import oceaniaImg from "@/assets/ocean/oceania.png";
import ritzCarltonImg from "@/assets/ocean/ritz-carlton.jpg";
import virginImg from "@/assets/ocean/virgin.jpg";
import virginCertImg from "@/assets/ocean/virgin-cert.png";

import { ORG_REF, WEBSITE_REF, buildGraph, breadcrumbList } from "@/lib/schema";

const PAGE_URL =
  "https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan";
const schema = buildGraph(
  {
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Cruceros desde San Juan, PR",
    isPartOf: WEBSITE_REF,
    inLanguage: "es",
  },
  {
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Cruise Planning from San Juan",
    description:
      "Curated cruise packages departing from the Port of San Juan, Puerto Rico.",
    provider: ORG_REF,
    areaServed: { "@type": "State", name: "Puerto Rico" },
    serviceType: "Cruise Planning",
    url: PAGE_URL,
  },
  breadcrumbList([
    { name: "Home", url: "https://www.sjuluxetravel.com" },
    { name: "Cruceros desde San Juan", url: PAGE_URL },
  ]),
);

const FAQ_ITEMS = [
  {
    q: "¿Qué líneas de cruceros salen desde San Juan, Puerto Rico?",
    a: "Desde el Puerto de San Juan operan itinerarios de líneas como Regent Seven Seas, Silversea, Oceania cruises y Celebrity cruises, con destinos al Caribe, Sudamérica y el Atlántico.",
  },
  {
    q: "¿Cuál es la diferencia entre un crucero regular y un Crucero?",
    a: "Los cruceros incluyen todo incluido auténtico: vinos y licores de calidad, excursiones en tierra, propinas, internet, y menor cantidad de pasajeros por barco para una experiencia más íntima.",
  },
  {
    q: "¿Necesito pasaporte para hacer un crucero desde San Juan?",
    a: "Para itinerarios con paradas fuera de EE. UU. se recomienda pasaporte válido. Los ciudadanos estadounidenses en itinerarios de vuelta al mismo puerto americano pueden usar identificación oficial, pero el pasaporte es siempre la mejor opción.",
  },
  {
    q: "¿Pueden reservar mi cabina, vuelos de conexión y hotel pre-crucero?",
    a: "Sí. Coordinamos el paquete completo: vuelos, hotel antes de embarque, traslados y la cabina del crucero, para que solo tengas que llegar y disfrutar.",
  },
];

const crucerosDeLujo = () => {
  const { t, localPath } = useLanguage();
  const d = t.crucerosDeLujo;

  const lineKeys = [
    "ritzCarlton",
    "explora",
    "virgin",
    "azamara",
    "crystal",
    "oceania",
    "regent",
    "silversea",
    "viking",
    "seabourn",
    "seadream",
  ] as const;
  const lineImages: Partial<Record<(typeof lineKeys)[number], string>> = {
    ritzCarlton: ritzCarltonImg,
    virgin: virginImg,
    explora: exploraImg,
    azamara: azamaraImg,
    crystal: crystalImg,
    oceania: oceaniaImg,
    regent: regentImg,
    silversea: silverseaImg,
    viking: vikingImg,
    seabourn: seabournImg,
    seadream: seadreamImg,
  };

  return (
    <Layout>
      <SEOHead
        title="Cruises from San Juan, PR | SJU Luxe Travel"
        description="Plan your cruise from San Juan, PR. Exclusive suites, private shore excursions and VIP perks through NCM Concierge."
        titleEs="Cruceros desde San Juan, PR | SJU Luxe Travel"
        descriptionEs="Planifica tu crucero desde San Juan, PR. Cabinas exclusivas, excursiones privadas y beneficios VIP de NCM Concierge."
        schemaJson={schema}
        emitHreflang
      />

      <article className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
            {d.label}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
            {d.h1}{" "}
            <span className="text-gold-gradient italic">{d.h1Highlight}</span>
          </h1>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.p1}
            </p>
            <p
              className="text-muted-foreground text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: d.p2 }}
            />

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Why}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.whyIntro}
            </p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.whyItems.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong className="text-foreground">{title}</strong>
                    {desc ? ` — ${desc}` : ""}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Lines}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.linesIntro}
            </p>

            {lineKeys.map((key) => (
              <div key={key}>
                <h3 className="font-heading text-xl text-foreground mt-8">
                  {d.lines[key].title}
                </h3>
                {lineImages[key] && (
                  <div className="my-4 overflow-hidden rounded-lg aspect-[4/3] gold-border">
                    <img
                      src={lineImages[key]}
                      alt={d.lines[key].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}
                <p className="text-muted-foreground text-base leading-relaxed">
                  {d.lines[key].desc}
                </p>
              </div>
            ))}

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Itineraries}
            </h2>
            <ul className="space-y-3 text-muted-foreground text-base leading-relaxed list-none">
              {d.itineraries.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong className="text-foreground">{title}</strong> —{" "}
                    {desc}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Groups}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.groupsIntro}
            </p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.groupItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">
              {d.h2Port}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {d.portIntro}
            </p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.portItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <RelatedArticles
            items={[
              {
                title: "Excursiones privadas en San Juan para cruceristas",
                href: "/blog/excursiones-de-lujo-san-juan-puerto-cruceros",
                category: "Excursiones",
              },
              {
                title: "Crucero fluvial por el Duero desde Puerto Rico",
                href: "/blog/crucero-fluvial-duero-desde-puerto-rico",
                category: "Cruceros Fluviales",
              },
              {
                title: "¿Vale la pena un agente de viajes en 2026?",
                href: "/blog/vale-la-pena-asesor-viajes-2026",
                category: "Guía",
              },
            ]}
          />

          <FAQSection
            heading="Preguntas Frecuentes sobre cruceros"
            items={FAQ_ITEMS}
          />

          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm">
              {d.riverCruisesLink}{" "}
              <Link
                to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")}
                className="text-gold hover:underline"
              >
                {d.riverCruisesLinkText}
              </Link>
            </p>
          </div>

          <div className="mt-16 text-center py-12 gold-border rounded-lg">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              {d.ctaTitle}{" "}
              <span className="text-gold-gradient italic">
                {d.ctaTitleHighlight}
              </span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              {d.ctaDescription}
            </p>
            <Link
              to={localPath("/contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-primary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43,74%,49%,0.5)] hover:scale-105"
            >
              {d.ctaButton}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default crucerosDeLujo;
