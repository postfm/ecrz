import Card from '../card/card';
import { useLoadPaginatedCards } from '@/hooks/use-load-paginated-cards';

interface CardListProps extends ReturnType<typeof useLoadPaginatedCards> {}

export default function CardList({
  isPending,
  isError,
  error,
  data,
}: CardListProps) {
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError && error) {
    return <span>Error: {error.message}</span>;
  }

  if (data?.entities.length === 0) {
    return (
      <span>Результатов с такими настройками фильтра не было найдено</span>
    );
  }

  return (
    <div className='grid grid-cols-4 grid-rows-3 gap-4'>
      {data?.entities.map((item) => {
        return <Card key={item.id} property={item} />;
      })}
    </div>
  );
}
