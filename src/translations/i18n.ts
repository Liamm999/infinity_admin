import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import dayjs from 'dayjs';

import { TRANSLATIONS_CN, TRANSLATIONS_EN } from '.';

export const DEFAULT_LANGUAGE = import.meta.env.VITE_LANGUAGE || 'en';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      format: function (value: any, format: any) {
        if (value instanceof Date) return dayjs(value).format(format);
        return value;
      }
    },
    resources: {
      cn: {
        translation: TRANSLATIONS_CN
      },
      en: {
        translation: TRANSLATIONS_EN
      }
    },
    fallbackLng: 'en'
  });

void i18n.changeLanguage(DEFAULT_LANGUAGE);
