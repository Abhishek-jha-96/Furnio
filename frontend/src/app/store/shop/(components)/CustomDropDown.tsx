'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { CustomDropDownProps } from '../(constants)/constants';

export function CustomDropDown({
  heading,
  options,
  onChange,
}: CustomDropDownProps & { onChange?: (value: string) => void }) {
  const [selectedOption, setSelectedOption] = useState<string>(options.option1);
  const handleChange = (value: string) => {
    setSelectedOption(value);
    onChange?.(value); // Call the parent handler if provided
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{heading}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={selectedOption}
          onValueChange={handleChange}
        >
          <DropdownMenuRadioItem value={options.option1}>
            {options.option1}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={options.option2}>
            {options.option2}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={options.option3}>
            {options.option3}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
