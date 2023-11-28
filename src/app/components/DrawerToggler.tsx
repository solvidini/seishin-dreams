import React, { FC } from 'react';
import classNames from 'classnames';

interface IDrawerTogglerProps {
  isDrawerOpen: boolean;
  onClick(): void;
}

export const DrawerToggler: FC<IDrawerTogglerProps> = ({ isDrawerOpen, onClick }) => (
  <button onClick={onClick} className='transition-transform duration-300 ease-in-out md:hidden'>
    <div
      className={classNames(
        'w-8 h-0.5 bg-gray-400 transition-all duration-300 transform origin-center',
        isDrawerOpen ? 'rotate-45 bg-white' : 'bg-gray-400'
      )}
    />
    <div
      className={classNames(
        'w-8 h-0.5 bg-gray-400 transition-all duration-300 transform origin-center',
        isDrawerOpen ? 'opacity-0' : 'bg-gray-400 my-1'
      )}
    />
    <div
      className={classNames(
        'h-0.5 bg-gray-400 transition-all duration-300 transform origin-center',
        isDrawerOpen ? 'w-8 -rotate-45 bg-white -my-1' : 'w-5 bg-gray-400 my-1 ml-auto'
      )}
    />
  </button>
);
