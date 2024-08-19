import React from 'react';
import Apartments from './apartments';
import Houses from './houses';
import Grounds from './grounds';
import Commercial from './commercial';
import Legal from './legal';

export default function Catalog() {
  return (
    <div className='flex justify-between max-2xl:w-[1302px] pt-4 pb-4 bg-white sm:flex-col'>
      <Apartments />
      <Houses />
      <Grounds />
      <Commercial />
      <Legal />
      <div className='font-medium text-sm hover:text-blue-600 cursor-pointer'>
        О компании
      </div>
    </div>
  );
}
