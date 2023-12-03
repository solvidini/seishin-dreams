'use client';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';
import { Book } from './_components/Book';

export default function Books() {
  const { dictionary: d, locale } = useLocale();

  return (
    <main className='min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`📚 ${d.books.title} 📚`}</PageTitle>
      <article className='overflow-auto max-w-[900px] w-full flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto'>
        <div className='w-full flex items-center justify-center'>
          <Book
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
            link={`https://www.amazon.${locale === 'en' ? 'com' : locale}/dp/B0CP64GV5B`}
          />
        </div>
      </article>
    </main>
  );
}
