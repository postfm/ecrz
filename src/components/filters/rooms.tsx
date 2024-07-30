'use client';

import { useOutsideClick } from '@/hooks';
import { Button, Checkbox, Input } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';

export default function Rooms() {
  const [status, setStatus] = useState(false);
  const outsideClick = useOutsideClick<HTMLDivElement>(() => {
    status ? setStatus(!status) : setStatus(false);
  });

  return (
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
              Комната
            </div>
          ) : (
            <div className='flex flex-col items-start'>
              <p className='font-normal text-xs text-gray-500 mb-2'>Комната</p>
              1, 2
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
        className={`absolute top-24 w-fit mt-2 bg-white rounded-md shadow-3xl  ${
          status ? 'visible' : 'collapse'
        }`}
      >
        <form className='font-normal text-xs  '>
          <fieldset className='flex gap-2 border-b-2 p-6 pb-12'>
            <Checkbox className='flex justify-center items-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer h-12 w-fit p-2 rounded bg-white data-[checked]:bg-blue-100 data-[checked]:text-blue-700 data-[checked]:font-medium text-center'>
              Студия
            </Checkbox>
            <Checkbox className='flex justify-center items-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer size-12 rounded bg-white data-[checked]:bg-blue-500 data-[checked]:text-blue-700 data-[checked]:font-medium text-center'>
              1
            </Checkbox>
            <Checkbox className='flex justify-center items-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer size-12 rounded bg-white data-[checked]:bg-blue-500 data-[checked]:text-blue-700 data-[checked]:font-medium text-center'>
              2
            </Checkbox>
            <Checkbox className='flex justify-center items-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer size-12 rounded bg-white data-[checked]:bg-blue-500 data-[checked]:text-blue-700 data-[checked]:font-medium text-center'>
              3
            </Checkbox>
            <Checkbox className='flex justify-center items-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer size-12 rounded bg-white data-[checked]:bg-blue-500 data-[checked]:text-blue-700 data-[checked]:font-medium text-center'>
              4+
            </Checkbox>
          </fieldset>
          <fieldset className='flex justify-between items-center p-6 gap-4'>
            <Input
              className='rounded border-blue-600 border pt-4 pb-4 pl-14 pr-14 text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white'
              type='reset'
              value='Сбросить'
            />
            <Input
              className='rounded border-blue-600 border bg-blue-600 hover:bg-blue-800 text-white pt-4 pb-4 pl-12 pr-12 hover:cursor-pointer'
              type='submit'
              value='Применить'
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}
