'use client';

import Image from 'next/image';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';

export default function Prints() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`👕 ${d.prints.title} 👚`}</PageTitle>
      <article className='flex gap-4'>
        <ExternalLink
          className='flex w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-white rounded-full hover:scale-125'
          to='https://seishindreams.redbubble.com/'
        >
          <Image
            src='/redbubble.svg'
            alt='Redbubble'
            width={60}
            height={60}
            className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]'
            priority
          />
        </ExternalLink>
        <ExternalLink
          className='flex items-center justify-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-white rounded-full hover:scale-125'
          to='https://www.spreadshirt.pl/shop/user/seishin+dreams/'
        >
          <Image
            src='/spreadshirt.svg'
            alt='Spreadshirt'
            width={60}
            height={60}
            className='w-[40px] md:w-[50px] h-[40px] md:h-[50px]'
            priority
          />
        </ExternalLink>
      </article>
    </main>
  );
}
