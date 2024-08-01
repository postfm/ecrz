import { client } from '@/client/client';
import { RentalType } from '@/types';

export function getCards(rentalType: RentalType) {
  return client.get<[]>(`/${rentalType}`);
}
