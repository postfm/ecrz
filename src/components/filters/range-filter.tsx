'use client';

import { usePopupMenu } from '@/hooks/use-popup-menu';
import { RangeFilter } from '@/types';
import { Input } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import React, { ReactNode, useState } from 'react';

interface RangeFilterProps {
  filterProps: RangeFilter;
  unit: ReactNode;
  onSubmit: (filterKey: string, min?: number, max?: number) => void;
}

export default function RangeFilterComponent({ filterProps, unit, onSubmit }: RangeFilterProps) {
  const { ref, isOpen, toggle } = usePopupMenu<HTMLDivElement>();

  const [minValue, setMinValue] = useState<number>();
  const [maxValue, setMaxValue] = useState<number>();

  return (
    <div
      className='relative'
      ref={ref}
    >
      <div className='border-r-2'>
        <button
          className='inline-flex items-center justify-between gap-2 font-medium hover:text-sky-600 p-6 w-60'
          onClick={toggle}
        >
          {isOpen || (typeof minValue === 'undefined' && typeof maxValue === 'undefined') ? (
            <div
              className={`flex flex-col items-start h-12 justify-center font-normal text-sm ${
                isOpen ? 'text-blue-500' : 'text-black'
              }`}
            >
              {filterProps.name}
            </div>
          ) : (
            <div className='flex flex-col items-start'>
              <p className='font-normal text-xs text-gray-500 mb-2'>{filterProps.name}</p>
              <div className='flex'>
                {minValue} - {maxValue}
                <span className='font-medium text-base text-gray-500 ml-2'>{unit}</span>
              </div>
            </div>
          )}

          {isOpen ? (
            <ChevronUpIcon className='size-4 fill-gray-400' />
          ) : (
            <ChevronDownIcon className='size-4 fill-gray-400' />
          )}
        </button>
      </div>
      <div
        className={`absolute top-24 w-fit mt-2 bg-white rounded-md shadow-3xl  ${
          isOpen ? 'visible' : 'collapse'
        }`}
      >
        <form className='font-normal text-xs  '>
          <fieldset className='flex gap-2 border-b-2 p-6 pb-6'>
            <label className='group relative'>
              <Input
                className='peer w-40 h-14 rounded border-gray-500 border p-4 font-normal text-sm data-[focus]:outline-none data-[active]:outline-none data-[hover]:outline-none remove-arrow'
                type='number'
                pattern='[0-9\s]'
                value={minValue}
                onChange={(evt) => {
                  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
                  setMinValue(Number(evt.target.value));
                }}
              />
              <span
                className={`absolute left-4 top-2/4 -translate-y-2/4 ${
                  minValue ? '-translate-y-6' : 'peer-focus:-translate-y-6'
                }`}
              >
                От
              </span>
              <span className='absolute right-4 top-2/4 -translate-y-2/4 text-gray-400'>
                {unit}
              </span>
            </label>
            <label className='relative'>
              <Input
                className='peer w-40 h-14 rounded border-gray-500 border p-4 font-normal text-sm data-[focus]:outline-none data-[active]:outline-none data-[hover]:outline-none remove-arrow'
                type='number'
                value={maxValue}
                pattern='[0-9\s]'
                onChange={(evt) => {
                  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
                  setMaxValue(Number(evt.target.value));
                }}
              />
              <span
                className={`absolute left-4 top-2/4 -translate-y-2/4 ${
                  maxValue ? '-translate-y-6' : 'peer-focus:-translate-y-6'
                }`}
              >
                До
              </span>
              <span className='absolute right-4 top-2/4 -translate-y-2/4 text-gray-400'>
                {unit}
              </span>
            </label>
          </fieldset>
          <fieldset className='flex justify-between items-center p-6 gap-4'>
            <Input
              className='rounded border-blue-600 border pt-4 pb-4 pl-14 pr-14 text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white'
              type='reset'
              value='Сбросить'
              onClick={() => {
                setMaxValue(undefined);
                setMinValue(undefined);
                console.log(maxValue);
              }}
            />
            <Input
              className='rounded border-blue-600 border bg-blue-600 hover:bg-blue-800 text-white pt-4 pb-4 pl-12 pr-12 hover:cursor-pointer'
              type='submit'
              value='Применить'
              onClick={(evt) => {
                evt.preventDefault();
                onSubmit(filterProps.name, minValue, maxValue);
                toggle();
              }}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}
