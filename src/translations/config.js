import global_en from "./en/global.json";
import global_pl from "./pl/global.json";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

const resources = {
  en: {
    global: global_en,
  },
  pl: {
    global: global_pl,
  },
};

i18next.use(initReactI18next).init({
  lng: "en",
  resources,
});
