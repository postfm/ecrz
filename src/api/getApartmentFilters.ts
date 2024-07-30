import { apartmentFitlersMock } from '@/mocks/apartment-filters';
import { ChoiceFilter, RangeFilter } from '@/types';

export async function getApartmentFilters(): Promise<
  (ChoiceFilter | RangeFilter)[]
> {
  return Promise.resolve(apartmentFitlersMock);
}
