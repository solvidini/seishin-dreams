'use client';

import Image from 'next/image';
import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Loader } from '../../_components/Loader';

interface IImageModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageModal: FC<IImageModalProps> = ({ imageUrl, onClose }) => (
  <div className='z-[1000] fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md bg-black/70'>
    <div className='relative w-full h-full flex items-center justify-center' onClick={onClose}>
      <button className='z-[100] absolute top-4 right-4'>
        <AiOutlineClose size={40} />
      </button>
      <Loader className='scale-75' />
      {imageUrl && (
        <Image
          src={imageUrl}
          alt='Fullscreen Image'
          width={800}
          height={450}
          className='fade-in z-10 absolute inset-0 w-full h-full object-contain rounded-md'
          priority
          loading='eager'
        />
      )}
    </div>
  </div>
);
