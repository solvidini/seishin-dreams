'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

export const Links = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex items-center justify-center gap-md flex-wrap w-[300px] md:w-auto'>
        <li>
          <Link className={classNames('link', pathname === '/' && 'active')} href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className={classNames('link', pathname === '/about' && 'active')} href='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className={classNames('link', pathname === '/books' && 'active')} href='/books'>
            Books
          </Link>
        </li>
        <li>
          <Link className={classNames('link', pathname === '/prints' && 'active')} href='/prints'>
            Prints
          </Link>
        </li>
        <li>
          <Link className={classNames('link', pathname === '/wallpapers' && 'active')} href='/wallpapers'>
            Wallpapers
          </Link>
        </li>
        <li>
          <Link className={classNames('link', pathname === '/music' && 'active')} href='/music'>
            Music
          </Link>
        </li>
        <li>
          <Link className={classNames('link', pathname === '/contact' && 'active')} href='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
