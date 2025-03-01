'use client';
import { Button } from '@/components/ui/button';
import Row from './(components)/Row';
import Link from 'next/link';
import { useCartQuery } from '@/api/cart/queries';
import { useEffect, useState } from 'react';
import { ICartData } from '@/api/cart/contants';
import { getSubTotal, getTotal } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

export default function Cart() {
  const { data: CartData, isError, isLoading } = useCartQuery();
  const [cartData, setCartData] = useState<ICartData[]>([]);
  useEffect(() => {
    if (!isError && !isLoading) {
      setCartData(CartData?.data ?? []);
    }
  }, [isError, isLoading, setCartData, CartData]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError || !cartData.length) {
    return (
      <div className="w-full flex flex-col justify-center items-center py-20">
        <ShoppingCart className="w-20 h-20 text-gray-500" />
        <p className="text-lg text-gray-600 mt-4">Your Cart is empty</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="flex gap-8">
        <section className="flex flex-col ">
          <div className="flex bg-[#F9F1E7] py-1 px-4">
            <Row Product="Product" Price="Price" Quantity="Quantity" />
          </div>
          <div className="flex px-4 py-1">
            {cartData?.map((data, index) => (
              <div key={index}>
                <Row
                  Product={data.product_details.name}
                  Price={String(data.product_details.price)}
                  Quantity={1}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4 items-center bg-[#F9F1E7] px-16 py-10">
          <h1 className="font-semibold text-2xl">Cart Totals</h1>
          <div className="flex flex-col gap-4 w-44">
            <section className="flex justify-between">
              <h4>Subtotal</h4>
              <h4>{getSubTotal(cartData)}</h4>
            </section>
            <section className="flex justify-between">
              <h2>Total</h2>
              <h2 className="text-wood">{getTotal(cartData)}</h2>
            </section>
          </div>
          <Link href="/store/checkout">
            <Button variant={'outline'}>Check Out</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
