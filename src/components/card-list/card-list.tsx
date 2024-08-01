import { getCards } from '@/api/getCards';
import Card from '../card/card';
import { useQuery } from '@tanstack/react-query';
import { RentalType } from '@/types';

interface CardListProps {
  type: RentalType;
}

export default function CardList({ type }: CardListProps) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['items', type],
    queryFn: async () => (await getCards(type)).data,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='grid grid-cols-4 grid-rows-3 gap-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
