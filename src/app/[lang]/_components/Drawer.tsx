'use client';

import classNames from 'classnames';
import Image from 'next/image';

import { useUI } from '@/_contexts/ui-context';
import { Links } from '../../_components/Links';

export const Drawer = () => {
  const { isDrawerOpen, closeDrawer } = useUI();

  return (
    <div className='fixed bottom-0 inset-x-0 z-50'>
      {isDrawerOpen && <div className='fixed inset-0' onClick={closeDrawer}></div>}
      <div
        className={classNames(
          'fixed bottom-0 inset-x-0 w-full h-[30vh] p-4 flex flex-col items-center justify-center gap-md px-xl backdrop-blur-xl bg-gradient-to-br from-crimson-dark/70 via-black/70 to-emerald-dark/70 bg-zinc-800/70 transition-transform duration-300 transform ease-in-out border border-t-4 border-crimson-dark',
          isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <Image
          className={classNames('opacity-80', isDrawerOpen ? '' : 'hidden')}
          src='/betta-fish.png'
          alt='Betta Fish'
          width={120}
          height={90}
          priority
        />
        <Links isDrawer />
      </div>
    </div>
  );
};
