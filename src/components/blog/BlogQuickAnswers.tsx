import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

type Bi = { en: string; es: string };
export type QuickAnswer = { q: Bi; a: Bi };
export type RelatedLink = { to: string; label: Bi };

interface Props {
  heading: Bi;
  items: QuickAnswer[];
  related: RelatedLink[];
}

/** Short, practical Q&A plus related internal links, appended to existing blog posts. */
export const BlogQuickAnswers = ({ heading, items, related }: Props) => {
  const { language, localPath } = useLanguage();
  const l = language === "es" ? "es" : "en";
  return (
    <section className="mt-12" data-section="quick-answers">
      <h2 className="font-heading text-2xl text-foreground mb-6">{heading[l]}</h2>
      <div className="space-y-6">
        {items.map((it) => (
          <div key={it.q.en} className="border-l border-gold/40 pl-5">
            <h3 className="font-heading text-lg text-foreground mb-2">{it.q[l]}</h3>
            <p className="text-muted-foreground leading-relaxed">{it.a[l]}</p>
          </div>
        ))}
      </div>
      <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold mt-10 mb-4">
        {l === "es" ? "Sigue leyendo" : "Keep reading"}
      </h3>
      <ul className="space-y-2">
        {related.map((r) => (
          <li key={r.to}>
            <Link to={localPath(r.to)} className="text-gold hover:text-gold-light underline">
              {r.label[l]}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
