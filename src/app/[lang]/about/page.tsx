'use client';

import Image from 'next/image';
import { Locale } from '@/i18n-config';
import { useLocale } from '@/_contexts/locale-context';

export default function About({ params: { lang } }: { params: { lang: Locale } }) {
  const { dictionary: d } = useLocale();

  return (
    <main className='min-h-screen mb-4 max-w-[900px] flex flex-col items-center gap-6 p-4 md:p-6 text-justify mx-auto'>
      <h3 className='text-xl md:self-start'>{d.about?.title}</h3>
      <Image src='/betta-fish.png' alt='Betta Fish' width={300} height={225} priority />
      <article className='flex flex-col gap-4'>
        <p>{d.about?.description[0]}</p>
        <p>{d.about?.description[1]}</p>
        <p>{d.about?.description[2]}</p>
      </article>
    </main>
  );
}
