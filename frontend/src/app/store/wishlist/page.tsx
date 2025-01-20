'use client';

import { ProductProps, ProductSingleResponse } from '@/api/product/contants';
import { useBatchProductQuery } from '@/api/product/queries';
import ProductCard from '@/components/ProductCard';
import useUserStore from '@/store/userStore';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Wishlist() {
  const { wishlist, name } = useUserStore();

  if (!name) {
    redirect('/auth');
  }

  const productIds = wishlist.map(({ product }) => product);

  const {
    data: productDetails,
    isLoading,
    error,
  } = useBatchProductQuery(productIds);

  if (isLoading) return <p>Loading wishlist...</p>;
  if (error) return <p>Error loading wishlist.</p>;

  // Updated to match the actual API response structure
  const products: ProductProps[] =
    productDetails?.map((response: ProductSingleResponse) => ({
      id: response.data.id,
      name: response.data.name,
      description: response.data.description,
      price: response.data.price,
      category: response.data.category,
    })) || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl="/furniro_assets/bedroom1.png"
          productName={product.name}
          productCategory={product.category}
          currentPrice={product.price - product.price * 0.2}
          originalPrice={product.price}
        />
      ))}
    </div>
  );
}
