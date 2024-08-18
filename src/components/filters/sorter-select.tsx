import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Sort from './../../../public/sort.svg';
import { useState } from 'react';
import clsx from 'clsx';

interface SorterSelectProps {
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
}

export const SorterSelect = ({ options, onChange }: SorterSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value);

  return (
    <Listbox
      value={selectedValue}
      onChange={(value) => {
        setSelectedValue(value);
        onChange?.(value);
      }}
    >
      <ListboxButton className='flex font-medium ml-auto mb-5 items-center text-sm'>
        {({ active }) => (
          <>
            <Image
              src={Sort}
              width={16}
              height={16}
              alt='Иконка сортировки'
              className='mr-4 ml-4'
            />
            {options.find((o) => selectedValue === o.value)?.label}
            {active ? (
              <ChevronUpIcon className='size-4 fill-gray-400 ml-4' />
            ) : (
              <ChevronDownIcon className='size-4 fill-gray-400 ml-4' />
            )}
          </>
        )}
      </ListboxButton>

      <ListboxOptions
        anchor='bottom'
        aria-label='Sorting items'
        className='bg-white shadow-3xl rounded-md p-4'
      >
        {options.map((item) => (
          <ListboxOption key={item.value} value={item.value}>
            {({ focus, selected }) => (
              <button
                className='hover:text-black block pt-3 pr-4 pb-3 pl-4 text-left w-full rounded-md'
                style={{
                  backgroundColor: focus || selected ? '#F6F6F6' : '#fff',
                }}
              >
                {item.label}
              </button>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};
