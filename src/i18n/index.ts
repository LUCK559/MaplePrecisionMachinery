import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译资源
import enCommon from '../locales/en/common.json';
import enNavigation from '../locales/en/navigation.json';
import enProducts from '../locales/en/products.json';
import enHome from '../locales/en/home.json';
import enAbout from '../locales/en/about.json';
import enContact from '../locales/en/contact.json';
import frCommon from '../locales/fr/common.json';
import frNavigation from '../locales/fr/navigation.json';
import frProducts from '../locales/fr/products.json';
import frHome from '../locales/fr/home.json';
import frAbout from '../locales/fr/about.json';
import frContact from '../locales/fr/contact.json';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        navigation: enNavigation,
        products: enProducts,
        home: enHome,
        about: enAbout,
        contact: enContact,
      },
      fr: {
        common: frCommon,
        navigation: frNavigation,
        products: frProducts,
        home: frHome,
        about: frAbout,
        contact: frContact,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
