import { createContext, useContext, useMemo, type ReactNode } from "react";
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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { en, es };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const language: Language = location.pathname.startsWith("/en") ? "en" : "es";

  // Update html lang attribute
  document.documentElement.lang = language === "es" ? "es-PR" : "en";

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    if (lang === "en" && !currentPath.startsWith("/en")) {
      // Spanish → English: add /en prefix
      const newPath = currentPath === "/" ? "/en" : `/en${currentPath}`;
      navigate(newPath);
    } else if (lang === "es" && currentPath.startsWith("/en")) {
      // English → Spanish: remove /en prefix
      const newPath = currentPath.replace(/^\/en/, "") || "/";
      navigate(newPath);
    }
  };

  // Helper to prefix links with /en when in English mode
  const localPath = (path: string) => {
    if (language === "en") {
      return path === "/" ? "/en" : `/en${path}`;
    }
    return path;
  };

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language], localPath }),
    [language, location.pathname]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
