import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import travelAgentDesk from "@/assets/travel-agent-desk.jpg";
import travelerAirport from "@/assets/traveler-airport.jpg";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Viajes de Lujo desde Puerto Rico",
  "provider": { "@type": "TravelAgency", "name": "SJU Luxe Travel", "url": "https://www.sjuluxetravel.com" },
  "areaServed": "Puerto Rico",
  "description": "Planificación de viajes de lujo saliendo desde Puerto Rico a destinos internacionales exclusivos.",
  "url": "https://www.sjuluxetravel.com/viajes-de-lujo-desde-puerto-rico",
  "availableLanguage": ["Spanish", "English"],
};

const ViajesDeLujo = () => {
  const { t, localPath } = useLanguage();
  const d = t.viajesDeLujo;

  return (
    <Layout>
      <SEOHead
        title="Viajes de Lujo desde Puerto Rico — Agente de Viajes Privado en San Juan | SJU Luxe Travel"
        description="Planifica tu próximo viaje de lujo desde Puerto Rico con SJU Luxe Travel. Itinerarios personalizados a las Maldivas, Europa, México y más — sin pasaporte, misma zona horaria, servicio completamente bilingüe."
        canonical="https://www.sjuluxetravel.com/viajes-de-lujo-desde-puerto-rico"
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
