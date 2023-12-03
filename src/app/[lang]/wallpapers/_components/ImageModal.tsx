import Image from 'next/image';
import { FC } from 'react';

interface IImageModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageModal: FC<IImageModalProps> = ({ imageUrl, onClose }) => (
  <div className='fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center backdrop-blur-md bg-black/70'>
    <div className='relative w-full h-full flex items-center justify-center' onClick={onClose}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt='Fullscreen Image'
          width={800}
          height={450}
          className='fade-in absolute inset-0 w-full h-full object-contain rounded-md'
        />
      )}
    </div>
  </div>
);
