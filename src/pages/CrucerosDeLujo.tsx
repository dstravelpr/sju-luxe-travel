import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import azamaraImg from "@/assets/ocean/azamara.png";
import crystalImg from "@/assets/ocean/crystal.png";
import exploraImg from "@/assets/ocean/explora.png";
import regentImg from "@/assets/ocean/regent.png";
import seabournImg from "@/assets/ocean/seabourn.png";
import seadreamImg from "@/assets/ocean/seadream.png";
import silverseaImg from "@/assets/ocean/silversea.png";
import vikingImg from "@/assets/ocean/viking.png";
import oceaniaImg from "@/assets/ocean/oceania.png";

const CrucerosDeLujo = () => {
  const { t, localPath } = useLanguage();
  const d = t.crucerosDeLujo;

  const lineKeys = ["ritzCarlton", "explora", "virgin", "azamara", "crystal", "oceania", "regent", "silversea", "viking", "seabourn", "seadream"] as const;
  const lineImages: Partial<Record<typeof lineKeys[number], string>> = {
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
        title="Cruceros de Lujo desde San Juan, Puerto Rico — Planificación VIP | SJU Luxe Travel"
        description="Planifica tu crucero de lujo desde San Juan, Puerto Rico con SJU Luxe Travel. Acceso a cruceros premium, cabinas exclusivas, excursiones privadas y beneficios VIP de NCM Concierge que no obtienes reservando directo."
        canonical="https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan"
        schemaJson={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Cruceros de Lujo desde San Juan Puerto Rico",
              "provider": { "@type": "TravelAgency", "name": "SJU Luxe Travel", "url": "https://www.sjuluxetravel.com" },
              "areaServed": "San Juan, Puerto Rico",
              "description": "Planificación VIP de cruceros de lujo que salen desde el puerto de San Juan, Puerto Rico, con beneficios exclusivos NCM Concierge.",
              "url": "https://www.sjuluxetravel.com/cruceros-de-lujo-desde-san-juan"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuáles son las mejores líneas de cruceros de lujo que salen de San Juan en 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En 2026, San Juan cuenta con salidas de las principales líneas de lujo del mundo: Ritz-Carlton Yacht Collection, Explora Journeys, Virgin Voyages, Azamara, Crystal Cruises, Oceania, Regent Seven Seas, Silversea, Viking Ocean, Seabourn y SeaDream Yacht Club."
                  }
                }
              ]
            }
          ]
        }}
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

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Why}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.whyIntro}</p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.whyItems.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-foreground">{title}</strong>{desc ? ` — ${desc}` : ""}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Lines}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.linesIntro}</p>

            {lineKeys.map((key) => (
              <div key={key}>
                <h3 className="font-heading text-xl text-foreground mt-8">{d.lines[key].title}</h3>
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
                <p className="text-muted-foreground text-base leading-relaxed">{d.lines[key].desc}</p>
              </div>
            ))}

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Itineraries}</h2>
            <ul className="space-y-3 text-muted-foreground text-base leading-relaxed list-none">
              {d.itineraries.map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-foreground">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Groups}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.groupsIntro}</p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.groupItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-foreground mt-10">{d.h2Port}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{d.portIntro}</p>
            <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-none">
              {d.portItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-gold mt-1">•</span>{item}</li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="prose-custom space-y-6 mt-10">
            <h2 className="font-heading text-2xl text-foreground">{d.h2FAQ}</h2>
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="q1" className="border-border/30">
                <AccordionTrigger className="text-foreground font-body text-base hover:text-gold">
                  {d.faqQ1}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {d.faqA1}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm">
              {d.riverCruisesLink}{" "}
              <Link to={localPath("/cruceros-fluviales-de-lujo-desde-puerto-rico")} className="text-gold hover:underline">
                {d.riverCruisesLinkText}
              </Link>
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

export default CrucerosDeLujo;
