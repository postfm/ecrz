import Image from 'next/image';
import mapPoint from '../../../public/map-point.svg';

export default function Address() {
  return (
    <div className='flex justify-between align-baseline'>
      <Image
        src={mapPoint}
        width={16}
        height={16}
        alt='Маркер карты'
      />
      <div className='flex flex-col ml-3'>
        <p className='font-normal text-sm'>Брест, ул. Гоголя 2, офис 1</p>
        <a
          className='font-medium text-sm text-sky-400'
          href='#'
        >
          Посмотреть на карте
        </a>
      </div>
    </div>
  );
}
