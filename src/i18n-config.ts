export const i18n = {
  locales: [
    'fr_FR', // France
    'it_IT', // Italy
    'pl_PL', // Poland
    'en_US', // USA
    'en_GB', // England
    'es_ES', // Spanish
    'de_DE', // Germany
    'cs_CZ', // Czech Republic
    'uk_UA', // Ukraine
  ],
  defaultLocale: 'en_US',
} as const;

export type Locale = (typeof i18n)['locales'][number];
