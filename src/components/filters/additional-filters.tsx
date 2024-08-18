import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React from 'react';

export default function AdditionalFilters() {
  return (
    <Menu>
      <MenuButton
        className='inline-flex items-center justify-center gap-2 font-medium text-sm w-40 h-14 rounded mr-4'
        style={{ backgroundColor: '#F6F6F6' }}
      >
        <AdjustmentsHorizontalIcon className='size-4' />
        Доп. фильты
      </MenuButton>
      <MenuItems anchor='bottom' className='bg-white shadow-3xl rounded-md'>
        <MenuItem>
          <Link className='block pt-3 pr-4 pb-3 pl-4' href='/apartaments'>
            1-к. квартиры
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className='block pt-3 pr-4 pb-3 pl-4' href='/apartaments'>
            2-к. квартиры
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className='block pt-3 pr-4 pb-3 pl-4' href=''>
            3-к. квартиры
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className='block pt-3 pr-4 pb-3 pl-4' href=''>
            4-к. квартиры
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className='block pt-3 pr-4 pb-3 pl-4' href=''>
            Комнаты в квартирах
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
