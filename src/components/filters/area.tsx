import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React from 'react';

export default function Area() {
  return (
    <div className='border-r-2'>
      <Menu>
        <MenuButton className='inline-flex items-center justify-between gap-2 font-medium hover:text-sky-600 p-6 w-60'>
          <div className='flex flex-col items-start'>
            <p className='font-normal text-xs text-gray-500 mb-2'>Площадь</p>
            <div className='inline-flex justify-end'>
              <p className='font-medium text-base mr-2'>20 - 40</p>
              <p className='font-medium text-base text-gray-500'>
                м<sup>2</sup>
              </p>
            </div>
          </div>
          <ChevronDownIcon className='size-4 fill-gray-400' />
        </MenuButton>
        <MenuItems
          anchor='bottom'
          className='bg-white shadow-3xl rounded-md mt-2'
        >
          <MenuItem>
            <Link
              className='block pt-3 pr-4 pb-3 pl-4'
              href='/apartaments'
            >
              1-к. квартиры
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className='block pt-3 pr-4 pb-3 pl-4'
              href='/apartaments'
            >
              2-к. квартиры
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className='block pt-3 pr-4 pb-3 pl-4'
              href=''
            >
              3-к. квартиры
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className='block pt-3 pr-4 pb-3 pl-4'
              href=''
            >
              4-к. квартиры
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className='block pt-3 pr-4 pb-3 pl-4'
              href=''
            >
              Комнаты в квартирах
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
