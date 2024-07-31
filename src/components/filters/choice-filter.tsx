'use client';

import { usePopupMenu } from '@/hooks/use-popup-menu';
import { ChoiceFilter } from '@/types';
import { Checkbox, Field, Input, Label } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';

interface ChoiceFilterProps {
  filterProps: ChoiceFilter;
  onSubmit: (filterKey: string, selectedOptions: string[]) => void;
}

export default function ChoiceFilterComponent({ filterProps, onSubmit }: ChoiceFilterProps) {
  const [selectedChoiceKeys, setSelectedChoiceKeys] = useState<string[]>([]);
  const { ref, isOpen, toggle } = usePopupMenu<HTMLDivElement>();

  function handleChange(key: string) {
    if (selectedChoiceKeys.includes(key)) {
      setSelectedChoiceKeys(selectedChoiceKeys.filter((item) => item !== key));
    } else {
      setSelectedChoiceKeys([...selectedChoiceKeys, key]);
    }
  }

  function renderSelectedChoices() {
    return filterProps.choices
      .filter((item) => selectedChoiceKeys.includes(item.key))
      .map((item) => item.name)
      .join(', ');
  }

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
          {isOpen || selectedChoiceKeys.length <= 0 ? (
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
              {renderSelectedChoices()}
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
          <fieldset className='flex flex-col gap-2 border-b-2 p-6 pb-1 font-normal text-base'>
            {filterProps.choices.map((choice) => {
              return (
                <Field
                  key={choice.key}
                  className='flex items-center gap-2 w-full hover:bg-gray-100 hover:cursor-pointer h-12 rounded pt-3 pb-3 pl-4 pr-4'
                >
                  <Checkbox
                    checked={selectedChoiceKeys.includes(choice.key)}
                    onChange={() => handleChange(choice.key)}
                    className='group block size-5 rounded border bg-white data-[checked]:bg-blue-500 mr-3'
                  >
                    <svg
                      className='stroke-white opacity-0 group-data-[checked]:opacity-100'
                      viewBox='0 0 14 14'
                      fill='none'
                    >
                      <path
                        d='M3 8L6 11L11 3.5'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Checkbox>
                  <Label>{choice.name}</Label>
                </Field>
              );
            })}
          </fieldset>
          <fieldset className='flex justify-between items-center p-6 gap-4'>
            <Input
              className='rounded border-blue-600 border pt-4 pb-4 pl-14 pr-14 text-blue-600 hover:cursor-pointer hover:bg-blue-600 hover:text-white'
              type='reset'
              value='Сбросить'
              onClick={() => setSelectedChoiceKeys([])}
            />
            <Input
              className='rounded border-blue-600 border bg-blue-600 hover:bg-blue-800 text-white pt-4 pb-4 pl-12 pr-12 hover:cursor-pointer'
              type='submit'
              value='Применить'
              onClick={(evt) => {
                evt.preventDefault();
                onSubmit(filterProps.key, selectedChoiceKeys);
                toggle();
              }}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
}
