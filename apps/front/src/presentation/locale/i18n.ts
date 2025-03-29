import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esJson from "./es.json";
import enJson from "./en.json";

const lang = localStorage.getItem("i18nextLng") || "es";

i18n.use(initReactI18next).init({
  resources: {
    es: { ...esJson },
    en: { ...enJson },
  }, // Where we're gonna put translations' files
  lng: lang, // Set the initial language of the App
});
