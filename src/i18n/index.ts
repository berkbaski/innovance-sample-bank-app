import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            tr: {
                translation: translationTR
            }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
