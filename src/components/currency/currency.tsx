'use client';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Select,
} from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

const CURRENCY_OPTIONS = ['BYN', 'RUB', 'USD'];

export default function Currency() {
  const [selectedValue, setSelectedValue] = useState<string>(
    CURRENCY_OPTIONS[0],
  );

  return (
    <div className='sm:hidden'>
      <Listbox value={selectedValue} onChange={setSelectedValue}>
        <ListboxButton
          className='flex font-medium ml-auto items-center text-sm bg-inherit border-2 rounded-md px-3 w-[90px] h-[52px] text-center flex justify-center	'
          style={{ backgroundColor: '#F6F6F6' }}
        >
          {({ active }) => (
            <>
              {selectedValue}
              {active ? (
                <ChevronUpIcon className='size-4 fill-gray-400 ml-2' />
              ) : (
                <ChevronDownIcon className='size-4 fill-gray-400 ml-2' />
              )}
            </>
          )}
        </ListboxButton>

        <ListboxOptions
          anchor='bottom'
          aria-label='Sorting items'
          className='bg-white shadow-3xl rounded-md p-4'
          modal={false}
        >
          {CURRENCY_OPTIONS.map((item) => (
            <ListboxOption key={item} value={item}>
              {({ focus, selected }) => (
                <button
                  className='hover:text-black block pt-3 pr-4 pb-3 pl-4 text-left w-full rounded-md'
                  style={{
                    backgroundColor: focus || selected ? '#F6F6F6' : '#fff',
                  }}
                >
                  {item}
                </button>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
