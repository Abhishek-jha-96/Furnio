'use client';
import { useState } from 'react';
import Fliter from './(components)/Fliter';
import ProductSection from './(components)/Products';
import { SortFilter } from './(constants)/constants';

export default function Shop() {
  const [sortFilter, setSortFilter] = useState<SortFilter>('Default');

  const handleSortChange = (newSort: SortFilter) => {
    setSortFilter(newSort);
  };

  return (
    <div>
      <Fliter onSortChange={handleSortChange} />
      <ProductSection sortFilter={sortFilter} />
    </div>
  );
}
