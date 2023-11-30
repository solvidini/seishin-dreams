'use client';

import { FC } from 'react';
import classNames from 'classnames';

import { useUI } from '@/_contexts/ui-context';
import { LocaleLink } from '@/app/_components/LocaleLink';
import { useLocale } from '@/_contexts/locale-context';

interface ILinksProps {
  isDrawer?: boolean;
}

export const Links: FC<ILinksProps> = ({ isDrawer = false }) => {
  const { dictionary: d } = useLocale();
  const { closeDrawer } = useUI();
  const linkClasses = isDrawer ? 'text-lg' : 'text-sm';

  return (
    <nav className='z-10'>
      <ul
        className={classNames('flex items-center justify-center gap-md flex-wrap', isDrawer ? 'w-[300px]' : 'w-auto')}
      >
        <li>
          <LocaleLink onClick={closeDrawer} className={linkClasses} to='/'>
            {d.common.home}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink onClick={closeDrawer} className={linkClasses} to='/about'>
            {d.common.about}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink onClick={closeDrawer} className={linkClasses} to='/books'>
            {d.common.books}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink onClick={closeDrawer} className={linkClasses} to='/prints'>
            {d.common.prints}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink onClick={closeDrawer} className={linkClasses} to='/wallpapers'>
            {d.common.wallpapers}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink onClick={closeDrawer} className={linkClasses} to='/music'>
            {d.common.music}
          </LocaleLink>
        </li>
        <li>
          <LocaleLink onClick={closeDrawer} className={linkClasses} to='/contact'>
            {d.common.contact}
          </LocaleLink>
        </li>
      </ul>
    </nav>
  );
};
