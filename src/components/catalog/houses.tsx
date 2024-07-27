import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function Houses() {
  return (
    <Menu>
      <MenuButton className='inline-flex items-center gap-2 font-medium text-sm hover:text-sky-500'>
        Дома
        <ChevronDownIcon className='size-4 fill-gray-400' />
      </MenuButton>
      <MenuItems
        anchor='bottom'
        className='bg-white shadow-3xl rounded-md'
      >
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href=''
          >
            Дома
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href=''
          >
            Часть дома
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/license'
          >
            Дачи
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
