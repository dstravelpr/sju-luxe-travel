import {
  createContext,
  useContext,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { en } from "./translations/en";
import { es } from "./translations/es";

type Language = "en" | "es";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  localPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

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

  useEffect(() => {
    document.documentElement.lang = language === "es" ? "es-PR" : "en";
    try {
      localStorage.setItem("lang", language);
    } catch {
      /* noop */
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
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

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
