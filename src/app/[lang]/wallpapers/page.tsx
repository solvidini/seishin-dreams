'use client';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';

export default function Wallpapers() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center'>
      <PageTitle>{`🎨 ${d.wallpapers?.title} 🎨`}</PageTitle>
      <div>Wallpapers - link to Pinterest</div>
    </main>
  );
}
