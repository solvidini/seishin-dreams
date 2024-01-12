import { Locale } from '@/i18n-config';
import { fetchDictionary } from '@/get-dictionary';
import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';
import { getLocaleExtension } from '@/_utils';
import { Book } from './_components/Book';
import { ComingSoon } from './_components/ComingSoon';
import { coloringBookAnimalsData, coloringBookMindfulnessData } from './_data';

export default async function Books({ params: { lang } }: { params: { lang: Locale } }) {
  const d = await fetchDictionary(lang);

  return (
    <main className='min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`📚 ${d.books.title} 📚`}</PageTitle>
      <article className='overflow-auto max-w-[900px] w-full flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto'>
        <p>{d.books.description[0]} ✨ 🎨</p>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-emerald-light mb-1'>{d.books.description[1]}</h3>
          <ExternalLink
            to='https://www.amazon.com/stores/author/B0CP8MXTWK/'
            className='inline-flex items-center gap-2 w-min hover:scale-110'
          >
            <span className='whitespace-nowrap'>{d.books.author} 📖</span>
          </ExternalLink>
        </div>
      </article>
      <section className='w-full max-w-[1100px] flex flex-col items-center justify-center px-4 md:px-6 gap-4'>
        <h3 className='font-semibold text-center text-emerald-light'>{d.books.description[2]} 🖍️ 📚</h3>
        <div className='w-full flex items-center flex-col-reverse lg:flex-row justify-center gap-4 text-gray-300'>
          <p className='flex-1'>{d.books.coloring_book_mindfulness}</p>
          <Book
            className='flex-1'
            title='Enchanted Realms of Mindfulness'
            width={245}
            height={245}
            pages={coloringBookMindfulnessData}
            link={`https://www.amazon.${getLocaleExtension(lang)}/dp/B0CRZ4S9LX`}
          />
        </div>
        <div className='w-full flex items-center flex-col-reverse lg:flex-row justify-center gap-4 text-gray-300'>
          <p className='flex-1'>{d.books.coloring_book_animals}</p>
          <Book
            className='flex-1'
            title='Animals - Coloring Book'
            width={233}
            height={295}
            pages={coloringBookAnimalsData}
            link={`https://www.amazon.${getLocaleExtension(lang)}/dp/B0CP64GV5B`}
          />
        </div>
        {/* <ComingSoon title={`${d.books.coming_soon.title} 🖍️ ✨`} description={d.books.coming_soon.description} /> */}
      </section>
    </main>
  );
}
