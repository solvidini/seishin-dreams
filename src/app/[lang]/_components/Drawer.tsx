'use client';

import classNames from 'classnames';
import Image from 'next/image';

import { useUI } from '@/_contexts/ui-context';
import { Links } from '../../_components/Links';

export const Drawer = () => {
  const { isDrawerOpen, closeDrawer } = useUI();

  return (
    <div className='fixed bottom-0 inset-x-0 z-[150]'>
      {isDrawerOpen && <div className='fixed inset-0' onClick={closeDrawer}></div>}
      <div
        className={classNames(
          'fixed bottom-0 inset-x-0 w-full h-[30vh] p-4 flex flex-col items-center justify-center gap-md px-xl backdrop-blur-xl bg-gradient-to-br from-crimson-dark/70 via-black/70 to-emerald-dark/70 bg-zinc-800/70 transition-transform duration-300 transform ease-in-out border-t-4 border-crimson-dark',
          isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <Image
          className={classNames(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20',
            isDrawerOpen ? '' : 'hidden'
          )}
          src='/betta-fish.png'
          alt='Betta Fish'
          width={200}
          height={150}
          priority
        />
        <Links isDrawer />
      </div>
    </div>
  );
};
