import { client } from '@/client/client';
import { PropertyEntity, RentalType, ResponseType } from '@/types';

export function getCards(
  rentalType: RentalType,
  queryParams: Record<string, string | string[]> = {}
) {
  // @ts-ignore value type is valid for constructor
  const params = new URLSearchParams(queryParams);
  return client.get<ResponseType<PropertyEntity>>(`/${rentalType}?${params.toString()}`);
}
