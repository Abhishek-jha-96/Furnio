import { ProductTableProps } from './constants';

export default function Row({
  Product,
  Price,
  Quantity,
  Subtotal,
}: ProductTableProps) {
  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-8 px-16 py-4">
      {/* handle the grid rows */}
      <div className="col-span-2">
        <h3>{Product}</h3>
      </div>
      <div className="col-start-3">
        <h3>{Price}</h3>
      </div>
      <div className="col-start-4">
        <h3>{Quantity}</h3>
      </div>
      <div className="col-start-5">
        <h3>{Subtotal}</h3>
      </div>
    </div>
  );
}
