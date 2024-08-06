import Image from 'next/image';
import phone from '../../../public/phone.svg';
import React from 'react';

interface PhoneProps {
  footer: boolean;
}

const Phone: React.FC<PhoneProps> = ({ footer = false }) => {
  return (
    <div className={`flex flex-col ${footer ? 'items-end' : 'items-start'} sm:hidden`}>
      <div className='flex'>
        {!footer && (
          <Image
            src={phone}
            width={12}
            height={16}
            alt='Иконка телефона'
          />
        )}
        <p className={`font-normal ${footer ? 'text-xl' : 'text-sm'} ml-2`}>+375 (29) 200-10-80</p>
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
        <p className={`font-normal ${footer ? 'text-xl' : 'text-sm'} ml-2`}>8 (0162) 93-20-50</p>
      </div>
    </div>
  );
};

export default Phone;
