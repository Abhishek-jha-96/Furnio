'use client';
import useproductStore from '@/store/productStore';
import { LayoutGridIcon, LogsIcon, SlidersHorizontalIcon } from 'lucide-react';
import { CustomDropDown } from './CustomDropDown';
import {
  FliterProps,
  ShowDropDownProps,
  SortDropDownProps,
} from '../(constants)/constants';

export default function Fliter({ onSortChange }: FliterProps) {
  const { products } = useproductStore();

  const handleSortChange = (newSort: string) => {
    onSortChange(newSort as 'Default' | 'Increasing' | 'Decreasing');
  };

  return (
    <div className="flex justify-between items-center px-24 py-4 bg-[#F9F1E7]">
      <div className="flex">
        <section className="flex px-2 gap-6 border-r-2 border-gray-500">
          <div className="flex gap-2">
            <SlidersHorizontalIcon className='hover:bg-black/30 hover:rounded-md hover:p-1'/>
            <h3 className="text-xl">Filter</h3>
          </div>
          <LayoutGridIcon />
          <LogsIcon />
        </section>
        <section className="pl-4">
          <h3>Showing 1-{products.length} results</h3>
        </section>
      </div>
      <div className="flex gap-4">
        <CustomDropDown {...ShowDropDownProps} />
        <CustomDropDown {...SortDropDownProps} onChange={handleSortChange} />
      </div>
    </div>
  );
}
