'use client';

import { BackgroundVideo } from './_components/BackgroundVideo';
import { LocaleSwitcher } from '@/app/_components/LocaleSwitcher';
import { useLocale } from '@/_contexts/locale-context';
import { SeishinDreamsSVG } from '../_svg/seishin-dreams';

export default function Home() {
  const { dictionary: d } = useLocale();

  return (
    <main className='relative overflow-auto min-h-screen w-full fade-in'>
      <BackgroundVideo />
      <div className='z-1 absolute top-2 left-2 bg-black/70 rounded-md'>
        <LocaleSwitcher dropdownPosition='bottom' />
      </div>
      <section className='z-1 absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center p-4'>
        <h1 className='text-[35px] sm:text-[50px] tracking-wider flex flex-col items-center justify-center mb-4'>
          <span className='font-caveat'>{d.home.welcome}</span>
          <SeishinDreamsSVG className='max-w-full w-[600px] h-[150px] animate-svg-rainbow-glow' />
        </h1>
        <span className='text-gray-100 text-xl font-caveat'>✨ {d.home.quote} ✨</span>
      </section>
    </main>
  );
}
