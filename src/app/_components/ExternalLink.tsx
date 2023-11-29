import classNames from 'classnames';
import { FC, ReactNode } from 'react';

interface IExternalLinkProps {
  children: ReactNode;
  to: string;
  className?: string;
}

export const ExternalLink: FC<IExternalLinkProps> = ({ children, to, className }) => (
  <a
    className={classNames('transition-all duration-300 ease-in-out', className)}
    href={to}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
);
