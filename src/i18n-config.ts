export const i18n = {
  locales: ['en', 'pl'],
  defaultLocale: 'en',
} as const;

export type Locale = (typeof i18n)['locales'][number];
