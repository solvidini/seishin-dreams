import { Locale } from '@/i18n-config';

export const getLocaleExtension = (locale: Locale) => {
  switch (locale) {
    case 'fr':
      return 'fr';
    case 'it':
      return 'it';
    case 'pl':
    case 'uk':
      return 'pl';
    case 'gb':
      return 'co.uk';
    case 'es':
      return 'es';
    case 'de':
    case 'cs':
      return 'de';
    case 'us':
    default:
      return 'com';
  }
};
