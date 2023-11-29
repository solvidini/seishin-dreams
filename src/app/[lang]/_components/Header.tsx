'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUI } from '@/_contexts/ui-context';
import { Links } from '../../_components/Links';
import { DrawerToggler } from './DrawerToggler';

export const Header = () => {
  const { isDrawerOpen, openDrawer } = useUI();

  return (
    <header className='fixed top-0 left-0 z-10 w-full h-[70px] flex items-center justify-between gap-lg px-xl backdrop-blur-xl bg-gradient-to-br from-crimson-dark/70 via-black/70 to-emerald-dark/70 bg-zinc-800/70 border-b-2 border-crimson-dark'>
      <Link className='w-[150px] h-[50px] flex items-center justify-center' href='/'>
        <Image src='/seishin-dreams.svg' alt='Seishin Dreams Logo' width={150} height={50} priority />
      </Link>
      <div className='hidden md:block'>
        <Links />
      </div>
      <DrawerToggler isDrawerOpen={isDrawerOpen} onClick={openDrawer} />
    </header>
  );
};
