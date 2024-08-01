import { client } from '@/client/client';
import { RentalType } from '@/types';

export function getCards(
  rentalType: RentalType,
  queryParams: Record<string, string | string[]> = {},
) {
  // todo:
  const params = new URLSearchParams(queryParams);
  console.log(params.toString());
  return client.get<[]>(`/${rentalType}`);
}
