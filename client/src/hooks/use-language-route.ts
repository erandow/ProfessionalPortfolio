import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

/**
 * Custom hook to handle language from the URL
 * - Extracts the language parameter from the URL
 * - Validates if it's a supported language
 * - Updates i18n language if needed
 */
export function useLanguageRoute() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Only change language if different from current and is a valid lang
    if (lang && lang !== i18n.language && i18n.languages.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  
  return {
    currentLanguage: i18n.language,
    dir: i18n.dir(),
    isRTL: i18n.dir() === 'rtl'
  };
}