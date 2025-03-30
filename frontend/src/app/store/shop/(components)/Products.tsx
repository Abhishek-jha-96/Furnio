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

  useEffect(() => {
    const sortProductData = (sortFilter: SortFilter) => {
      switch (sortFilter) {
        case 'Default':
          break;
        case 'Increasing':
          setProductData(products.sort((a, b) => a.id - b.id));
          break;
        case 'Decreasing':
          setProductData(products.sort((a, b) => b.id - a.id));
          break;
      }
    };
    sortProductData(sortFilter);
  }, [sortFilter, products, setProductData]);

  if (!hydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap gap-14 justify-center items-start">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="w-[250px]">
              {' '}
              {/* Fixed width ensures alignment */}
              <ProductCard
                productId={product.id}
                imageUrl="/furniro_assets/bedroom1.png"
                productName={product.name}
                productCategory={product.category}
                currentPrice={product.price - product.price * 0.2}
                originalPrice={product.price}
              />
            </div>
          ))
        ) : (
          <p className="w-full text-center">No products available.</p>
        )}
      </div>
      <div className="mt-8">
        <BasePagination />
      </div>
    </div>
  );
}
