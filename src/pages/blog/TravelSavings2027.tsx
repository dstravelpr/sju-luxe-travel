import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { AUTHOR, ORG_REF, HOSTNAME, buildGraph } from "@/lib/schema";
import { savingsCopy, savingsSources, SAVINGS_PATH, SAVINGS_REVIEW_DATE } from "@/content/travelSavings2027";
import heroImg from "@/assets/traveler-airport.jpg";
import portugalImg from "@/assets/destination-portugal.jpg";

export default function TravelSavings2027() {
  const { language, localPath } = useLanguage();
  const isEs = language === "es";
  const copy = savingsCopy[language];
  const schema = buildGraph(
    {
      "@type": "BlogPosting",
      headline: copy.title,
      description: copy.description,
      author: AUTHOR,
      publisher: ORG_REF,
      dateModified: SAVINGS_REVIEW_DATE,
      inLanguage: isEs ? "es-PR" : "en",
      creativeWorkStatus: "Draft",
      citation: savingsSources.map((source) => source.url),
    },
    {
      "@type": "FAQPage",
      mainEntity: copy.faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  );

  return (
    <Layout>
      <SEOHead
        title={savingsCopy.en.seoTitle}
        titleEs={savingsCopy.es.seoTitle}
        description={savingsCopy.en.description}
        descriptionEs={savingsCopy.es.description}
        ogType="article"
        noindex
        suppressCanonical
        schemaJson={schema}
      />
      <article className="bg-background pt-36 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <Link to={localPath("/blog")} className="mb-8 inline-flex items-center gap-2 text-sm text-gold underline">
            <ArrowLeft size={16} aria-hidden="true" />
            {isEs ? "Volver al blog" : "Back to blog"}
          </Link>
          <header className="mb-10">
            <p className="mb-4 text-xs font-body uppercase text-gold">
              {isEs ? "Borrador · No publicado" : "Draft · Not published"}
            </p>
            <h1 className="font-heading text-3xl leading-tight text-foreground md:text-5xl">{copy.title}</h1>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              <Link to={localPath("/about")} className="underline hover:text-gold">Daniel Santiago Díaz</Link>
              {isEs ? " · Agente de viaje · SJU Luxe Travel" : " · Travel agent · SJU Luxe Travel"}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {isEs ? "Revisado: " : "Reviewed: "}
              <time dateTime={SAVINGS_REVIEW_DATE}>{isEs ? "27 de noviembre de 2026" : "November 27, 2026"}</time>
            </p>
          </header>
          <img src={heroImg} alt={isEs ? "Viajero con equipaje en un aeropuerto" : "Traveler with luggage at an airport"} className="mb-10 aspect-video w-full rounded-lg object-cover" />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            {copy.intro.map((text) => <p key={text}>{text}</p>)}
            <section className="border-y border-border py-6" aria-labelledby="savings-answer">
              <h2 id="savings-answer" className="mb-3 font-heading text-2xl text-foreground">{copy.answerHeading}</h2>
              <p>{copy.answer}</p>
            </section>
            {copy.sections.map((section, index) => (
              <section key={section.title} className="pt-5">
                <h2 className="mb-4 font-heading text-2xl text-foreground">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
                </div>
                {section.source !== undefined && (
                  <p className="mt-4 text-sm">
                    {isEs ? "Fuente: " : "Source: "}
                    <a href={savingsSources[section.source].url} target="_blank" rel="noopener noreferrer" className="text-gold underline">{savingsSources[section.source].name}</a>
                  </p>
                )}
                {section.link && <Link to={localPath(section.link.path)} className="mt-4 inline-block text-gold underline">{section.link.label}</Link>}
                {index === 4 && <img src={portugalImg} loading="lazy" alt={isEs ? "Vista de Portugal, un destino para comparar en tu viaje de 2027" : "A view of Portugal, a destination to compare for a 2027 trip"} className="mt-8 aspect-video w-full rounded-lg object-cover" />}
              </section>
            ))}
            <section className="border-t border-border pt-8" aria-labelledby="savings-faq">
              <h2 id="savings-faq" className="mb-6 font-heading text-3xl text-foreground">{isEs ? "Preguntas frecuentes" : "Frequently asked questions"}</h2>
              {copy.faqs.map(({ question, answer }) => (
                <div key={question} className="mb-6">
                  <h3 className="mb-2 font-heading text-xl text-foreground">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </section>
            <section className="border-y border-border py-8">
              <h2 className="mb-4 font-heading text-2xl text-foreground">{copy.ctaTitle}</h2>
              <p className="mb-6">{copy.cta}</p>
              <Button asChild variant="outline" className="rounded-full border-gold text-gold">
                <Link to={localPath("/contact")}>{copy.ctaLabel}</Link>
              </Button>
            </section>
            <section className="pt-6">
              <h2 className="mb-4 font-heading text-xl text-foreground">{isEs ? "Fuentes y referencias" : "Sources and references"}</h2>
              <ul className="space-y-3 text-sm">
                {savingsSources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-gold underline">{source.name}</a></li>)}
              </ul>
            </section>
          </div>
          <section className="mt-16 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground" aria-labelledby="publishing-notes">
            <h2 id="publishing-notes" className="mb-6 font-heading text-2xl text-foreground">{isEs ? "Notas de publicación · No forman parte del artículo" : "Publishing notes · Not part of the article"}</h2>
            <dl className="space-y-5 break-words">
              <div><dt className="font-semibold text-foreground">SEO title ({copy.seoTitle.length})</dt><dd>{copy.seoTitle}</dd></div>
              <div><dt className="font-semibold text-foreground">Meta description ({copy.description.length})</dt><dd>{copy.description}</dd></div>
              <div><dt className="font-semibold text-foreground">URL</dt><dd>{localPath(SAVINGS_PATH)}</dd></div>
              <div><dt className="font-semibold text-foreground">{isEs ? "Palabra clave principal" : "Focus keyword"}</dt><dd>{isEs ? "cómo ahorrar en viajes 2027" : "save money on travel 2027"}</dd></div>
              <div><dt className="font-semibold text-foreground">{isEs ? "Palabras clave secundarias" : "Secondary keywords"}</dt><dd>{isEs ? "vuelos desde Puerto Rico, cuándo reservar vuelos, cruceros desde San Juan, cargos por planificación, costos de viaje" : "flights from Puerto Rico, when to book flights, cruises from San Juan, travel planning fees, total trip costs"}</dd></div>
              <div><dt className="font-semibold text-foreground">{isEs ? "Publicación prevista" : "Planned publication"}</dt><dd>{isEs ? "1 de diciembre de 2026, pendiente de aprobación. La fecha de publicación se añadirá al publicarlo." : "December 1, 2026, pending approval. The actual publication date will be added on release."}</dd></div>
              <div><dt className="font-semibold text-foreground">Canonical / hreflang</dt><dd>{isEs ? "Al publicar: versiones EN/ES con canonical propio y alternates. No se emiten en este borrador." : "On release: self-canonical EN/ES pages with language alternates. Not emitted for this draft."}<br />{HOSTNAME}{SAVINGS_PATH}<br />{HOSTNAME}/es{SAVINGS_PATH}</dd></div>
              <div><dt className="font-semibold text-foreground">{isEs ? "Datos estructurados" : "Structured data"}</dt><dd>{isEs ? "BlogPosting con autor y fecha de revisión; FAQPage generado de las mismas respuestas visibles. No garantiza preguntas destacadas en Google." : "BlogPosting with author and review date; FAQPage generated from the exact visible answers. Does not guarantee FAQ displays in Google."}</dd></div>
              <div><dt className="font-semibold text-foreground">{isEs ? "Estado" : "Status"}</dt><dd>{isEs ? "Solo en vista previa. No publicado, no indexable y fuera del índice del blog y sitemap." : "Preview only. Unpublished, noindex and excluded from the blog index and sitemap."}</dd></div>
            </dl>
          </section>
        </div>
      </article>
    </Layout>
  );
}