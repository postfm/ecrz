'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import { useOutsideClick } from './../../hooks/use-outside-click';

export default function Types() {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState('Квартиры');
  const outsideClick = useOutsideClick(() => setStatus(!status));

  return (
    <div className='relative'>
      <div className='border-r-2'>
        <button
          className='inline-flex items-center justify-between gap-2 font-medium hover:text-sky-600 p-6 w-60'
          onClick={() => setStatus(!status)}
          ref={outsideClick}
        >
          <div className='flex flex-col items-start'>
            <p className={`font-normal text-xs ${status ? 'text-blue-400' : 'text-gray-500'} mb-2`}>
              Тип
            </p>
            {status ? '' : type}
          </div>
          <ChevronDownIcon className='size-4 fill-gray-400' />
        </button>
      </div>
      <div
        className={`absolute top-24 w-60 mt-2 bg-white rounded-md shadow-3xl p-3  ${
          status ? 'visible' : 'collapse'
        }`}
      >
        <button
          className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
          onClick={() => {
            setType('Квартиры');
            setStatus(!status);
          }}
        >
          Квартиры
        </button>
        <button
          className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
          onClick={() => {
            setType('Дома');
            setStatus(!status);
          }}
        >
          Дома
        </button>
        <button
          className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
          onClick={() => {
            setType('Участки');
            setStatus(!status);
          }}
        >
          Участки
        </button>
        <button
          className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
          onClick={() => {
            setType('Коммерческая');
            setStatus(!status);
          }}
        >
          Коммерческая
        </button>
      </div>
    </div>
  );
}
