'use client';

import Image from 'next/image';

import { BackgroundVideo } from './_components/BackgroundVideo';
import { LocaleSwitcher } from '@/app/_components/LocaleSwitcher';
import { useLocale } from '@/_contexts/locale-context';

export default function Home() {
  const { dictionary: d } = useLocale();

  return (
    <main className='relative overflow-auto min-h-screen w-full'>
      <BackgroundVideo />
      <div className='z-1 absolute top-2 left-2 bg-black/70 rounded-md'>
        <LocaleSwitcher dropdownPosition='bottom' />
      </div>
      <div className='z-1 absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center p-4'>
        <h1 className='text-[35px] sm:text-[50px] tracking-wider flex flex-col items-center justify-center mb-4'>
          <span className='font-caveat'>Welcome to</span>
          <Image
            className='animate-svg-rainbow-glow'
            src='/seishin-dreams.svg'
            alt='Seishin Dreams Logo'
            width={600}
            height={150}
            priority
          />
        </h1>
        <span className='text-gray-100 text-xl font-caveat'>
          ✨ &quot;Step into the realm where dreams blossom into reality, and imagination knows no bounds.&quot; ✨
        </span>
      </div>
    </main>
  );
}
