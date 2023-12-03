export const i18n = {
  locales: [
    'fr', // France
    'it', // Italy
    'pl', // Poland
    'us', // USA
    'gb', // England
    'es', // Spanish
    'de', // Germany
    'cs', // Czech Republic
    'uk', // Ukraine
  ],
  defaultLocale: 'us',
} as const;

export type Locale = (typeof i18n)['locales'][number];
