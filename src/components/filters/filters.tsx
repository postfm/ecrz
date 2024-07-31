'use client';

import React from 'react';
import Types from './types';
import Buttons from './buttons';
import { ChoiceFilter, isChoiceFilter, isRangeFilter, RangeFilter, RentalType } from '@/types';
import ChoiceFilterComponent from './choice-filter';
import RangeFilterComponent from './range-filter';
import { getFilterUnitByName } from '@/utils/getFilterUnitByName';

interface FiltersProps {
  filters: (ChoiceFilter | RangeFilter)[];
  type: RentalType;
  changeType: (type: RentalType) => void;
}

export default function Filters({ filters, type, changeType }: FiltersProps) {
  return (
    <div className='flex mb-4 bg-white rounded'>
      <Types
        type={type}
        changeType={() => changeType(type)}
      />

      {filters.map((filter) => {
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
      <Buttons />
    </div>
  );
}
