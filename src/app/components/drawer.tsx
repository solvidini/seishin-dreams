'use client';

import { useUI } from '@/contexts/ui-context';
import { Links } from './Links';

export const Drawer = () => {
  const { isDrawerOpen, closeDrawer } = useUI();

  return (
    <div className='fixed bottom-0 inset-x-0 z-50'>
      {isDrawerOpen && <div className='fixed inset-0' onClick={closeDrawer}></div>}
      <div
        className={`fixed bottom-0 inset-x-0 w-full h-[30vh] p-4 flex items-center justify-center gap-lg px-xl border-t backdrop-blur-xl bg-gradient-to-br from-crimson-dark/70 via-black/70 to-emerald-dark/70 border-neutral-800 bg-zinc-800/30 transition-transform duration-300 transform ${
          isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
        } ease-in-out`}
      >
        <Links isDrawer />
      </div>
    </div>
  );
};
