import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function Fliter() {
  return (
    <div className="flex justify-around">
      <div></div>
      <div className="flex gap-4">
        <div>
          <h1>Show</h1>
        </div>
        <div>
          <h1>Sort</h1>
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
