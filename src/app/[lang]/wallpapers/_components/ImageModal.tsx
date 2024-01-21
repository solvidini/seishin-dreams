'use client';

import Image from 'next/image';
import { FC, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocale } from '@/_contexts/locale-context';
import { Loader } from '../../_components/Loader';

interface IImageModalProps {
  imageSource: string;
  imageTitle: string;
  onClose: () => void;
}

export const ImageModal: FC<IImageModalProps> = ({ imageSource, imageTitle, onClose }) => {
  const { dictionary: d } = useLocale();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className='z-[1000] fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md bg-black/70'>
      <div className='relative w-full h-full flex items-center justify-center' onClick={onClose}>
        <button className='z-[100] absolute top-4 right-4'>
          <AiOutlineClose size={40} />
        </button>
        <Loader className='scale-75' />
        <>
          <Image
            src={imageSource}
            alt={imageTitle}
            width={800}
            height={450}
            className='fade-in z-10 absolute inset-0 w-full h-full object-contain rounded-md'
            priority
            loading='eager'
          />
          <a href={imageSource} download={`Seishin Dreams - ${imageTitle}`} className='z-[1000] absolute bottom-4 left-4'>
            <button
              onClick={e => {
                e.stopPropagation()
              }}
              className='bg-primary text-white px-4 py-2 rounded-md shadow-md text-lg md:text-md'>
              {d.common.download}
            </button>
          </a>
        </>
      </div>
    </div>
  )
}
