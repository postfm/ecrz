import { Select } from '@headlessui/react';
import Link from 'next/link';
import sort from './../../../public/Sort.svg';
import Image from 'next/image';
import Filters from '@/components/filters/filters';

export default function Page() {
  return (
    <>
      <div className='pt-5 mb-4'>
        <div className='font-normal text-sm mb-4'>
          <Link href={'/'}>Главная</Link> /{' '}
          <Link
            href={'/apartaments'}
            className='text-gray-500'
          >
            Купить 1-комнатную квартиру
          </Link>
        </div>
        <div className='flex justify-between mb-5'>
          <p className='font-medium text-3xl relative'>
            Купить 1-комнатную квартиру
            <span className='font-normal text-sm absolute top-2 -right-32 text-gray-500'>
              100 результатов
            </span>
          </p>
          <div className='flex'>
            <Image
              src={sort}
              width={16}
              height={16}
              alt='Иконка сортировки'
              className='mr-4'
            />
            <Select
              name='sortBy'
              aria-label='Sorting items'
              className='bg-inherit w-auto font-medium text-sm hover:text-sky-600'
            >
              <option
                value='price'
                className='hover:text-black'
              >
                Сначала дорогие
              </option>
              <option value='-price'>Сначала дешевые</option>
              <option value='totalArea'>Площадь по убыванию</option>
              <option value='-totalArea'>Площадь по возрастанию</option>
            </Select>
          </div>
        </div>
      </div>
      <Filters />
    </>
  );
}
