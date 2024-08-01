'use client';

import React from 'react';
import { isChoiceFilter, isRangeFilter, RentalType } from '@/types';
import ChoiceFilterComponent from './choice-filter';
import RangeFilterComponent from './range-filter';
import { getFilterUnitByName } from '@/utils/getFilterUnitByName';
import { useQuery } from '@tanstack/react-query';
import { getFilters } from '@/api/getFilters';
import AdditionalFilters from './additional-filters';

interface FiltersProps {
  type: RentalType;
}

export default function Filters({ type }: FiltersProps) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: [type],
    queryFn: async () => (await getFilters(type)).data,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data.map((filter) => {
        if (isChoiceFilter(filter)) {
          return (
            <ChoiceFilterComponent
              key={filter.key}
              filterProps={filter}
              // todo:
              onSubmit={() => {}}
            />
          );
        }

        if (isRangeFilter(filter)) {
          return (
            <RangeFilterComponent
              key={filter.name}
              filterProps={filter}
              unit={getFilterUnitByName(filter.name)}
              // todo:
              onSubmit={() => {}}
            />
          );
        }

        return null;
      })}
      <div className='flex justify-center grow items-center'>
        <AdditionalFilters />
        <button className='w-24 h-14 bg-black text-white rounded'>Показать</button>
      </div>
    </>
  );
}
