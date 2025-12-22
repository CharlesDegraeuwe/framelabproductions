import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../public/locales/en/en.json';
import nl from '../public/locales/nl/nl.json';

console.log("aangeroepen");

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			nl: { translation: nl }
		},
		fallbackLng: 'nl',
		interpolation: {
			escapeValue: false
		},
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage']
		}
	});

export default i18n;