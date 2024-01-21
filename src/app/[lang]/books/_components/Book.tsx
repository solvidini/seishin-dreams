'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import classNames from 'classnames';

import BREAKPOINTS from '@/_config/breakpoints.json';
import { ExternalLink } from '@/app/_components/ExternalLink';
import { useLocale } from '@/_contexts/locale-context';

interface BookProps {
  title: string;
  pages: { src: string }[];
  width: number;
  height: number;
  link: string;
  className?: string;
}

export const Book: FC<BookProps> = ({ title, pages, width, height, link, className }) => {
  const { dictionary: d } = useLocale();
  const [bookSize, setBookSize] = useState({ width, height });
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const isSmall = window.innerWidth < Number(BREAKPOINTS.xs.replace('px', ''));
        const newSize = { width: isSmall ? width * 0.7 : width, height: isSmall ? height * 0.7 : height };
        setBookSize(newSize);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 2;
      return nextPage >= pages.length + 1 ? 0 : nextPage;
    });
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) => {
      const prevPageCandidate = prevPage - 2;
      return prevPageCandidate < 0 ? 0 : prevPageCandidate;
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div
      className={classNames(
        'relative max-w-full flex flex-col items-center justify-center gap-4 py-2',
        className
      )}
    >
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bg-[#009999]/80 shadow-[0_0_70px_40px_#009999]`} />
      <h3 className='text-lg text-semibold text-tertiary z-0'>{title}</h3>
      <div
        className='flex items-center justify-center transition-transform duration-500'
        style={{
          width: bookSize.width * 2,
          height: bookSize.height,
          perspective: '1000px',
          transformStyle: 'flat',
          transform: currentPage === 0 ? 'translateX(-25%)' : currentPage === pages.length ? 'translateX(25%)' : '',
        }}
        {...swipeHandlers}
      >
        <div className='z-[1000] absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-black/10' />
        {pages.map((page, index) => (
          <div
            key={index}
            className='absolute top-0 left-1/2 -translate-1/2 transition-all duration-500'
            style={{
              width: bookSize.width,
              height: bookSize.height,
              perspectiveOrigin: 'left',
              transformOrigin: 'left',
              transform: `rotateY(${index < currentPage ? '-180deg' : '0deg'})`,
              zIndex:
                index === currentPage ? '20' : index === currentPage - 1 || index === currentPage + 1 ? '10' : '0',
            }}
          >
            <Image
              src={page.src}
              alt={`Page ${index}`}
              width={bookSize.width}
              height={bookSize.height}
              className='w-full h-full object-cover'
              style={{
                transform: currentPage === index + 1 ? 'rotateY(-180deg)' : '',
                transitionDelay: currentPage === index + 1 ? '100ms' : '250ms',
              }}
              priority
            />
          </div>
        ))}
      </div>
      <div className='w-full flex items-center justify-between z-0'>
        <button onClick={prevSlide} className={classNames(currentPage === 0 && 'opacity-50 cursor-not-allowed')}>
          <FaChevronLeft size={40} className='text-primary' />
        </button>
        <ExternalLink className='text-tertiary uppercase font-semibold hover:underline' to={link}>
          {d.common.buy_now}
        </ExternalLink>
        <button onClick={nextSlide}>
          <FaChevronRight size={40} className='text-primary' />
        </button>
      </div>
    </div>
  );
};
