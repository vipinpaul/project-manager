import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '../../utils/cn';
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface ICustomComboboxProps {
  options: { value: string; label: string; orgObj: object }[];
  setSelectedValue: (value: string) => void;
  selectedValue: string;
  placeholder?: string;
}

export function CustomCombobox({
  options,
  setSelectedValue,
  selectedValue,
  placeholder = 'search',
}: ICustomComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-xs"
        >
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="max-h-32 overflow-y-scroll">
          <CommandInput placeholder="type to Search..." className="" />
          <CommandList>
            <CommandEmpty>No match found.</CommandEmpty>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue: string) => {
                  setSelectedValue(
                    currentValue === selectedValue ? '' : currentValue,
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedValue === option.value
                      ? 'opacity-100'
                      : 'opacity-0',
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
