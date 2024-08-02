import Image from 'next/image';
import Photo1 from '../../../public/images/photo-1.png';
import Photo4 from '../../../public/images/photo-4.png';
import { PropertyEntity, RentalType } from '@/types';
import Fridge from '../../../public/fridge.svg';
import Bed from '../../../public/bed.svg';
import Tabler from '../../../public/tabler-stairs.svg';
import Square from '../../../public/square.svg';
import { Carousel, IconButton } from '@material-tailwind/react';

interface CardProps {
  property: PropertyEntity;
  rentalType: RentalType;
}

export default function Card({ property, rentalType }: CardProps) {
  return (
    <div className='group flex flex-col w-[308px] h-full rounded-xl bg-white hover:shadow-3xl'>
      <div className='w-full h-[214px]'>
        <Carousel
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-[28px] h-1 bg-blue-600' : 'w-[28px] h-1 bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant='text'
              color='white'
              size='lg'
              onClick={handlePrev}
              className='!absolute top-2/4 left-2 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[36px] h-9 max-h-[36px] text-black bg-white hover:bg-white active:bg-white hidden group-hover:grid place-items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='size-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15.75 19.5 8.25 12l7.5-7.5'
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant='text'
              color='white'
              size='lg'
              onClick={handleNext}
              className='!absolute top-2/4 !right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[36px] h-9 max-h-[36px] text-black bg-white hover:bg-white active:bg-white hidden group-hover:grid place-items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='size-5'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m8.25 4.5 7.5 7.5-7.5 7.5'
                />
              </svg>
            </IconButton>
          )}
        >
          <Image
            src={rentalType === RentalType.Apartment ? Photo1 : Photo4}
            alt=''
          />
          <Image
            src={rentalType === RentalType.Apartment ? Photo1 : Photo4}
            alt=''
          />
          <Image
            src={rentalType === RentalType.Apartment ? Photo1 : Photo4}
            alt=''
          />
        </Carousel>
      </div>
      <div className='flex flex-col w-full h-auto p-[18px] pb-6'>
        <div className='flex flex-col items-start pb-4 border-b-2'>
          {rentalType === RentalType.Apartment && (
            <div className='font-medium text-xs text-gray-600'>Квартира в новостройке</div>
          )}

          <div className='font-medium text-lg text-blue-600'>{property.name}</div>
          {rentalType === RentalType.Apartment ? (
            <div className='font-normal text-sm text-gray-800'>Брест, ул. Карла Маркса, 12</div>
          ) : (
            <div className='font-normal text-sm text-gray-800'>
              пгт. Остромечево, ул. Агрономическая, корпус 2, д. 212А
            </div>
          )}
        </div>
        <div className='flex flex-col items-start'>
          <div className='flex align-bottom mt-4 mb-4 font-normal text-sm text-gray-800'>
            {rentalType !== RentalType.Apartment && (
              <div className='flex mr-4'>
                <Image
                  src={Square}
                  alt='square'
                  className='mr-1'
                />
                <div>10 сот</div>
              </div>
            )}

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
            {rentalType === RentalType.Apartment && (
              <>
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
              </>
            )}
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
