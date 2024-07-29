import React from 'react';
import AdditionalFilters from './additional-filters';

export default function Buttons() {
  return (
    <div className='flex justify-center grow items-center'>
      <AdditionalFilters />
      <button className='w-24 h-14 bg-black text-white rounded'>Показать</button>
    </div>
  );
}
