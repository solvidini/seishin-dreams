'use client';

import Image from 'next/image';
import { FaChevronUp } from 'react-icons/fa';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';

export default function Contact() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center'>
      <PageTitle>{`💌 ${d.contact?.title} 💌`}</PageTitle>
      <div className='max-w-[900px] flex flex-col items-center gap-6 md:gap-8 px-4 pb-4 md:p-6 text-justify mx-auto'>
        <article className='flex flex-col gap-4'>
          <p>
            Hey there! Questions, ideas, or just wanna chat? 💌 Ping us at{' '}
            <ExternalLink className='text-gold' to='mailto:seishin.dreams@gmail.com'>
              seishin.dreams@gmail.com
            </ExternalLink>
            !
          </p>
          <p>For a faster ride or more fun, join our social squad! 🚀✨</p>
        </article>
        <div className='flex items-center justify-center space-x-4 text-blue-300'>
          <ExternalLink className='hover:scale-125' to='https://www.facebook.com/seishin.dreams/'>
            <Image
              src='/facebook.svg'
              alt='Facebook'
              width={60}
              height={60}
              className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]'
              priority
            />
          </ExternalLink>
          <ExternalLink className='hover:scale-125' to='https://instagram.com/seishin.dreams/'>
            <Image
              src='/instagram.svg'
              alt='Instagram'
              width={60}
              height={60}
              className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]'
              priority
            />
          </ExternalLink>
          <ExternalLink className='hover:scale-125' to='https://tiktok.com/@seishin.dreams/'>
            <Image
              src='/tiktok.svg'
              alt='TikTok'
              width={60}
              height={60}
              className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]'
              priority
            />
          </ExternalLink>
          <ExternalLink className='hover:scale-125' to='https://pinterest.com/seishindreams/'>
            <Image
              src='/pinterest.svg'
              alt='Pinterest'
              width={60}
              height={60}
              className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]'
              priority
            />
          </ExternalLink>
          <ExternalLink className='hover:scale-125' to='https://www.youtube.com/@seishin.dreams'>
            <Image
              src='/youtube.svg'
              alt='YouTube'
              width={60}
              height={60}
              className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]'
              priority
            />
          </ExternalLink>
        </div>
        <Image
          src='/sd.svg'
          alt='SD'
          width={300}
          height={300}
          className='m-6 w-[300px] md:w-[300px] h-[300px] md:h-[300px]'
          priority
        />
      </div>
    </main>
  );
}
