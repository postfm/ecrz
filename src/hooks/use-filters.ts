import { useEffect, useState } from 'react';
import { isEmpty, isUndefined, omitBy } from 'lodash';

export function useFilters() {
  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: 'price',
    limit: '12',
  } as Record<string, string | string[]>);

  useEffect(() => {
    function callback() {
      handleFilterChange('limit')(getItemAmountPerPage());
    }

    window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);

  const handleFilterChange = (key: string) => (value: string | string[]) =>
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));

  return {
    selectedFilters: omitBy(selectedFilters, (v) => isUndefined(v) || isEmpty(v)),
    handleFilterChange,
  };
}

function getItemAmountPerPage() {
  const screenWidth = screen.width;
  let itemPerPage = 12;
  if (screenWidth <= 1024) {
    itemPerPage = 4;
  }
  if (screenWidth <= 767) {
    itemPerPage = 4;
  }
  console.log(screenWidth);
  return String(itemPerPage);
}
