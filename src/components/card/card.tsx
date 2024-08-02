import Image from 'next/image';
import Photo1 from '../../../public/images/photo-1.png';
import { PropertyEntity } from '@/types';
import Fridge from '../../../public/fridge.svg';
import Bed from '../../../public/bed.svg';
import Tabler from '../../../public/tabler-stairs.svg';

interface CardProps {
  property: PropertyEntity;
}

export default function Card({ property }: CardProps) {
  return (
    <div className='flex flex-col w-[308px] h-[440px] rounded-xl bg-white'>
      <div className='w-full h-[214px]'>
        <Image
          src={Photo1}
          alt=''
        />
      </div>
      <div className='flex flex-col w-full h-auto p-[18px] pb-6'>
        <div className='flex flex-col items-start pb-4 border-b-2'>
          <div className='font-medium text-xs text-gray-600'>Квартира в новостройке</div>
          <div className='font-medium text-lg text-blue-600'>{property.name}</div>
          <div className='font-normal text-sm text-gray-800'>Брест, ул. Карла Маркса, 12</div>
        </div>
        <div className='flex flex-col items-start'>
          <div className='flex align-bottom mt-4 mb-4 font-normal text-sm text-gray-800'>
            <div className='flex mr-4'>
              <Image
                src={Fridge}
                alt='fridge'
                className='mr-1'
              />
              <div>
                14м<sup>2</sup>
              </div>
            </div>
            <div className='flex mr-4'>
              <Image
                src={Bed}
                alt='bed'
                className='mr-1'
              />
              <div>
                25м<sup>2</sup>
              </div>
            </div>
            <div className='flex mr-4'>
              <Image
                src={Tabler}
                alt='tabler'
                className='mr-1'
              />
              <div>3/10 этаж</div>
            </div>
          </div>
          <div className='flex font-medium text-lg mb-2'>
            <div className=' pr-4 border-r-2 mr-4'>{`$ ${property.priceUsd}`}</div>
            <div>{`BYN ${property.priceByn}`}</div>
          </div>
          <div className='font-normal text-sm text-gray-600'>
            $ 1000 / м<sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}
