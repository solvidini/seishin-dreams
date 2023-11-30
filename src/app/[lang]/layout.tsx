import type { Metadata } from 'next';
import { Inter, Caveat, Playpen_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import classNames from 'classnames';

import './globals.css';
import { Header } from './_components/Header';
import { Drawer } from './_components/Drawer';
import { UIProvider } from '@/_contexts/ui-context';
import { Footer } from './_components/Footer';
import { Locale, i18n } from '../../i18n-config';
import { LocaleProvider } from '@/_contexts/locale-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
const playpen_sans = Playpen_Sans({ subsets: ['latin'], variable: '--font-playpen' });

export const metadata: Metadata = {
  title: 'Seishin Dreams',
  description: 'TO DO',
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params: { lang } }: { children: ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={lang} className={classNames(inter.variable, caveat.variable, playpen_sans.variable)}>
      <body className={playpen_sans.className}>
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
