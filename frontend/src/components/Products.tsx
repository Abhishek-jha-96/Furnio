'use client';
import { useProductInfiniteQuery } from '@/api/product/queries';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import useproductStore from '@/store/productStore';

export default function Products() {
  const {
    data: productData,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProductInfiniteQuery();

  const { setProductData, products } = useproductStore();

  useEffect(() => {
    if (!isError && !isLoading && productData) {
      // Combine all pages' results
      const allProducts = productData.pages.flatMap(
        (page) => page.data.results,
      );
      setProductData(allProducts);
    }
  }, [productData, setProductData, isError, isLoading]);

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error loading products.</p>;

  const handleShowMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <div className="w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={product.id} // Use product.id instead of index
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
      </div>

      {hasNextPage && (
        <button
          className="font-medium text-wood border-2 border-wood py-2 px-16"
          onClick={handleShowMore}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Show more'}
        </button>
      )}
    </div>
  );
}
