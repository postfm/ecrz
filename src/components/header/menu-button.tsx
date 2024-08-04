import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react';

export default function MenuButton() {
  return (
    <button className='w-[18px] h-auto hidden'>
      <Bars3Icon />
    </button>
  );
}
