import { useMemo, useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { en } from "./translations/en";
import { es } from "./translations/es";
import {
  LanguageContext,
  useLanguage,
  type Language,
  type Translations,
} from "./languageContext";

export { useLanguage };
export type { Language };

const translations: Record<Language, Translations> = { en, es };

const detectLangFromPath = (pathname: string): Language =>
  /^\/es(\/|$)/.test(pathname) ? "es" : "en";

const stripPrefix = (pathname: string): string =>
  pathname.replace(/^\/(en|es)(\/|$)/, "/").replace(/\/$/, "") || "/";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Language is derived from the URL — single source of truth.
  const language: Language = detectLangFromPath(location.pathname);

  // First visit: if the visitor's device is in Spanish and they haven't picked
  // a language yet, open the Spanish version. The toggle then switches to English.
  useEffect(() => {
    try {
      if (localStorage.getItem("langChosen")) return;
      const prefersEs = (navigator.languages?.[0] || navigator.language || "")
        .toLowerCase()
        .startsWith("es");
      if (prefersEs && detectLangFromPath(location.pathname) === "en") {
        const base = stripPrefix(location.pathname);
        const target = base === "/" ? "/es" : `/es${base}`;
        navigate(target + location.search + location.hash, { replace: true });
      }
    } catch {
      /* noop */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "es" ? "es-PR" : "en";
    try {
      localStorage.setItem("lang", language);
    } catch {
      /* noop */
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem("langChosen", lang);
    } catch {
      /* noop */
    }
    const base = stripPrefix(location.pathname);
    const target = lang === "es" ? (base === "/" ? "/es" : `/es${base}`) : base;
    if (target !== location.pathname) {
      navigate(target + location.search + location.hash, { replace: false });
    }
  };

  const localPath = (path: string) => {
    if (language !== "es") return path;
    if (path === "/") return "/es";
    return path.startsWith("/es/") || path === "/es" ? path : `/es${path}`;
  };

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language], localPath }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language, location.pathname],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
