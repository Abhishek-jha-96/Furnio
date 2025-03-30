'use client';
import useproductStore from '@/store/productStore';
import { SlidersHorizontalIcon } from 'lucide-react';
import { CustomDropDown } from './CustomDropDown';
import { FliterProps, SortDropDownProps } from '../(constants)/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { useProductPrefetchQuery } from '@/api/product/queries';

export default function Fliter({ onSortChange }: FliterProps) {

  const [selectedOption, setSelectedOption] = useState<number>(99999);
  const { products, setProductData } = useproductStore();

  const prefetchProducts = useProductPrefetchQuery(selectedOption);

  // useEffect(() => {
  //   prefetchProducts(); // Trigger prefetching whenever the filter changes
  // }, [selectedOption, prefetchProducts]);

  const handleSortChange = (newSort: string) => {
    onSortChange(newSort as 'Default' | 'Increasing' | 'Decreasing');
  };

  const handleChange = (value: string) => {
    setSelectedOption(Number(value));
  };

  return (
    <div className="flex justify-between items-center px-24 py-4 bg-[#F9F1E7]">
      <div className="flex">
        {/* Filter Section */}
        <section className="flex px-2 gap-6 border-r-2 border-gray-500">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SlidersHorizontalIcon className="hover:bg-black/30 hover:rounded-md hover:p-1 transition-all delay-50 ease-in-out" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
                value={String(selectedOption)}
                onValueChange={handleChange} // Corrected event handler
              >
                <DropdownMenuRadioItem value="price">
                  Price
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1000">Under 1000</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1000">Under 5000</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1000">Under 10000</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <h3 className="text-xl text-black/65">Filter</h3>
        </section>
        <section className="pl-2 flex items-center">
          <h3>Showing 1-{products.length} results</h3>
        </section>
      </div>
      <div>
        <CustomDropDown {...SortDropDownProps} onChange={handleSortChange} />
      </div>
    </div>
  );
}
