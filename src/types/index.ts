export enum RentalType {
  Apartment = 'apartment',
  House = 'house',
  Garden = 'garden',
  Commercial = 'commercial',
}

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
