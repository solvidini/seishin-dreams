import Image from 'next/image';

import { Locale } from '@/i18n-config';
import { fetchDictionary } from '@/get-dictionary';
import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';
import { WallpaperGalery } from './_components/WallpaperGalery';

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

export default async function Wallpapers({ params: { lang } }: { params: { lang: Locale } }) {
  const d = await fetchDictionary(lang);

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`🎨 ${d.wallpapers.title} 🎨`}</PageTitle>
      <article className='max-w-[900px] flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto'>
        <p>{d.wallpapers.description[0]}</p>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-emerald-light mb-1'>{d.wallpapers.description[1]}</h3>
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
        <h3 className='font-semibold mb-4 text-center text-emerald-light'>{d.wallpapers.description[2]} 🌟 🖼️ ✨</h3>
        <WallpaperGalery images={images} />
      </section>
    </main>
  );
}
