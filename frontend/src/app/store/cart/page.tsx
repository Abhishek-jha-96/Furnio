import { Button } from '@/components/ui/button';
import Row from './(components)/Row';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="flex gap-8">
        <section className="flex flex-col ">
          <div className="flex bg-[#F9F1E7] py-1 px-4">
            <Row
              Product="Product"
              Price="Price"
              Quantity="Quantity"
              Subtotal="Subtotal"
            />
          </div>
          <div className="flex px-4 py-1">
            <Row
              Product="Product"
              Price="Price"
              Quantity="Quantity"
              Subtotal="Subtotal"
            />
          </div>
        </section>
        <section className="flex flex-col gap-4 items-center bg-[#F9F1E7] px-16 py-10">
          <h1 className="font-semibold text-2xl">Cart Totals</h1>
          <div className="flex flex-col gap-4 w-44">
            <section className="flex justify-between">
              <h4>Subtotal</h4>
              <h4>10000</h4>
            </section>
            <section className="flex justify-between">
              <h2>Total</h2>
              <h2 className="text-wood">10000</h2>
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
