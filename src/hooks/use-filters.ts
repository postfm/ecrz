import { useEffect, useState } from 'react';

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

  return { selectedFilters, handleFilterChange };
}

function getItemAmountPerPage() {
  const screenWidth = window.innerWidth;
  let itemPerPage = 12;
  if (screenWidth <= 1024) {
    itemPerPage = 8;
  }
  if (screenWidth <= 640) {
    itemPerPage = 4;
  }
  return String(itemPerPage);
}
