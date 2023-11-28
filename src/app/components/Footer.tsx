'use client';

import Image from 'next/image';
import { FaChevronUp } from 'react-icons/fa';

import { getCurrentYear, scrollToTop } from '@/utils';
import { ExternalLink } from '@/components/ExternalLink';
import { Links } from './Links';

const Footer = () => {
  return (
    <footer className='bg-crimson-dark to-black text-white relative flex flex-col'>
      <button
        onClick={scrollToTop}
        className='z-10 w-[36px] h-[36px] bg-crimson-dark rounded-full p-2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'
      >
        <FaChevronUp size={20} />
      </button>

      <div className='w-full p-4 mx-auto flex flex-col md:flex-row items-center relative gap-4 my-2'>
        {/* Social Media Links */}
        <div className='flex-1 flex items-center justify-center space-x-4 text-blue-300'>
          <ExternalLink to='https://www.facebook.com/seishin.dreams/'>
            <Image src='/facebook.svg' alt='Facebook' width={30} height={30} priority />
          </ExternalLink>
          <ExternalLink to='https://instagram.com/seishin.dreams/'>
            <Image src='/instagram.svg' alt='Instagram' width={30} height={30} priority />
          </ExternalLink>
          <ExternalLink to='https://tiktok.com/@seishin.dreams/'>
            <Image src='/tiktok.svg' alt='TikTok' width={30} height={30} priority />
          </ExternalLink>
          <ExternalLink to='https://pinterest.com/seishindreams/'>
            <Image src='/pinterest.svg' alt='Pinterest' width={30} height={30} priority />
          </ExternalLink>
          <ExternalLink to='https://www.youtube.com/@seishin.dreams'>
            <Image src='/youtube.svg' alt='YouTube' width={30} height={30} priority />
          </ExternalLink>
        </div>

        {/* Navigation */}
        <nav className='flex-1 flex items-center justify-center'>
          <div className='w-[240px] xl:w-auto'>
            <Links />
          </div>
        </nav>

        {/* Language Selection Dropdown */}
        <button className='flex-1 flex items-center justify-center'>Language Dropdown</button>
      </div>
      {/* Copyright */}
      <div className='bg-gradient-to-b from-crimson-dark to-black text-center w-full p-4 text-xs'>
        <p>
          <span className='text-gray-300'>&#169; {getCurrentYear()} Seishin Dreams</span>
          {'. '}
          <span className='text-gray-400'>
            Icons by{' '}
            <ExternalLink className='underline' to='https://icons8.com/'>
              icons8
            </ExternalLink>
          </span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };