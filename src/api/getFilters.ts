import { apartmentFitlersMock } from '@/mocks/apartment-filters';
import { ChoiceFilter, RangeFilter, RentalType } from '@/types';
import { getHouseFilters } from './getHouseFilters';
import { getApartmentFilters } from './getApartmentFilters';

export async function getFilters(
  rentalType: RentalType,
): Promise<(ChoiceFilter | RangeFilter)[]> {
  if (rentalType === RentalType.Apartment) {
    return getApartmentFilters();
  } else if (rentalType === RentalType.House) {
    return getHouseFilters();
  }

  return Promise.resolve([]);
}
