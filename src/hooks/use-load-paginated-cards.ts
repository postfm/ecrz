import { getCards } from '@/api/getCards';
import { RentalType } from '@/types';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useState } from 'react';

export function useLoadPaginatedCards(
  rentalType: RentalType,
  queryParams: Record<string, string | string[]> = {},
) {
  const [page, setPage] = useState(0);

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['projects', page, JSON.stringify(queryParams)],
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
