'use client';

import { useUI } from '@/contexts/ui-context';
import { Links } from './links';

export const Drawer = () => {
  const { isDrawerOpen, toggleDrawer } = useUI();

  return (
    <div className='fixed bottom-0 inset-x-0 z-50'>
      {isDrawerOpen && <div className='fixed inset-0 bg-black opacity-50' onClick={toggleDrawer}></div>}
      <div
        className={`w-full h-[300px] p-4 flex items-center justify-center gap-lg px-xl border-t bg-gradient-to-b from-inherit backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 transition-transform duration-300 transform ${
          isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
        } ease-in-out`}
      >
        <Links />
      </div>
    </div>
  );
};
