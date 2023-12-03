import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((m) => m.default),
  it: () => import('./dictionaries/it.json').then((m) => m.default),
  pl: () => import('./dictionaries/pl.json').then((m) => m.default),
  us: () => import('./dictionaries/en.json').then((m) => m.default),
  gb: () => import('./dictionaries/en.json').then((m) => m.default),
  es: () => import('./dictionaries/es.json').then((m) => m.default),
  de: () => import('./dictionaries/de.json').then((m) => m.default),
  cs: () => import('./dictionaries/cs.json').then((m) => m.default),
  uk: () => import('./dictionaries/uk.json').then((m) => m.default),
};

export const fetchDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.us();
