import BillingForm from './(components)/BillingForm';
import PaymentCard from './(components)/PaymentCard';

export default function Checkout() {
  return (
    <div className="flex w-full gap-10 px-20">
      <div className="w-1/2">
        <BillingForm />
      </div>
      <div className='w-1/3'>
        <PaymentCard />
      </div>
    </div>
  );
}
