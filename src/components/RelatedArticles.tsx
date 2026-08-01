import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export interface RelatedArticleItem {
  title: string;
  href: string;
  category?: string;
}

interface RelatedArticlesProps {
  heading?: string;
  items: RelatedArticleItem[];
}

export const RelatedArticles = ({ heading, items }: RelatedArticlesProps) => {
  const { localPath, language } = useLanguage();
  const label =
    heading ?? (language === "es" ? "Sigue Leyendo" : "Related Articles");

  return (
    <section
      aria-label={label}
      className="mt-16 pt-10 border-t border-border/40"
    >
      <h2 className="font-heading text-2xl text-foreground mb-6">{label}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            to={localPath(item.href)}
            className="group block p-5 gold-border rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_-8px_hsl(43,74%,49%,0.4)]"
          >
            {item.category && (
              <span className="font-body text-gold text-[10px] tracking-[0.25em] uppercase block mb-2">
                {item.category}
              </span>
            )}
            <h3 className="font-heading text-base text-foreground group-hover:text-gold transition-colors leading-snug">
              {item.title}
            </h3>
            <span className="inline-flex items-center gap-1 mt-3 text-gold text-xs tracking-wide">
              {language === "es" ? "Leer" : "Read"} <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
