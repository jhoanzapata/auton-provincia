import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import de from "./locales/de.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import nl from "./locales/nl.json";

export const lSupportedLanguages = ["es", "de", "en", "fr", "nl"] as const;
export type TLanguageCode = (typeof lSupportedLanguages)[number];

export const lLanguageOptions: Array<{ code: TLanguageCode; label: string; flag: string }> = [
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "nl", label: "NL", flag: "🇳🇱" },
];

const STORAGE_KEY = "auton-provincia-language";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      de: { translation: de },
      en: { translation: en },
      fr: { translation: fr },
      nl: { translation: nl },
    },
    supportedLngs: lSupportedLanguages,
    fallbackLng: "es",
    defaultNS: "translation",
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lng",
      lookupLocalStorage: STORAGE_KEY,
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    load: "languageOnly",
    cleanCode: true,
    nonExplicitSupportedLngs: false,
    react: {
      useSuspense: false,
    },
  });

document.documentElement.lang = i18n.resolvedLanguage || i18n.language || "es";

i18n.on("languageChanged", (vLanguage) => {
  document.documentElement.lang = vLanguage;
  try {
    localStorage.setItem(STORAGE_KEY, vLanguage);
  } catch {
    // ignore storage failures
  }
});

export default i18n;
