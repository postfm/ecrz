export enum RentalType {
  Apartment = 'apartments',
  House = 'houses',
  Garden = 'garden',
  Commercial = 'commercial',
}

export const TransformRentalType = {
  apartments: 'Квартиры',
  houses: 'Дома',
  garden: 'Участки',
  commercial: 'Коммерческая',
};

export interface ChoiceFilter {
  name: string;
  key: string;
  type: 'choices';
  choices: Choice[];
}

interface Choice {
  key: string;
  name: string;
}

export interface RangeFilter {
  name: string;
  type: 'range';
  min: RangeBoundary;
  max: RangeBoundary;
}

interface RangeBoundary {
  placeholder: string;
  key: string;
}

export function isChoiceFilter(filter: ChoiceFilter | RangeFilter): filter is ChoiceFilter {
  return filter.type === 'choices';
}

export function isRangeFilter(filter: ChoiceFilter | RangeFilter): filter is RangeFilter {
  return filter.type === 'range';
}
