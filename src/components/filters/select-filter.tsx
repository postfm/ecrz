'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import { usePopupMenu } from '@/hooks/use-popup-menu';
import { RentalType } from '@/types';

interface SelectFilterProps {
  initialOption: { value: string; label: string };
  options: { value: string; label: string; disabled?: boolean }[];
  onChange?: (value: RentalType) => void;
}

export default function SelectFilter({ onChange, initialOption, options }: SelectFilterProps) {
  const { ref, isOpen, toggle } = usePopupMenu<HTMLDivElement>();
  const [label, setLabel] = useState(initialOption.label);

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
          {isOpen ? (
            <div className='flex flex-col items-start h-12 justify-center font-normal text-sm text-blue-500'>
              Тип
            </div>
          ) : (
            <div className='flex flex-col items-start'>
              <p className='font-normal text-xs text-gray-500 mb-2'>Тип</p>
              {label}
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
        className={`absolute top-24 w-60 mt-2 bg-white rounded-md shadow-3xl p-3  z-50 ${
          isOpen ? 'visible' : 'collapse'
        }`}
      >
        {options.map((option) => {
          return (
            <button
              key={option.value}
              className='block w-full h-12 text-left pt-3 pr-4 pb-3 pl-4 rounded hover:bg-gray-100'
              disabled={option.disabled}
              onClick={() => {
                setLabel(option.label);
                onChange?.(option.value as RentalType);
                toggle();
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
