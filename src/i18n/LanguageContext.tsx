import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { en } from "./translations/en";
import { es } from "./translations/es";

type Language = "en" | "es";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { en, es };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem("sju-lang");
    const lang = stored === "en" ? "en" : "es";
    document.documentElement.lang = lang === "es" ? "es-PR" : "en";
    return lang;
  });

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    localStorage.setItem("sju-lang", lang);
    document.documentElement.lang = lang === "es" ? "es-PR" : "en";
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
