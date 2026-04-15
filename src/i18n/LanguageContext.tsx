import { createContext, useContext, useMemo, useState, useEffect, type ReactNode } from "react";
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

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" ? "en" : "es";
  });

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "es-PR";
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  // No prefix needed — all routes are canonical
  const localPath = (path: string) => path;

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

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
