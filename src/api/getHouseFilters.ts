import { houseFitlersMock } from "@/mocks/house-filters";
import { ChoiceFilter, RangeFilter } from "@/types";

export async function getHouseFilters(): Promise<
  (ChoiceFilter | RangeFilter)[]
> {
  return Promise.resolve(houseFitlersMock);
}
