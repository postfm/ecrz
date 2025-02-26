import { getCards } from '@/api/getCards';
import { RentalType } from '@/types';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { omit } from 'lodash';
import { useEffect, useState } from 'react';

export function useLoadPaginatedCards(
  rentalType: RentalType,
  queryParams: Record<string, string | string[]> = {},
) {
  const [page, setPage] = useState(0);

  const stringifiedParams = JSON.stringify(omit(queryParams, 'page'));

  useEffect(() => {
    setPage(0);
  }, [stringifiedParams]);

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['projects', page, JSON.stringify(queryParams), rentalType],
      queryFn: () =>
        getCards(rentalType, { ...queryParams, page: String(page) }),
      placeholderData: keepPreviousData,
    });

  return {
    isPending,
    isError,
    data: data?.data,
    error,
    isFetching,
    isPlaceholderData,
    page,
    setPage,
  };
}
