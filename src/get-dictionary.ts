import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  fr_FR: () => import('./dictionaries/fr.json').then((m) => m.default),
  it_IT: () => import('./dictionaries/it.json').then((m) => m.default),
  pl_PL: () => import('./dictionaries/pl.json').then((m) => m.default),
  en_US: () => import('./dictionaries/en.json').then((m) => m.default),
  en_GB: () => import('./dictionaries/en.json').then((m) => m.default),
  es_ES: () => import('./dictionaries/es.json').then((m) => m.default),
  de_DE: () => import('./dictionaries/de.json').then((m) => m.default),
  cs_CZ: () => import('./dictionaries/cs.json').then((m) => m.default),
  uk_UA: () => import('./dictionaries/uk.json').then((m) => m.default),
};

export const fetchDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en_US();
