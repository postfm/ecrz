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

export const TypeSelectOptions = [
  {
    value: RentalType.Apartment,
    label: TransformRentalType[RentalType.Apartment],
  },
  {
    value: RentalType.House,
    label: TransformRentalType[RentalType.House],
  },
  {
    value: RentalType.Garden,
    label: TransformRentalType[RentalType.Garden],
    disabled: true,
  },
  {
    value: RentalType.Commercial,
    label: TransformRentalType[RentalType.Commercial],
    disabled: true,
  },
];

export const SortOptions = [
  { value: 'price', label: 'Сначала дешевые' },
  { value: '-price', label: 'Сначала дорогие' },
  { value: 'totalArea', label: 'Площадь по возрастанию' },
  { value: '-totalArea', label: 'Площадь по убыванию' },
];

export interface ResponseType<T> {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  entities: T[];
}

export interface PropertyEntity {
  id: string;
  name: string;
  priceUsd: number;
  priceByn: number;
  totalArea: number;
  type: string;
  floors: number;
  floor: number;
  livingArea: number;
  kitchenArea: number;
  pricePerMeterUsd: number;
  pricePerMeterByn: number;
  roomType: string;
  location: {
    id: string;
    fullAddress: string;
    shortAddress: string;
    coordinates: string;
  };
  media: {
    id: string;
    url: string;
  }[];
}

export const PageType = {
  MainPage: 'mainPage',
  OthePage: 'otherPage',
};
