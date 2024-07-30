import { ReactNode } from 'react';

export const getFilterUnitByName = (name: string) => {
  let unit: ReactNode = '';

  if (name === 'Стоимость') {
    unit = '$';
  } else if (name === 'Площадь') {
    unit = (
      <>
        м<sup>2</sup>
      </>
    );
  }

  return unit;
};
