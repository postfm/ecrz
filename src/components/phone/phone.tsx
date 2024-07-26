import Image from 'next/image';
import phone from '../../../public/phone.svg';

export default function Phone() {
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <Image
          src={phone}
          width={12}
          height={16}
          alt='Иконка телефона'
        />
        <p className='font-normal text-sm ml-2'>+375(29)200-10-80</p>
      </div>
      <div className='flex'>
        <Image
          src={phone}
          width={12}
          height={16}
          alt='Иконка телефона'
        />
        <p className='font-normal text-sm ml-2'>8(0162)93-20-50</p>
      </div>
    </div>
  );
}
