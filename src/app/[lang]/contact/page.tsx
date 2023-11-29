'use client';

import { useLocale } from '@/_contexts/locale-context';
import { PageTitle } from '@/app/_components/PageTitle';

export default function Contact() {
  const { dictionary: d } = useLocale();

  return (
    <main className='overflow-auto min-h-screen flex flex-col items-center'>
      <PageTitle>{`📧 ${d.contact?.title} 📧`}</PageTitle>
      <div>Contact</div>
    </main>
  );
}
