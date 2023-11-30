'use client';

import Image from 'next/image';
import { YouTubeVideo } from './_components/YouTubeVideo';
import { PageTitle } from '@/app/_components/PageTitle';
import { useLocale } from '@/_contexts/locale-context';
import { ExternalLink } from '@/app/_components/ExternalLink';

export default function Music() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center'>
      <PageTitle>{`🎶 ${d.music?.title} 🎶`}</PageTitle>
      <article className='max-w-[900px] flex flex-col gap-4 p-4 pb-6 md:p-6 text-justify mx-auto'>
        <p>
          Step into a realm of serene rhythms and melodies – our curated collection is designed to transport you to a
          state of tranquility. 🥁
        </p>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-emerald-light mb-1'>Explore our soothing sounds on:</h3>
          <ExternalLink
            to='https://www.youtube.com/@seishin.dreams'
            className='inline-flex items-center gap-2 w-min hover:scale-110'
          >
            <span>YouTube</span>
            <Image src='/youtube.svg' alt='YouTube' width={30} height={30} priority />
          </ExternalLink>
          <ExternalLink
            to='https://soundcloud.com/solvidi/sets/seishin-dreams'
            className='inline-flex items-center gap-2 w-min hover:scale-110'
          >
            <span>SoundCloud</span>
            <Image src='/soundcloud.svg' alt='SoundCloud' width={30} height={30} priority />
          </ExternalLink>
        </div>
        <p>
          Indulge in our meticulously crafted playlist, ideal for unwinding after a long day or finding focus amidst the
          chaos. Let the music be your guide to relaxation and rejuvenation.
        </p>
      </article>
      <section className='w-full px-4 md:px-6 mb-8 max-w-[900px] flex flex-col'>
        <h3 className='font-semibold mb-2 text-center'>Explore our captivating animated video selection! 🎵🎥✨</h3>
        <div className='w-full flex flex-col items-center justify-center gap-3'>
          <div className='w-full sm:w-auto'>
            <h6 className='text-gold mb-1'>Our Main Theme</h6>
            <YouTubeVideo videoId='JzKXzkJ2DNY' />
          </div>
          <div className='w-full sm:w-auto'>
            <h6 className='text-gold mb-1'>Zen Realm</h6>
            <YouTubeVideo videoId='fnSidbB4G2o' />
          </div>
          <div className='w-full sm:w-auto'>
            <h6 className='text-gold mb-1'>Atlantis Realm</h6>
            <YouTubeVideo videoId='qQVNfHdFxEk' />
          </div>
        </div>
      </section>
    </main>
  );
}
