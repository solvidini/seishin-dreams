'use client';

import Image from 'next/image';
import { FC, useState } from 'react';

import { ImageModal } from './ImageModal';

interface IImage {
  src: string;
  alt: string;
  caption: string;
}

interface IWallpaperGaleryProps {
  images: IImage[];
}

export const WallpaperGalery: FC<IWallpaperGaleryProps> = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className='masonry-grid'>
      {images.map((image, index) => (
        <div key={index} className='break-inside-avoid mb-4'>
          <figure onClick={() => handleImageClick(image.src)} className='relative cursor-pointer'>
            <Image src={image.src} alt={image.alt} className='w-full rounded-md' width={400} height={225} />
            <figcaption className='text-center absolute bottom-0 left-0 p-1 flex w-full bg-black/50 text-gray-200'>
              {image.caption}
            </figcaption>
          </figure>
        </div>
      ))}
      {modalOpen && <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};
