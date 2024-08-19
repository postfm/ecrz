'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface DropdownMenuProps {
  title: string;
  options: { key: string; title: string }[];
  onSelect?: (key: string) => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  options,
  onSelect,
}) => {
  return (
    <Menu>
      <MenuButton className='inline-flex items-center gap-2 font-medium text-sm'>
        {({ active, hover }) => (
          <>
          <span style={{ color: hover ? 'rgb(30, 136, 229)' : 'inherit' }}>
              {title}
            </span>
            {active ? (
              <ChevronUpIcon className='size-4 fill-gray-400' />
            ) : (
              <ChevronDownIcon className='size-4 fill-gray-400' />
            )}
          </>
        )}
      </MenuButton>
      <MenuItems
        anchor='bottom'
        className='bg-white shadow-3xl rounded-md  p-4'
        modal={false}
      >
        {options.map((option) => (
          <MenuItem key={option.key}>
            {({ focus }) => (
              <button
                onClick={() => onSelect?.(option.key)}
                className={
                  'block pt-3 pr-4 pb-3 pl-4 text-left w-full rounded-md'
                }
                style={{ backgroundColor: focus ? '#F6F6F6' : '#fff' }}
              >
                {option.title}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
