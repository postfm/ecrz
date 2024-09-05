import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function CloseButton() {
  return (
    <button className='w-[18px] h-auto hidden md:block'>
      <XMarkIcon />
    </button>
  );
}
