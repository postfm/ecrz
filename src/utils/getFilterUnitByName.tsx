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

export const inclineWord = (num: number) => {
  const n = num % 10;
  switch (n) {
    case 1:
      return 'результат';
    case 2:
    case 3:
    case 4:
      return 'результата';

    default:
      return 'результатов';
  }
};
