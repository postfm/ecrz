import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function Grounds() {
  return (
    <Menu>
      <MenuButton className='inline-flex items-center gap-2 font-medium text-sm hover:text-sky-500'>
        Участки
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
            Участки до 10 сот.
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href=''
          >
            Участки до 20 сот.
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/license'
          >
            Участки ИЖС
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/license'
          >
            Участки Промназначения
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/license'
          >
            Все объекты
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
