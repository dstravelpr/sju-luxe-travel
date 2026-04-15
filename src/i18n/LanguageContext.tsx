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

  // Language is now controlled by user preference, not URL prefix
  // Default to Spanish since this is a Puerto Rico site
  const language: Language = "es";

  // Update html lang attribute
  document.documentElement.lang = "es-PR";

  const setLanguage = (_lang: Language) => {
    // No-op: language switching via URL prefix has been removed
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

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
