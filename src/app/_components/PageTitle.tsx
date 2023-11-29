import { FC, ReactNode } from 'react';
import Image from 'next/image';

interface IPageTitleProps {
  children: ReactNode;
}

export const PageTitle: FC<IPageTitleProps> = ({ children }) => (
  <div className='relative w-full h-[90px] p-2 flex items-center justify-center'>
    <Image src='/brush-stroke.svg' alt='Title Background' width={500} height={70} />
    <h2 className='text-lg sm:text-xl font-bold text-white z-1 absolute inset-0 flex items-center justify-center'>
      {children}
    </h2>
  </div>
);
