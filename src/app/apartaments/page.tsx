'use client';
import Filters from '@/components/filters/filters';
import { RentalType, SortOptions } from '@/types';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { MainSectionHeader } from '@/components/main-section-header';
import { SorterSelect } from '@/components/filters/sorter-select';
import CardList from '@/components/card-list/card-list';
import { useState } from 'react';
import { useFilters } from '@/hooks/use-filters';
import { useLoadPaginatedCards } from '@/hooks/use-load-paginated-cards';

export default function Page() {
  const [rentalType, setRentalType] = useState(RentalType.Apartment);
  const { selectedFilters, handleFilterChange } = useFilters();
  const { data, ...rest } = useLoadPaginatedCards(rentalType, selectedFilters);

  return (
    <>
      <div className='pt-5 mb-4'>
        <Breadcrumbs
          links={[
            { link: '/', label: 'Главная' },
            { link: '/apartaments', label: 'Купить 1-комнатную квартиру' },
          ]}
        />
        <div className='flex justify-between mb-5'>
          <MainSectionHeader
            resultsNumber={data?.totalItems || 0}
            title='Купить 1-комнатную квартиру'
          />
          <SorterSelect
            options={SortOptions}
            onChange={handleFilterChange('sortBy')}
          />
        </div>
      </div>
      <Filters
        type={rentalType}
        onFilterChange={(key, value) => handleFilterChange(key)(value)}
        setRentalType={(rentalType) => setRentalType(rentalType)}
      />
      <CardList
        {...rest}
        data={data}
        rentalType={rentalType}
      />
    </>
  );
}
