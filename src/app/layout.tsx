import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { UIProvider } from '@/contexts/ui-context';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seishin Dreams',
  description: 'TO DO',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-full h-[70px]' />
        <UIProvider>
          <Header />
          {children}
          <Footer />
          <Drawer />
        </UIProvider>
      </body>
    </html>
  );
}
