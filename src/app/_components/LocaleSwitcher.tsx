'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from '@/_contexts/locale-context';
import { Dropdown } from './Dropdown';
import classNames from 'classnames';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const { getLocaleLanguage, locale, locales } = useLocale();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Dropdown position='top' value={getLocaleLanguage(locale)}>
      {locales.map((l) => {
        return (
          <li key={l}>
            <Link
              className={classNames(
                'px-4 py-2 h-full w-full flex items-center transition duration-300 ease-in-out hover:bg-gray-900/70',
                l === locale ? 'pointers-none cursor-not-allowed opacity-50 pointer-events-none' : ''
              )}
              href={redirectedPathName(l)}
            >
              {getLocaleLanguage(l)}
            </Link>
          </li>
        );
      })}
    </Dropdown>
  );
}
