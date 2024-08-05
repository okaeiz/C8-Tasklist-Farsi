import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en.json";
import translationFA from "./locales/fa.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
