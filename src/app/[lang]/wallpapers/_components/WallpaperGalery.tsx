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

interface ISelectedImage {
  source: string;
  title: string;
}

export const WallpaperGalery: FC<IWallpaperGaleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(null);

  const handleImageClick = (source: string, title: string) => {
    setSelectedImage({ source, title });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='masonry-grid'>
      {images.map((image, index) => (
        <div key={index} className='break-inside-avoid mb-4'>
          <figure onClick={() => handleImageClick(image.src, image.caption)} className='relative cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 hover:brightness-110'>
            <Image src={image.src} alt={image.alt} className='w-full rounded-md' width={400} height={225} />
            <figcaption className='text-center absolute bottom-0 left-0 px-1 py-0.5 text-sm sm:text-md flex w-full bg-black/50 text-gray-200'>
              {image.caption}
            </figcaption>
          </figure>
        </div>
      ))}
      {selectedImage && <ImageModal imageSource={selectedImage.source} imageTitle={selectedImage.title} onClose={handleCloseModal} />}
    </div>
  );
};
