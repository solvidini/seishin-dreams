import classNames from 'classnames';
import { FC, useState, useEffect, useRef, ReactElement } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface DropdownProps {
  position?: 'top' | 'bottom';
  value: string;
  children: ReactElement[];
}

export const Dropdown: FC<DropdownProps> = ({ position = 'bottom', value, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block ${position === 'top' ? 'origin-bottom' : 'origin-top'}`}>
      <button
        type='button'
        onClick={toggleDropdown}
        className='inline-flex items-center justify-center gap-2 min-w-[120px] w-full rounded-md border border-gray-300/70 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900/70'
      >
        {value}
        <FaChevronRight
          className={classNames(
            'transform transition-transform duration-300',
            isOpen && position === 'top' ? '-rotate-90' : isOpen && position === 'bottom' ? 'rotate-90' : ''
          )}
          size={10}
        />
      </button>

      {isOpen && (
        <div
          className={classNames(
            'absolute left-1/2 transform -translate-x-1/2 min-w-[120px] backdrop-blur-xl rounded-md shadow-lg bg-gradient-to-br from-crimson-dark/70 via-black/70 to-emerald-dark/70 bg-zinc-800/70 border border-gray-300/70',
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          )}
        >
          <ul className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            {children}
          </ul>
        </div>
      )}
    </div>
  );
};
