import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import React from 'react';

export default function Commercial() {
  return (
    <Menu>
      <MenuButton className='inline-flex items-center gap-2 font-medium text-sm hover:text-sky-500'>
        Коммерческая недвижимость
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
            Офисы
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href=''
          >
            Склады
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/license'
          >
            Свободное назначение
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
