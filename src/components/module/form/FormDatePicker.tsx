import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";

interface FormDatePickerProps {
  name: string;
  label: string;
  control: Control<any>;
}

export const FormDatePicker = ({
  name,
  label,
  control,
}: FormDatePickerProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={
                    "w-full pl-3 text-left font-normal rounded-[4px] bg-transparent"
                  }
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>D.O.B</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => field.onChange(date ?? undefined)}
                initialFocus
                captionLayout="dropdown" // ✅ Year + Month dropdown
                fromYear={1950} // ✅ Start from 1950
                toYear={new Date().getFullYear()} // ✅ Till current year
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
