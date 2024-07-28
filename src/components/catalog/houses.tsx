import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
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
          <Link
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/houses'
          >
            Дома
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/houses'
          >
            Часть дома
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className='block pt-3 pr-4 pb-3 pl-4'
            href='/houses'
          >
            Дачи
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
