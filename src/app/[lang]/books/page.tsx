'use client';

import Image from 'next/image';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';

import { Book } from './_components/Book';
import { ComingSoon } from './_components/ComingSoon';

export default function Books() {
  const { dictionary: d, localeExtension } = useLocale();

  return (
    <main className='min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`📚 ${d.books.title} 📚`}</PageTitle>
      <article className='overflow-auto max-w-[900px] w-full flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto'>
        <p>
          Step into our world of coloring books, the first stroke in our artistic tale. While we fill pages with colors,
          anticipate exciting stories and diverse reads in the making! Stay tuned for more literary magic soon to
          unfold! ✨ 🎨
        </p>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-emerald-light mb-1'>Explore our books on:</h3>
          <ExternalLink
            to='https://www.amazon.com/stores/author/B0CP8MXTWK/'
            className='inline-flex items-center gap-2 w-min hover:scale-110'
          >
            <span className='whitespace-nowrap'>Author Page 📖</span>
          </ExternalLink>
        </div>
      </article>
      <section className='w-full max-w-[1100px] flex flex-col items-center justify-center p-4 md:p-6'>
        <h3 className='font-semibold mb-4 text-center text-emerald-light'>
          Discover Our Book Excerpts & Coloring Samples! 🖍️ 📚
        </h3>
        <div className='w-full flex items-center flex-col-reverse lg:flex-row justify-center gap-4'>
          <p className='flex-1'>
            Dive into the Animal Kingdom with our captivating Animals Coloring Book for Kids! Featuring 40 diverse
            creatures across sea, farm, wild, and more. Educational, stress-relieving designs sparking creativity and
            learning. Perfect for curious minds, budding artists, and all ages. Explore, learn, and create today!
          </p>
          <Book
            className='flex-1'
            title='Animals - Coloring Book'
            width={233}
            height={295}
            pages={[
              { src: '/books/coloring_book_1/Cover.jpeg' },
              { src: '/books/Empty-Page.jpeg' },
              { src: '/books/coloring_book_1/Title-Page.jpeg' },
              { src: '/books/coloring_book_1/Text-2.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-2.jpeg' },
              { src: '/books/coloring_book_1/Text-3.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-3.jpeg' },
              { src: '/books/coloring_book_1/Text-4.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-4.jpeg' },
              { src: '/books/coloring_book_1/Text-5.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-5.jpeg' },
              { src: '/books/coloring_book_1/Text-6.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-6.jpeg' },
              { src: '/books/coloring_book_1/Text-7.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-7.jpeg' },
              { src: '/books/coloring_book_1/Text-8.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-8.jpeg' },
              { src: '/books/coloring_book_1/Text-9.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-9.jpeg' },
              { src: '/books/coloring_book_1/Text-10.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-10.jpeg' },
              { src: '/books/coloring_book_1/Text-11.jpeg' },
              { src: '/books/coloring_book_1/Coloring-Page-11.jpeg' },
              { src: '/books/coloring_book_1/Ending-Page.jpeg' },
              { src: '/books/Empty-Page.jpeg' },
              { src: '/books/coloring_book_1/Back-Cover.jpeg' },
            ]}
            link={`https://www.amazon.${localeExtension}/dp/B0CP64GV5B`}
          />
        </div>
        <ComingSoon
          title='Coming Soon: An Amazing Adult Coloring Experience! 🖍️ ✨'
          description='Get ready for our captivating new coloring book designed for adults! Intricate designs and inspiring themes
            await. Stay tuned for updates on this amazing coloring journey!'
        />
      </section>
    </main>
  );
}
