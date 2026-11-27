import { ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export const GooglePreferredSource = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const blogPath = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  if (blogPath !== "/blog" && !blogPath.startsWith("/blog/")) return null;

  return (
    <section className="bg-background px-6 py-12 text-center">
      <div className="mx-auto max-w-3xl border-t border-border pt-8">
        <Button
          asChild
          variant="outline"
          className="h-auto max-w-full rounded-full border-gold px-6 py-3 font-body text-xs uppercase text-foreground hover:bg-accent hover:text-gold"
        >
          <a
            href="https://www.google.com/preferences/source?q=www.sjuluxetravel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whitespace-normal">
              {language === "es"
                ? "Añadir como fuente preferida en Google"
                : "Add as a preferred source on Google"}
            </span>
            <ExternalLink aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  );
};