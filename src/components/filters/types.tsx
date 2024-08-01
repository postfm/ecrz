'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import { useOutsideClick } from './../../hooks/use-outside-click';
import { RentalType, TransformRentalType } from '@/types';
import Filters from './filters';
import CardList from '../card-list/card-list';

export default function Types() {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState(RentalType.Apartment);

  const outsideClick = useOutsideClick<HTMLDivElement>(() => {
    status ? setStatus(!status) : setStatus(false);
  });

  return (
    <>
      <div className='flex mb-4 bg-white rounded'>
        <div
          className='relative'
          ref={outsideClick}
        >
          <div className='border-r-2'>
            <button
              className='inline-flex items-center justify-between gap-2 font-medium hover:text-sky-600 p-6 w-60'
              onClick={() => {
                setStatus(!status);
              }}
            >
              {status ? (
                <div className='flex flex-col items-start h-12 justify-center font-normal text-sm text-blue-500'>
                  Тип
                </div>
              ) : (
                <div className='flex flex-col items-start'>
                  <p className='font-normal text-xs text-gray-500 mb-2'>Тип</p>
                  {TransformRentalType[type]}
                </div>
              )}

              {status ? (
                <ChevronUpIcon className='size-4 fill-gray-400' />
              ) : (
                <ChevronDownIcon className='size-4 fill-gray-400' />
              )}
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
                setType(RentalType.Apartment);
                setStatus(!status);
              }}
            >
              Квартиры
            </button>
            <button
              className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
              onClick={() => {
                setType(RentalType.House);
                setStatus(!status);
              }}
            >
              Дома
            </button>
            <button
              className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
              onClick={() => {
                // setType(RentalType.Garden);
                setStatus(!status);
              }}
            >
              Участки
            </button>
            <button
              className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
              onClick={() => {
                // setType(RentalType.Commercial);
                setStatus(!status);
              }}
            >
              Коммерческая
            </button>
          </div>
        </div>
        <Filters type={type} />
      </div>
      <CardList type={type} />
    </>
  );
}
