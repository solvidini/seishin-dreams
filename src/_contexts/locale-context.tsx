'use client';

import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { fetchDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import defaultDictionary from '../dictionaries/empty.json';
import { getLocaleExtension } from '@/_utils';

type Dictionary = typeof defaultDictionary;

interface LocaleContextProps {
  isLoading: boolean;
  locale: Locale;
  locales: typeof i18n.locales;
  dictionary: Dictionary;
  localeExtension: string;
  getLocaleLanguage(locale: Locale): string;
  getLocaleUrl(url: string): string;
}

export const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const useLocale = (): LocaleContextProps => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return context;
};

export const LocaleProvider: FC<{ children: ReactNode; locale: Locale }> = ({ children, locale }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dictionary, setDictionary] = useState<Dictionary>(defaultDictionary);

  useEffect(() => {
    const loadDictionary = async () => {
      setIsLoading(true);
      const d = await fetchDictionary(locale);
      setDictionary(d);
    };
    loadDictionary();
  }, [locale]);

  const getLocaleUrl = (url: string) => (url === '/' ? `/${locale}` : `/${locale}${url}`);

  const getLocaleLanguage = (locale: Locale) => {
    switch (locale) {
      case 'fr_FR':
        return '🇫🇷 Français';
      case 'it_IT':
        return '🇮🇹 Italiano';
      case 'pl_PL':
        return '🇵🇱 Polski';
      case 'en_GB':
        return '🇬🇧 English';
      case 'es_ES':
        return '🇪🇸 Español';
      case 'de_DE':
        return '🇩🇪 Deutsch';
      case 'cs_CZ':
        return '🇨🇿 Čeština';
      case 'uk_UA':
        return '🇺🇦 Українська';
      case 'en_US':
      default:
        return '🇺🇸 English';
    }
  };

  const contextValue: LocaleContextProps = {
    isLoading,
    locale,
    locales: i18n.locales,
    dictionary,
    getLocaleUrl,
    getLocaleLanguage,
    localeExtension: getLocaleExtension(locale),
  };

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};
