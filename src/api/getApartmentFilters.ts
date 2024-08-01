import { client } from '@/client/client';
import { apartmentFitlersMock } from '@/mocks/apartment-filters';
import { ChoiceFilter, RangeFilter } from '@/types';

export function getApartmentFilters() {
  return client.get<(ChoiceFilter | RangeFilter)[]>('/apartments/filters');
}
