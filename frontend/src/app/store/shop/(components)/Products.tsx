import { BasePagination } from '@/components/Pagingation'
import ProductCard from '@/components/ProductCard'
import React from 'react'

export default function ProductSection() {
  return (
    <div className='flex flex-wrap p-14 gap-10'>
        <ProductCard
          imageUrl="/furniro_assets/bedroom1.png"
          productName="Product Name"
          productCategory="Product Category"
          currentPrice={100}
          originalPrice={150}
        />
        <BasePagination/>
    </div>
  )
}
