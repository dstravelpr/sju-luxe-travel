import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import amaLogo from "@/assets/amawaterways-certified_logo.jpg";
import riversideLogo from "@/assets/riverside-certified_logo.jpg";
import avalonLogo from "@/assets/avalon-certified_logo.png";
import danubeImg from "@/assets/rivers/danube.png";
import rhineImg from "@/assets/rivers/rhine.png";
import seineImg from "@/assets/rivers/seine.png";
import douroImg from "@/assets/rivers/douro.png";
import nileImg from "@/assets/rivers/nile.png";
import mekongImg from "@/assets/rivers/mekong.png";

const riverImages = [danubeImg, rhineImg, seineImg, douroImg, nileImg, mekongImg];
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Cruceros Fluviales de Lujo — Agente Certificado desde Puerto Rico",
      "description": "Agente de viajes certificado por AmaWaterways, Avalon Waterways y Riverside Luxury Cruises. Planificación completa de cruceros fluviales de lujo para viajeros de Puerto Rico.",
      "provider": {
        "@type": "TravelAgency",
        "name": "SJU Luxe Travel",
        "url": "https://www.sjuluxetravel.com",
        "address": { "@type": "PostalAddress", "addressLocality": "San Juan", "addressRegion": "PR", "addressCountry": "US" }
      },
      "areaServed": { "@type": "State", "name": "Puerto Rico" },
      "serviceType": "River Cruise Planning",
      "url": "https://www.sjuluxetravel.com/cruceros-fluviales-de-lujo-desde-puerto-rico"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "¿En qué se diferencia un crucero fluvial de uno oceánico?", "acceptedAnswer": { "@type": "Answer", "text": "Los cruceros fluviales tienen barcos más pequeños (100–190 pasajeros), navegan ríos históricos y atracan en el centro de las ciudades." } },
        { "@type": "Question", "name": "¿Por qué reservar con un agente certificado?", "acceptedAnswer": { "@type": "Answer", "text": "Las certificaciones oficiales dan acceso a tarifas preferenciales, beneficios a bordo exclusivos y soporte directo." } },
        { "@type": "Question", "name": "¿Cuál es la mejor época para un crucero fluvial en Europa?", "acceptedAnswer": { "@type": "Answer", "text": "Primavera y otoño son las temporadas más populares. El mercado navideño de diciembre es una experiencia única." } }
      ]
    }
  ]
};

const CrucerosFluviales = () => {
  const { t, localPath } = useLanguage();
  const d = t.crucerosFluviales;

  return (
    <Layout>
      <SEOHead
        title="Cruceros Fluviales de Lujo desde Puerto Rico — Agente Certificado | SJU Luxe Travel"
        description="Planifica tu crucero fluvial de lujo desde Puerto Rico con un agente de viajes certificado por AmaWaterways, Avalon Waterways y Riverside Luxury Cruises."
        canonical="https://www.sjuluxetravel.com/cruceros-fluviales-de-lujo-desde-puerto-rico"
        schemaJson={schema}
      />

      <article className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">{d.label}</span>
          <h1 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-8">
            {d.h1} <span className="text-gold-gradient italic">{d.h1Highlight}</span>
          </h1>

          <div className="flex flex-wrap gap-3 mb-10">
            {d.certifications.map((cert, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 gold-border rounded-full text-xs font-body tracking-wide text-gold">
                <Award size={14} />
                {cert}
              </span>
            ))}
          </div>

          <div className="prose-custom space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.introP }} />

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Different}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.differentP}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Certifications}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.certificationsIntro}</p>

            <h3 className="font-heading text-xl text-foreground mt-8">{d.amaTitle}</h3>
            <div className="flex items-start gap-6 mt-3">
              <img src={amaLogo} alt="AmaWaterways Certified Advisor" className="w-36 rounded border border-border/30 flex-shrink-0" />
              <p className="text-muted-foreground text-base leading-relaxed">{d.amaDesc}</p>
            </div>

            <h3 className="font-heading text-xl text-foreground mt-8">{d.avalonTitle}</h3>
            <div className="flex items-start gap-6 mt-3">
              <img src={avalonLogo} alt="Avalon Waterways Specialist" className="w-28 flex-shrink-0" />
              <p className="text-muted-foreground text-base leading-relaxed">{d.avalonDesc}</p>
            </div>

            <h3 className="font-heading text-xl text-foreground mt-8">{d.riversideTitle}</h3>
            <div className="flex items-start gap-6 mt-3">
              <img src={riversideLogo} alt="Riverside Luxury Cruises Specialist" className="w-28 rounded-full flex-shrink-0" />
              <p className="text-muted-foreground text-base leading-relaxed">{d.riversideDesc}</p>
            </div>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2OtherLines}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.otherLinesIntro}</p>

            <h3 className="font-heading text-xl text-foreground mt-8">{d.vikingTitle}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{d.vikingDesc}</p>

            <h3 className="font-heading text-xl text-foreground mt-8">{d.uniworldTitle}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{d.uniworldDesc}</p>

            <h3 className="font-heading text-xl text-foreground mt-8">{d.scenicTitle}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{d.scenicDesc}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Destinations}</h2>
            {d.riverDestinations.map(([title, desc], i) => (
              <div key={i} className="mt-8">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border/30 mb-4">
                  <img src={riverImages[i]} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <h3 className="font-heading text-xl text-foreground">{title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mt-2">{desc}</p>
              </div>
            ))}

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Logistics}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.logisticsIntro}</p>
            <ol className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.logisticsSteps.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold font-semibold mt-0.5 min-w-[20px]">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="text-muted-foreground text-base leading-relaxed mt-4">{d.logisticsP}</p>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2FAQ}</h2>
            <Accordion type="single" collapsible className="mt-4">
              {d.faqItems.map((faq, i) => (
                <AccordionItem key={i} value={`q${i + 1}`} className="border-border/30">
                  <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default CrucerosFluviales;
