'use client';

import Image from 'next/image';
import mapPoint from '../../../public/map-point.svg';
import { usePopupMenu } from '@/hooks/use-popup-menu';
import Map from '../../../public/map.png';

export default function Address() {
  const { ref, isOpen, toggle } = usePopupMenu<HTMLDivElement>();

  return (
    <div
      className='flex justify-between align-baseline'
      ref={ref}
    >
      <Image
        src={mapPoint}
        width={16}
        height={16}
        alt='Маркер карты'
      />
      <div className='flex flex-col ml-3 w-44 h-10'>
        <p className='text-nowrap'>Брест, ул. Гоголя 2, офис 1</p>
        <button
          className='font-medium hover:text-blue-600 text-left'
          onClick={() => toggle()}
        >
          Посмотреть на карте
        </button>
      </div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4  p-6 bg-white rounded-xl shadow-3xl z-50 ${
          isOpen ? 'visible' : 'collapse'
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='#73777C'
          className='size-5 absolute top-1 right-1 cursor-pointer'
          onClick={() => toggle()}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>

        <Image
          src={Map}
          width={1082}
          height={588}
          alt='map'
        />
      </div>
    </div>
  );
}
