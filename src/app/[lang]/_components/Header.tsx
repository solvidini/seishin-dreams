'use client';

import Link from 'next/link';
import { useMediaQuery } from '@react-hook/media-query';
import { useUI } from '@/_contexts/ui-context';
import { Links } from '../../_components/Links';
import { DrawerToggler } from './DrawerToggler';
import BREAKPOINTS from '../../../_config/breakpoints.json';
import { SdSVG } from '@/app/_svg/sd';
import { SeishinDreamsSVG } from '@/app/_svg/seishin-dreams';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [windowSize, setWindowSize] = useState<'loading' | 'small' | 'big'>('loading');
  const { isDrawerOpen, openDrawer } = useUI();
  const matches = useMediaQuery(`(min-width: ${BREAKPOINTS.sm})`);

  useEffect(() => {
    setWindowSize(matches ? 'big' : 'small');
  }, [matches]);

  return (
    <header className='overflow-hidden fixed top-0 left-0 z-10 w-full h-[70px] flex items-center justify-between gap-lg px-md sm:px-xl backdrop-blur-xl bg-gradient-to-br from-crimson-dark/70 via-black/70 to-emerald-dark/70 bg-zinc-800/70 border-b-2 border-crimson-dark'>
      <Link className='w-[50px] sm:w-[170px] h-[50px] flex items-center justify-center' href='/'>
        {windowSize === 'big' ? (
          <SeishinDreamsSVG className='fill-gray-200 w-[170px] h-[50px]' />
        ) : windowSize === 'small' ? (
          <SdSVG className='fill-gray-200 w-[50px] h-[50px]' />
        ) : null}
      </Link>
      <div className='hidden md:block'>
        <Links />
      </div>
      <DrawerToggler isDrawerOpen={isDrawerOpen} onClick={openDrawer} />
    </header>
  );
};
