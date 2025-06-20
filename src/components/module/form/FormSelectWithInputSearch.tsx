"use client"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Control } from "react-hook-form"
import { useState } from "react"
interface Option {
  label: string
  value: string
}
interface FormSelectWithInputSearchProps {
  name: string
  label: string
  control: Control<any>
  placeholder?: string
  options:Option[]
}

export const FormSelectWithInputSearch = ({
  name,
  label,
  control,
  options,
  placeholder = "",
}: FormSelectWithInputSearchProps) => {
  const [open, setOpen] = useState(false)

 

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedCountry = options.find(
          (country) => country.value === field.value
        )

        return (
          <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
            
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <button
                    type="button"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      "w-full h-10 rounded-[4px] border border-input  px-3 py-2 text-sm text-left flex items-center justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {selectedCountry?.label || placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </button>
                </FormControl>
              </PopoverTrigger>

              <PopoverContent className="w-full p-0" align="start" style={{ width: "var(--radix-popover-trigger-width)" }}>
                <Command>
                  <CommandInput placeholder="Search country..." />
                  <CommandList className="max-h-[300px] overflow-y-auto">
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup>
                      {options.map((country) => (
                        <CommandItem
                          key={country.value}
                          value={country.value}
                          onSelect={() => {
                            field.onChange(country.value)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              country.value === field.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {country.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}