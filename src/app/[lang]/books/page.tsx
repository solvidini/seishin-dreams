'use client';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';

export default function Books() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center'>
      <PageTitle>{`📚 ${d.books?.title} 📚`}</PageTitle>
      <div>KDP books</div>
    </main>
  );
}
