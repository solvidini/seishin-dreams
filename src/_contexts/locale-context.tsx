'use client';

import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { getDictionary } from '@/get-dictionary';
import { Locale, i18n } from '@/i18n-config';
import defaultDictionary from '../dictionaries/en.json';

type Dictionary = typeof defaultDictionary;

interface LocaleContextProps {
  isLoading: boolean;
  locale: Locale;
  locales: typeof i18n.locales;
  dictionary: Dictionary;
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
      const d = await getDictionary(locale);
      setDictionary(d);
    };
    loadDictionary();
  }, [locale]);

  const getLocaleUrl = (url: string) => (url === '/' ? `/${locale}` : `/${locale}${url}`);

  const getLocaleLanguage = (locale: Locale) => {
    switch (locale) {
      case 'pl':
        return '🇵🇱 Polski';
      case 'en':
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
  };

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};
