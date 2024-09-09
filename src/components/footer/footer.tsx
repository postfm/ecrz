'use client';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Address from '../address/address';
import Call from '../call/call';
import Logo from '../logo/logo';
import Phone from '../phone/phone';
import Sale from '../sale/sale';
import Social from '../social/social';

interface FooterProps {
  pageType: string;
}

export default function Footer({ pageType }: FooterProps) {
  return (
    <div className='container p-8 mt-auto'>
      <div className='bg-white rounded-2xl p-8   lg:container'>
        <footer className='flex flex-wrap justify-between align-top text-sm text-nowrap  md:flex-col'>
          <div className='flex flex-col items-start'>
            <div className='mb-6'>
              <Logo />
            </div>
            <div className='mb-6'>
              <Address />
            </div>
            <div className='mb-6'>
              <Sale />
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='font-medium text-sm mb-4'>Недвижимость</h2>
            <Popover>
              <PopoverButton className='block text-sm font-normal text-gray-500 focus:outline-none data-[active]:text-gray-700 data-[hover]:text-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mb-4'>
                Квартиры
              </PopoverButton>
              <PopoverPanel
                transition
                anchor='top'
                className='rounded-xl bg-gray-50 text-sm transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
              >
                <div className='p-3 shadow-3xl'>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>1-к. квартиры</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>2-к. квартиры</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>3-к. квартиры</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>4-к. квартиры</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Комнаты в квартирах</p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <Popover>
              <PopoverButton className='block text-sm font-normal text-gray-500 focus:outline-none data-[active]:text-gray-700 data-[hover]:text-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mb-4'>
                Дома
              </PopoverButton>
              <PopoverPanel
                transition
                anchor='top'
                className='rounded-xl bg-gray-50 text-sm transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
              >
                <div className='p-3 shadow-3xl'>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Дома</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Часть дома</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Дачи</p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <Popover>
              <PopoverButton className='block text-sm font-normal text-gray-500 focus:outline-none data-[active]:text-gray-700 data-[hover]:text-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mb-4'>
                Участки
              </PopoverButton>
              <PopoverPanel
                transition
                anchor='top'
                className='rounded-xl bg-gray-50 text-sm transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
              >
                <div className='p-3 shadow-3xl'>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Участки до 10 сот.</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Участки до 20 сот.</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Участки ИЖС</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Участки Промназначения</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Все объекты</p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <Popover>
              <PopoverButton className='block text-sm font-normal text-gray-500 focus:outline-none data-[active]:text-gray-700 data-[hover]:text-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mb-4'>
                Коммерческая
              </PopoverButton>
              <PopoverPanel
                transition
                anchor='top'
                className='rounded-xl bg-gray-50 text-sm transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0'
              >
                <div className='p-3 shadow-3xl'>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Офисы</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Склады</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Свободное назначение</p>
                  </a>
                  <a
                    className='block pt-3 pr-4 pb-3 pl-4'
                    href='#'
                  >
                    <p className='font-normal text-base'>Все объекты</p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
          <div className='flex flex-col items-start'>
            <h2 className='font-medium text-sm mb-4'>Юридические услуги</h2>
            <a
              className='font-normal text-sm text-gray-500 hover:text-gray-700 mb-4'
              href=''
            >
              Продажа недвижимости
            </a>
            <a
              className='font-normal text-sm text-gray-500 hover:text-gray-700 mb-4'
              href=''
            >
              Помощь в оформлении кредита
            </a>
            <a
              className='font-normal text-sm text-gray-500 hover:text-gray-700 mb-4'
              href=''
            >
              Оформление тех. документации
            </a>
            <a
              className='font-normal text-sm text-gray-500 hover:text-gray-700 mb-4'
              href=''
            >
              Вывод в нежилой фонд
            </a>
          </div>
          <div className='flex flex-col items-start'>
            <a
              className='font-medium text-sm hover:text-sky-600 mb-6'
              href=''
            >
              О компании
            </a>
            <a
              className='font-medium text-sm hover:text-sky-600 mb-6'
              href=''
            >
              Контакты
            </a>
            <a
              className='font-medium text-sm hover:text-sky-600 mb-6'
              href=''
            >
              Трудоустройство
            </a>
          </div>
          <div className='flex flex-col items-end md:items-start'>
            <div className='mb-4'>
              <Phone footer={true} />
            </div>
            <div className='mb-4'>
              <Social />
            </div>
            <div className='mb-4'>
              <Call />
            </div>
          </div>
        </footer>
        <div>
          <p className='font-normal text-sm mb-1'>2023 © Единый Центр Реализации Жилья</p>
          <a
            className='font-normal text-sm hover:text-sky-600'
            href=''
          >
            Политика Конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
}
