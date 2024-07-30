import { ChoiceFilter, RangeFilter } from "@/types";

export const apartmentFitlersMock: (RangeFilter | ChoiceFilter)[] = [
  {
    name: "Количество комнат",
    key: "roomType",
    choices: [
      {
        key: "ONE_ROOM",
        name: "1-к. квартира",
      },
      {
        key: "TWO_ROOM",
        name: "2-к. квартира",
      },
    ],
    type: "choices",
  },
  {
    name: "Стоимость",
    type: "range",
    min: {
      placeholder: "От",
      key: "priceMin",
    },
    max: {
      placeholder: "До",
      key: "priceMax",
    },
  },
  {
    name: "Площадь",
    type: "range",
    min: {
      placeholder: "От",
      key: "totalAreaMin",
    },
    max: {
      placeholder: "До",
      key: "totalAreaMax",
    },
  },
];
