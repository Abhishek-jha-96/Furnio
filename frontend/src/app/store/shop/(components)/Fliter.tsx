import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { LayoutGridIcon, LogsIcon, SlidersHorizontalIcon } from 'lucide-react';

export default function Fliter() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-[#F9F1E7]">
      <div className="flex">
        <section className="flex gap-8 pr-4 border-r-2 border-gray-500">
          <div className='flex gap-2'>
            <SlidersHorizontalIcon />
            <h3 className="text-xl">Filter</h3>
          </div>
          <LayoutGridIcon />
          <LogsIcon />
        </section>
        <section className="pl-4">
          <h3>Showing 1-16 of 80 results</h3>
        </section>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <h1>Show</h1>
          <Popover>
            <div className="bg-white px-1">
              <PopoverTrigger>1</PopoverTrigger>
            </div>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <div className="flex gap-2">
          <h1>Sort</h1>
          <Popover>
            <div className="bg-white px-1">
              <PopoverTrigger>Default</PopoverTrigger>
            </div>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
