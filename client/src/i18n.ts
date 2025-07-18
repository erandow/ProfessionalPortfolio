import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // Load translations from /public/locales
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    // Supported languages
    supportedLngs: ['en', 'de', 'fa', 'ar'],
    
    interpolation: {
      escapeValue: false, // not needed for React
    },
    
    // Custom detection
    detection: {
      // Order and from where user language should be detected
      order: ['path', 'localStorage', 'navigator'],
      
      // Path detection for routing
      lookupFromPathIndex: 0,
      
      // Cache user language on localStorage
      caches: ['localStorage'],
      
      // Optional cookie settings
      lookupCookie: 'i18next'
    }
  });

export default i18n;