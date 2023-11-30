'use client';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';

export default function Prints() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center fade-in'>
      <PageTitle>{`👕 ${d.prints?.title} 👚`}</PageTitle>
      <div>All Print on Demand products</div>
    </main>
  );
}
