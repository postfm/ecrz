import { ChoiceFilter, RangeFilter, RentalType } from '@/types';
import { client } from '@/client/client';

export function getFilters(rentalType: RentalType) {
  return client.get<(ChoiceFilter | RangeFilter)[]>(`/${rentalType}/filters`);
}
