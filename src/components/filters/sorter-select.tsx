import { Select } from '@headlessui/react';
import Image from 'next/image';
import Sort from './../../../public/sort.svg';
import { useState } from 'react';

interface SorterSelectProps {
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
}

export const SorterSelect = ({ options, onChange }: SorterSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value);

  return (
    <div className='flex ml-auto mb-5'>
      <Image
        src={Sort}
        width={16}
        height={16}
        alt='Иконка сортировки'
        className='mr-4 ml-4'
      />
      <Select
        name='sortBy'
        aria-label='Sorting items'
        className='bg-inherit w-auto font-medium text-sm hover:text-sky-600'
        value={selectedValue}
        onChange={(evt) => {
          setSelectedValue(evt.target.value);
          onChange?.(evt.target.value);
        }}
      >
        {options.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className='hover:text-black'
          >
            {item.label}
          </option>
        ))}
      </Select>
    </div>
  );
};
