import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Seishin Dreams - About Us',
  description: 'TO DO',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
