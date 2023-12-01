import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { ExternalLink } from '@/app/_components/ExternalLink';
import classNames from 'classnames';

interface IItemsData {
  src: string;
  title: string;
  url: string;
}

interface ICarouselProps {
  items: IItemsData[];
  height?: number;
}

export const Carousel: FC<ICarouselProps> = ({ items, height = 400 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [items, activeIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='relative w-full flex flex-col items-center justify-center gap-2' style={{ height }}>
      <div className='overflow-hidden rounded-lg relative' {...handlers}>
        <div
          className='w-full h-full flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((data) => (
            <div key={data.title.replace(' ', '-')} className='relative w-full h-full flex-shrink-0'>
              <Image
                src={data.src}
                alt={data.title}
                width={400}
                height={height}
                className='w-auto h-full m-auto transition-opacity duration-500 opacity-100'
                priority
              />
              <div className='absolute p-2 bg-black/50 rounded-md z-10 left-1/2 bottom-[10%] -translate-x-1/2 drop-shadow-md text-center mt-2'>
                <h3 className='text-lg whitespace-nowrap mb-2'>{data.title}</h3>
                <ExternalLink className='text-gold uppercase font-semibold' to={data.url}>
                  Buy Now
                </ExternalLink>
              </div>
              <div
                className='absolute top-0 left-0 w-full h-full pointer-events-none'
                style={{ boxShadow: 'inset 0 0 20px 20px black' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='absolute top-1/2 left-4 transform -translate-y-1/2'>
        <button onClick={prevSlide} className='focus:outline-none'>
          <FaChevronLeft size={40} className='text-crimson' />
        </button>
      </div>
      <div className='absolute top-1/2 right-4 transform -translate-y-1/2'>
        <button onClick={nextSlide} className='focus:outline-none'>
          <FaChevronRight size={40} className='text-crimson' />
        </button>
      </div>

      <div className='flex gap-2'>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={classNames(
              'w-4 h-4 rounded-full border-2 border-emerald focus:outline-none',
              activeIndex === index && 'bg-emerald'
            )}
          />
        ))}
      </div>
    </div>
  );
};
