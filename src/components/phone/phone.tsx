import Image from 'next/image';
import phone from '../../../public/phone.svg';
import React from 'react';

interface PhoneProps {
  footer: boolean;
}

const Phone: React.FC<PhoneProps> = ({ footer = false }) => {
  return (
    <div className={`flex flex-col ${footer ? 'items-end' : 'items-start'} `}>
      <div className='flex'>
        {!footer && (
          <Image
            src={phone}
            width={12}
            height={16}
            alt='Иконка телефона'
          />
        )}
        <p className={`font-normal ${footer ? 'text-xl' : 'text-sm'} ml-2 whitespace-nowrap`}>
          <a
            href='tel:+375292001080'
            className=' cursor-pointer hover:text-blue-600'
          >
            +375 (29) 200-10-80
          </a>
        </p>
      </div>
      <div className='flex'>
        {!footer && (
          <Image
            src={phone}
            width={12}
            height={16}
            alt='Иконка телефона'
          />
        )}
        <p className={`font-normal ${footer ? 'text-xl' : 'text-sm'} ml-2 whitespace-nowrap`}>
          <a
            href='tel:80162932050'
            className=' cursor-pointer hover:text-blue-600'
          >
            8 (0162) 93-20-50
          </a>
        </p>
      </div>
    </div>
  );
};

export default Phone;
