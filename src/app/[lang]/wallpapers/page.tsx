'use client';

import Image from 'next/image';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';
import { useState } from 'react';
import { ImageModal } from './_components/ImageModal';

const images = [
  {
    src: '/wallpapers/Christmas-Realm-with-fireplace-169.jpeg',
    alt: 'Christmas Realm with fireplace 16:9',
    caption: 'Christmas Realm with fireplace 16:9',
  },
  {
    src: '/wallpapers/Atlantis-Realm-169.jpeg',
    alt: 'Christmas Realm 16:9',
    caption: 'Christmas Realm 16:9',
  },
  {
    src: '/wallpapers/Christmas-Realm-916.jpeg',
    alt: 'Christmas Realm 9:16',
    caption: 'Christmas Realm 9:16',
  },
  {
    src: '/wallpapers/Atlantis-Realm-916.jpeg',
    alt: 'Atlantis Realm 9:16',
    caption: 'Atlantis Realm 9:16',
  },
  {
    src: '/wallpapers/Atlantis-Realm-169.jpeg',
    alt: 'Atlantis Realm 16:9',
    caption: 'Atlantis Realm 16:9',
  },
  {
    src: '/wallpapers/Oasis-Realm-916.jpeg',
    alt: 'Oasis Realm 9:16',
    caption: 'Oasis Realm 9:16',
  },
  {
    src: '/wallpapers/Oasis-Realm-169.jpeg',
    alt: 'Oasis Realm 16:9',
    caption: 'Oasis Realm 16:9',
  },
  {
    src: '/wallpapers/Zen-Realm-916.jpeg',
    alt: 'Zen Realm 9:16',
    caption: 'Zen Realm 9:16',
  },
  {
    src: '/wallpapers/Zen-Realm-169.jpeg',
    alt: 'Zen Realm 16:9',
    caption: 'Zen Realm 16:9',
  },
  {
    src: '/wallpapers/Fungi-Realm-916.jpeg',
    alt: 'Fungi Realm 9:16',
    caption: 'Fungi Realm 9:16',
  },
  {
    src: '/wallpapers/Fungi-Realm-169.jpeg',
    alt: 'Fungi Realm 16:9',
    caption: 'Fungi Realm 16:9',
  },
];

export default function Wallpapers() {
  const { dictionary: d } = useLocale();
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
    <main className='overflow-auto min-h-screen flex flex-col items-center mb-6'>
      <PageTitle>{`🎨 ${d.wallpapers?.title} 🎨`}</PageTitle>
      <article className='max-w-[900px] flex flex-col gap-4 p-4 pb-6 md:p-6 text-justify mx-auto'>
        <p>
          ✨ Step into our realm of enchantment with our magical world wallpapers. 🏞️ Immerse yourself in captivating
          landscapes, 🐉 mystical creatures, and fantastical realms. Find the perfect backdrop to add a touch of magic
          to your screens. 🌌
        </p>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-emerald-light mb-1'>Download our wallpapers on:</h3>
          <ExternalLink
            to='https://pinterest.com/seishindreams/wallpapers/'
            className='inline-flex items-center gap-2 w-min hover:scale-110'
          >
            <span>Pinterest</span>
            <Image src='/pinterest.svg' alt='Pinterest Wallpapers' width={30} height={30} priority />
          </ExternalLink>
        </div>
      </article>
      <section className='w-full px-4 md:px-6 flex flex-col'>
        <h3 className='font-semibold mb-4 text-center text-emerald-light'>
          Explore some of our mesmerizing enchanting wallpapers! 🌟🖼️✨
        </h3>
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
        </div>
      </section>
      {modalOpen && <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />}
    </main>
  );
}
