import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cn from './cn.json';
import de from './de.json';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import gr from './gr.json';
import jp from './jp.json';
import np from './np.json';
import pt from './pt.json';
import tr from './tr.json';

i18n.use(initReactI18next).init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      cn: {
        translation: cn
      },
      de: {
        translation: de
      },
      en: {
        translation: en
      },
      es: {
        translation: es
      },
      fr: {
        translation: fr
      },
      gr: {
        translation: gr
      },
      jp: {
        translation: jp
      },
      np: {
        translation: np
      },
      pt: {
        translation: pt
      },
      tr: {
        translation: tr
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  export default i18n;
