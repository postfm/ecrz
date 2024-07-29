import { ChevronDownIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function Rooms() {
  return (
    <div className='border-r-2 relative'>
      <button className='inline-flex items-center justify-between gap-2 font-medium hover:text-sky-600 p-6 w-60'>
        <div className='flex flex-col items-start'>
          <p className='font-normal text-xs text-gray-500 mb-2'>Комната</p>
          <div className='inline-flex justify-end'>
            <p className='font-medium text-base mr-2'>Студия, 1, 2</p>
            <p className='font-medium text-base text-gray-500'>кмн.</p>
          </div>
        </div>
        <ChevronDownIcon className='size-4 fill-gray-400' />
      </button>
    </div>
  );
}
