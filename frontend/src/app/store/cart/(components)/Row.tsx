import { ProductTableProps } from './constants';

export default function Row({
  Product,
  Price,
  Quantity,
}: ProductTableProps) {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-1 gap-16 px-2 py-4">
      {/* handle the grid rows */}
      <div className="">
        <h3>{Product}</h3>
      </div>
      <div className="col-start-2">
        <h3>{Price}</h3>
      </div>
      <div className="col-start-3">
        <h3>{Quantity}</h3>
      </div>
    </div>
  );
}
