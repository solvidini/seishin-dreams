'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';
import { useUI } from '@/contexts/ui-context';
import { FC } from 'react';

interface ILinksProps {
  isDrawer?: boolean;
}

export const Links: FC<ILinksProps> = ({ isDrawer = false }) => {
  const { closeDrawer } = useUI();
  const pathname = usePathname();
  const linkClasses = isDrawer ? 'text-lg' : 'text-sm';

  return (
    <nav>
      <ul
        className={classNames('flex items-center justify-center gap-md flex-wrap', isDrawer ? 'w-[300px]' : 'w-auto')}
      >
        <li>
          <Link
            onClick={closeDrawer}
            className={classNames(linkClasses, pathname === '/' ? 'text-white' : 'text-gray-400')}
            href='/'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={closeDrawer}
            className={classNames(linkClasses, pathname === '/about' ? 'text-white' : 'text-gray-400')}
            href='/about'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={closeDrawer}
            className={classNames(linkClasses, pathname === '/books' ? 'text-white' : 'text-gray-400')}
            href='/books'
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            onClick={closeDrawer}
            className={classNames(linkClasses, pathname === '/prints' ? 'text-white' : 'text-gray-400')}
            href='/prints'
          >
            Prints
          </Link>
        </li>
        <li>
          <Link
            onClick={closeDrawer}
            className={classNames(linkClasses, pathname === '/wallpapers' ? 'text-white' : 'text-gray-400')}
            href='/wallpapers'
          >
            Wallpapers
          </Link>
        </li>
        <li>
          <Link
            onClick={closeDrawer}
            className={classNames(linkClasses, pathname === '/music' ? 'text-white' : 'text-gray-400')}
            href='/music'
          >
            Music
          </Link>
        </li>
        <li>
          <Link
            onClick={closeDrawer}
            className={classNames(linkClasses, pathname === '/contact' ? 'text-white' : 'text-gray-400')}
            href='/contact'
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
