import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const LunaDeMiel = () => {
  const { t, localPath } = useLanguage();
  const d = t.lunaDeMiel;

  const destinations = [
    d.destMaldives,
    d.destSantorini,
    d.destAmalfi,
    d.destBoraBora,
    d.destPortugal,
    d.destTuscany,
  ];

  return (
    <Layout>
      <SEOHead
        title="Luna de Miel de Lujo desde Puerto Rico — Planificación Personalizada | SJU Luxe Travel"
        description="Planifica tu luna de miel de lujo desde San Juan, Puerto Rico. Las Maldivas, Amalfi, Santorini, Bora Bora y más — itinerarios románticos a medida con beneficios exclusivos de NCM Concierge."
        canonical="https://www.sjuluxetravel.com/luna-de-miel-de-lujo"
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
              <div key={i}>
                <h3 className="font-heading text-xl text-foreground mt-8">{dest.title}</h3>
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

export default LunaDeMiel;
