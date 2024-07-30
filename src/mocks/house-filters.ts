import { ChoiceFilter, RangeFilter } from "@/types";

export const houseFitlersMock: (RangeFilter | ChoiceFilter)[] = [
  {
    name: "Тип дома",
    key: "houseType",
    choices: [
      {
        key: "RESIDENTIAL",
        name: "Жилой дом",
      },
      {
        key: "GARDEN ",
        name: "Садовый дом",
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
