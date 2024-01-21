import Image from 'next/image';

import { PageTitle } from '@/app/_components/PageTitle';
import { ExternalLink } from '@/app/_components/ExternalLink';
import { Carousel } from './_components/Carousel';
import { Locale } from '@/i18n-config';
import { fetchDictionary } from '@/get-dictionary';

export default async function Prints({ params: { lang } }: { params: { lang: Locale } }) {
  const d = await fetchDictionary(lang);

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`👕 ${d.prints.title} 👚`}</PageTitle>
      <article className='max-w-[900px] flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto'>
        <p>{d.prints.description[0]} 🛒 👕 ✨</p>
        <div className='flex flex-col mb-4'>
          <h3 className='font-semibold text-secondary-light mb-1'>{d.prints.description[1]}</h3>
          <ExternalLink
            to='https://seishindreams.redbubble.com/'
            className='inline-flex items-center gap-2 w-min hover:scale-110'
          >
            <span>Redbubble</span>
            <div className='flex items-center justify-center w-[28px] h-[28px] bg-white rounded-full'>
              <Image src='/redbubble.svg' alt='Redbubble' width={30} height={30} priority />
            </div>
          </ExternalLink>
          <ExternalLink
            to='https://www.spreadshirt.pl/shop/user/seishin+dreams/'
            className='inline-flex items-center gap-2 w-min hover:scale-110'
          >
            <span>Spreadshirt</span>
            <div className='flex items-center justify-center w-[28px] h-[28px] bg-white rounded-full'>
              <Image src='/spreadshirt.svg' alt='Spreadshirt' width={25} height={25} priority />
            </div>
          </ExternalLink>
        </div>
        <section className='w-full h-full'>
          <h3 className='font-semibold text-center text-secondary-light mb-4'>{d.prints.description[2]} 🌟🛍️</h3>
          <Carousel
            items={[
              {
                src: '/products/website_product.png',
                title: 'Virgo Design',
                url: 'https://www.redbubble.com/shop/ap/154829740',
              },
              {
                src: '/products/website_product-2.png',
                title: 'Lotus Flower Design',
                url: 'https://www.redbubble.com/shop/ap/154667892',
              },
              {
                src: '/products/website_product-3.png',
                title: 'Samurai Design',
                url: 'https://www.redbubble.com/shop/ap/155350217',
              },
              {
                src: '/products/website_product-4.png',
                title: 'Bee Design',
                url: 'https://www.redbubble.com/shop/ap/155225143',
              },
              {
                src: '/products/website_product-5.png',
                title: 'Capricorn Design',
                url: 'https://www.redbubble.com/shop/ap/154878672',
              },
              {
                src: '/products/website_product-6.png',
                title: 'Ninja Design',
                url: 'https://www.redbubble.com/shop/ap/155350575',
              },
            ]}
          />
        </section>
      </article>
      <section></section>
    </main>
  );
}
