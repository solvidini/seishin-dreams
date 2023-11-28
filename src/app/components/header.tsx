'use client';

import Link from 'next/link';
import { Links } from './links';
import Image from 'next/image';
import { useUI } from '@/contexts/ui-context';

export const Header = () => {
  const { toggleDrawer } = useUI();

  return (
    <header className='fixed top-0 left-0 z-10 w-full h-[80px] flex items-center justify-between gap-lg px-xl border-b bg-gradient-to-b from-inherit backdrop-blur-2xl border-neutral-800 bg-zinc-800/30'>
      <Link className='w-[200px] h-[50px]' href='/'>
        <Image src='/seishin-dreams.svg' alt='Seishin Dreams Logo' width={200} height={50} priority />
      </Link>
      <div className='hidden md:block'>
        <Links />
      </div>
      <button
        className='fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 text-lg shadow-lg focus:outline-none md:hidden'
        onClick={toggleDrawer}
      >
        DRAW
      </button>
    </header>
  );
};
