import { useState } from 'react';

export function useFilters() {
  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: 'price',
  } as Record<string, string | string[]>);

  const handleFilterChange = (key: string) => (value: string | string[]) =>
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));

  return { selectedFilters, handleFilterChange };
}
