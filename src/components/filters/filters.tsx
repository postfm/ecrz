'use client';

import React from 'react';
import {
  isChoiceFilter,
  isRangeFilter,
  RentalType,
  TypeSelectOptions,
} from '@/types';
import ChoiceFilterComponent from './choice-filter';
import RangeFilterComponent from './range-filter';
import { getFilterUnitByName } from '@/utils/getFilterUnitByName';
import { useQuery } from '@tanstack/react-query';
import { getFilters } from '@/api/getFilters';
import AdditionalFilters from './additional-filters';
import SelectFilter from './select-filter';

interface FiltersProps {
  type: RentalType;
  onFilterChange: (key: string, value: string | string[]) => void;
}

export default function Filters({ type, onFilterChange }: FiltersProps) {
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
    <div className='flex mb-4 bg-white rounded'>
      <SelectFilter
        options={TypeSelectOptions}
        initialOption={TypeSelectOptions[0]}
      />
      {data.map((filter) => {
        if (isChoiceFilter(filter)) {
          return (
            <ChoiceFilterComponent
              key={filter.key}
              filterProps={filter}
              onSubmit={(key, value) => onFilterChange(key, value)}
            />
          );
        }

        if (isRangeFilter(filter)) {
          return (
            <RangeFilterComponent
              key={filter.name}
              filterProps={filter}
              unit={getFilterUnitByName(filter.name)}
              onSubmit={(filterKey, min, max) => {
                console.log(min, max);
                if (max) {
                  onFilterChange(filter.max.key, String(max));
                }

                if (min) {
                  onFilterChange(filter.min.key, String(min));
                }
              }}
            />
          );
        }

        return null;
      })}
      <div className='flex justify-center grow items-center'>
        <AdditionalFilters />
        <button className='w-24 h-14 bg-black text-white rounded'>
          Показать
        </button>
      </div>
    </div>
  );
}
