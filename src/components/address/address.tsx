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
      <div className='flex flex-col ml-3'>
        <p className='text-sm text-nowrap'>Брест, ул. Гоголя 2, офис 1</p>
        <button
          className='font-medium text-sm hover:text-blue-600 text-left'
          onClick={() => toggle()}
        >
          Посмотреть на карте
        </button>
      </div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4  p-6 bg-white rounded-xl shadow-3xl p-3  z-50 ${
          isOpen ? 'visible' : 'collapse'
        }`}
      >
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
