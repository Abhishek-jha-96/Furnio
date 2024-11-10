import { Button } from '@/components/ui/button';
import CustomCheckbox from './CustomCheckbox';

export default function PaymentCard() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <div className="flex flex-col gap-4 py-4 border-b-2 border-gray-300">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">Product</h2>
          <h2 className="font-semibold text-xl">Amount</h2>
        </div>
        <div className="flex justify-between">
          <h5 className="text-zinc-400">Product X 1</h5>
          <h5 className="font-light">10000</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="font-light">Subtotal</h5>
          <h5 className="font-light">10000</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="font-light">Total</h5>
          <h2 className="font-semibold text-2xl text-wood">10000</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CustomCheckbox title="Direct Bank Transfer" />
        <CustomCheckbox title="Cash On Delivery" />
        <h4 className="font-extralight text-zinc-700">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </h4>
        <Button>Place Order</Button>
      </div>
    </div>
  );
}
