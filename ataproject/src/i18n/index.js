import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translation.json";
import translationHy from "./locales/hy/translation.json";

const resources = {
    en: {
        translation: translationEn
    },
    hy: {
        translation: translationHy
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Սկզբնական լեզուն՝ English
    fallbackLng: "en", // fallback՝ English
    interpolation: {
        escapeValue: false
    },
    debug: true, // Debugging-ին օգնելու համար
});

export default i18n;
