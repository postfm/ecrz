import React from 'react';
import Apartments from './apartments';
import Houses from './houses';
import Grounds from './grounds';
import Commercial from './commercial';
import Legal from './legal';
import { PageType } from '@/types';

interface CatalogProps {
  pageType: string;
}

export default function Catalog({ pageType }: CatalogProps) {
  return (
    <div
      className={`flex justify-between max-2xl:w-[1302px] pt-4 pb-4 ${
        pageType === PageType.MainPage ? 'bg-inherit' : 'bg-white'
      } md:flex-col md:text-lg`}
    >
      <Apartments />
      <Houses />
      <Grounds />
      <Commercial />
      <Legal />
      <div className='font-medium text-sm hover:text-blue-600 cursor-pointer'>О компании</div>
    </div>
  );
}
