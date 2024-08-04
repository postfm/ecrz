import Card from '../card/card';
import { useLoadPaginatedCards } from '@/hooks/use-load-paginated-cards';
import { RentalType } from '@/types';
import { Spinner } from '@material-tailwind/react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

interface CardListProps extends ReturnType<typeof useLoadPaginatedCards> {
  rentalType: RentalType;
}

export default function CardList({
  isPending,
  isError,
  error,
  data,
  page,
  setPage,
  rentalType,
}: CardListProps) {
  if (isPending) {
    return (
      <div className='flex items-end gap-8 mx-auto'>
        <Spinner
          className='h-8 w-8'
          color='blue'
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
    );
  }

  if (isError && error) {
    return <span>Error: {error.message}</span>;
  }

  if (data?.entities.length === 0) {
    return <span>Результатов с такими настройками фильтра не было найдено</span>;
  }

  return (
    <>
      <div className='grid grid-cols-4 grid-rows-3 gap-4'>
        {data?.entities.map((item) => {
          return (
            <Card
              key={item.id}
              property={item}
              rentalType={rentalType}
            />
          );
        })}
      </div>
      <ResponsivePagination
        current={page}
        total={data?.totalPages || page}
        onPageChange={setPage}
        extraClassName='pt-12 pb-12 justify-content-center'
        pageItemClassName='flex items-center justify-center w-[56px] h-[56px]'
        pageLinkClassName=''
        activeItemClassName='bg-blue-600 rounded text-white'
        previousLabel={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='size-[18px]'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        }
        nextLabel={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='size-[18px]'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        }
      />
    </>
  );
}
