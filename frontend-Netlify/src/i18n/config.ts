import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import va from "./locales/va.json";
import de from "./locales/de.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import nl from "./locales/nl.json";
import ru from "./locales/ru.json";

export const lSupportedLanguages = ["es", "va", "en", "de", "fr", "nl", "ru"] as const;
export type TLanguageCode = (typeof lSupportedLanguages)[number];

export const lLanguageOptions: Array<{ code: TLanguageCode; label: string; name: string; flag: string }> = [
  { code: "es", label: "ES", name: "Español", flag: "🇪🇸" },
  { code: "va", label: "VA", name: "Valencià", flag: "🟡" },
  { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
  { code: "de", label: "DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "FR", name: "Français", flag: "🇫🇷" },
  { code: "nl", label: "NL", name: "Nederlands", flag: "🇳🇱" },
  { code: "ru", label: "RU", name: "Русский", flag: "🇷🇺" },
];

const STORAGE_KEY = "auton-provincia-language";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      va: { translation: va },
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
      nl: { translation: nl },
      ru: { translation: ru },
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
  } catch (error) {
    console.error("No se pudo guardar el idioma en localStorage:", error);
  }
});

export default i18n;
