'use client';

import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';

export default function Contact() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`💌 ${d.contact.title} 💌`}</PageTitle>
      <article className='max-w-[900px] flex flex-col items-center gap-6 md:gap-8 p-4 pt-2 pb-6 md:p-6 xs:pt-4 mx-auto'>
        <section className='flex flex-col gap-4'>
          <div className='flex flex-wrap justify-center'>
            <p className='text-left mr-2'>{d.contact.description[0]}</p>
            <ExternalLink className='text-gold inline-flex items-center' to='mailto:seishin.dreams@gmail.com'>
              <FaEnvelope className='mr-1' /> seishin.dreams@gmail.com
            </ExternalLink>
          </div>
          <p className='text-left xs:text-center'>{d.contact.description[1]} 🚀 ✨</p>
        </section>
        <section className='flex items-center justify-center space-x-4 text-blue-300'>
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
        </section>
        <Image
          src='/sd.svg'
          alt='SD'
          width={300}
          height={300}
          className='opacity-10 m-2 w-[240px] md:w-[300px] h-[240px] md:h-[300px]'
          priority
        />
      </article>
    </main>
  );
}
