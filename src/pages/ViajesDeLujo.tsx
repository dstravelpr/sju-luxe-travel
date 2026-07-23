import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import travelAgentDesk from "@/assets/travel-agent-desk.jpg";
import travelerAirport from "@/assets/traveler-airport.jpg";
import { FAQSection } from "@/components/FAQSection";

const FAQ_ITEMS = [
  {
    q: "¿Cuáles son los mejores destinos de lujo para viajar desde Puerto Rico?",
    a: "Ofrecemos itinerarios a las Maldivas, Portugal, México, Italia y más. Todos los paquetes parten desde el Aeropuerto Internacional Luis Muñoz Marín (SJU), con conexiones optimizadas para minimizar el tiempo de viaje.",
  },
  {
    q: "¿Cómo reservo un viaje de lujo con SJU Luxe Travel?",
    a: "Completa el formulario de consulta en nuestra página de contacto y coordinaremos una llamada para conocer tus preferencias, fechas y presupuesto. No cobramos por la consulta inicial.",
  },
  {
    q: "¿Qué ventajas tiene contratar una agencia de viajes de lujo en lugar de reservar en línea?",
    a: "Como afiliados de NCM Concierge y Travel Leaders, tenemos acceso a upgrades gratuitos, créditos en resort y amenidades VIP que no están disponibles al reservar directamente.",
  },
  {
    q: "¿Cuánto tiempo antes debo planificar mi viaje de lujo?",
    a: "Recomendamos comenzar la planificación con al menos 3 a 6 meses de anticipación para los mejores destinos y categorías de habitación. Algunos cruceros de temporada alta requieren reserva con hasta un año de antelación.",
  },
];

import { ORG_REF, WEBSITE_REF, buildGraph, breadcrumbList } from "@/lib/schema";

const PAGE_URL = "https://www.sjuluxetravel.com/viajes-de-lujo-desde-puerto-rico";
const schema = buildGraph(
  {
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Viajes de Lujo desde Puerto Rico",
    isPartOf: WEBSITE_REF,
    inLanguage: "es",
  },
  {
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Luxury Travel Planning from Puerto Rico",
    description:
      "Bespoke luxury travel planning for international destinations departing from San Juan, Puerto Rico.",
    provider: ORG_REF,
    areaServed: { "@type": "State", name: "Puerto Rico" },
    serviceType: "Luxury Travel Planning",
    url: PAGE_URL,
  },
  breadcrumbList([
    { name: "Home", url: "https://www.sjuluxetravel.com" },
    { name: "Viajes de Lujo desde Puerto Rico", url: PAGE_URL },
  ])
);

const ViajesDeLujo = () => {
  const { t, localPath } = useLanguage();
  const d = t.viajesDeLujo;

  return (
    <Layout>
      <SEOHead
        title="Viajes de Lujo desde Puerto Rico | SJU Luxe Travel"
        description="Itinerarios de lujo personalizados desde PR a las Maldivas, Europa, México y más. Servicio bilingüe, sin pasaporte para destinos US."
        canonical={PAGE_URL}
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

            <figure className="my-8 overflow-hidden rounded-lg gold-border">
              <img
                src={travelAgentDesk}
                alt="Planificación de viaje de lujo: pasaporte, mapa y folletos sobre escritorio"
                loading="lazy"
                width={1280}
                height={832}
                className="w-full h-auto object-cover"
              />
            </figure>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Why}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.whyP1}</p>
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.whyP2 }} />
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.whyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground text-base leading-relaxed font-semibold">{d.whySummary}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Destinations}</h2>
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.destMaldives }} />
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.destPortugal }} />
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.destMexico }} />
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.destCaribbean }} />
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.destEurope }} />

            <figure className="my-8 overflow-hidden rounded-lg gold-border">
              <img
                src={travelerAirport}
                alt="Viajero elegante con maleta caminando por la terminal del aeropuerto"
                loading="lazy"
                width={1280}
                height={832}
                className="w-full h-auto object-cover"
              />
            </figure>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2HowItWorks}</h2>
            <ol className="space-y-3 text-muted-foreground text-base leading-relaxed list-none">
              {d.steps.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold font-semibold mt-0.5">{i + 1}.</span>
                  <span><strong className="text-foreground">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ol>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Occasions}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.occasionsP}</p>
            <p className="text-muted-foreground text-base leading-relaxed mt-4">
              {d.cruisesLink}{" "}
              <Link to={localPath("/cruceros-de-lujo-desde-san-juan")} className="text-gold hover:underline">{d.oceanCruises}</Link> {d.andText}{" "}
              <Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="text-gold hover:underline">{d.riverCruises}</Link>.
            </p>
          </div>

          <FAQSection heading="Preguntas Frecuentes" items={FAQ_ITEMS} />

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

export default ViajesDeLujo;
