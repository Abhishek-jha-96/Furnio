'use client';

import { BasePagination } from '@/components/Pagingation';
import ProductCard from '@/components/ProductCard';
import { useHydration } from '@/lib/hooks/hydrations';
import useproductStore from '@/store/productStore';
import { SortFilter } from '../(constants)/constants';
import { useEffect } from 'react';

export default function ProductSection({
  sortFilter,
}: {
  sortFilter: SortFilter;
}) {
  const hydrated = useHydration();
  const { setProductData, products } = useproductStore();

  const sortProductData = (sortFilter: SortFilter) => {
    switch (sortFilter) {
      case 'Default':
        console.log('Default');
        break;
      case 'Increasing':
        console.log('Increasing');
        break;
      case 'Decreasing':
        console.log('Decreasing');
        break;
    }
  };
  
  useEffect(() => {
    sortProductData(sortFilter);
  }, [sortFilter, products]);

  if (!hydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl="/furniro_assets/bedroom1.png"
              productName={product.name}
              productCategory={product.category}
              currentPrice={product.price - product.price * 0.2}
              originalPrice={product.price}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div className="mt-8">
        <BasePagination />
      </div>
    </div>
  );
}
