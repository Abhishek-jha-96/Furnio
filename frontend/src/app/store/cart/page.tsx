import Row from './(components)/Row';

export default function Cart() {
  return (
    <div className="container flex justify-center items-center py-20">
      <div className="flex gap-8">
        <section className="flex flex-col justify-between">
          <div className="flex bg-[#F9F1E7] py-1 px-4">
            <Row
              Product="Product"
              Price="Price"
              Quantity="Quantity"
              Subtotal="Subtotal"
            />
          </div>
          <div>
            <Row
              Product="Product"
              Price="Price"
              Quantity="Quantity"
              Subtotal="Subtotal"
            />
          </div>
        </section>
        <section>
          <h1>Cart Totals</h1>
        </section>
      </div>
    </div>
  );
}
