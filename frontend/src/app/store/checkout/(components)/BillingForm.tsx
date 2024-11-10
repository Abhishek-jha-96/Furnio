import React from 'react';
import CustomInput from './CustomInput';

export default function BillingForm() {
  return (
    <div className="flex flex-col gap-6 px-4 py-8">
      <h1 className="font-semibold text-2xl">Billing Details</h1>
      <div className="flex gap-4">
        <CustomInput title="First Name" />
        <CustomInput title="Last Name" />
      </div>
      <div>
        <CustomInput title="Company Name (Optional)" />
      </div>
      <div>
        <CustomInput title="Address" />
      </div>
      <div>
        <CustomInput title="Town/City" />
      </div>
      <div>
        <CustomInput title="ZIP Code" />
      </div>
      <div>
        <CustomInput title="Phone number" />
      </div>
      <div>
        <CustomInput title="Email Address" />
      </div>
    </div>
  );
}
