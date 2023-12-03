import { Locale } from '@/i18n-config';

export const getLocaleExtension = (locale: Locale) => {
  switch (locale) {
    case 'fr_FR':
      return 'fr';
    case 'it_IT':
      return 'it';
    case 'pl_PL':
    case 'uk_UA':
      return 'pl';
    case 'en_GB':
      return 'co.uk';
    case 'es_ES':
      return 'es';
    case 'de_DE':
    case 'cs_CZ':
      return 'de';
    case 'en_US':
    default:
      return 'com';
  }
};
