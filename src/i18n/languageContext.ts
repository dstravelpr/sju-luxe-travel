import { createContext, useContext } from "react";
import type { en } from "./translations/en";

export type Language = "en" | "es";
export type Translations = typeof en;

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  localPath: (path: string) => string;
}

// Kept in a provider-free module so Vite HMR never swaps the context identity
// when the provider component changes.
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
