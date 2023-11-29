import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';
import { Header } from './_components/Header';
import { Drawer } from './_components/Drawer';
import { UIProvider } from '@/_contexts/ui-context';
import { Footer } from './_components/Footer';
import { Locale, i18n } from '../../i18n-config';
import { LocaleProvider } from '@/_contexts/locale-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seishin Dreams',
  description: 'TO DO',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params: { lang } }: { children: ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className='w-full h-[70px]' />
        <LocaleProvider locale={lang}>
          <UIProvider>
            <Header />
            {children}
            <Footer />
            <Drawer />
          </UIProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
