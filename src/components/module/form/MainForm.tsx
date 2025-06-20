"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";
import { FormDatePicker } from "./FormDatePicker";
import { FormSelect } from "./FormSelect";
import { FormCheckbox } from "./FormCheckbox";
import { FormRadioGroup } from "./FormRadioGroupProps";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  gender: z.string().min(1, "Please select your gender"),
  dob: z.preprocess(
    (val) => {
      if (val instanceof Date) return val;
      if (typeof val === "string" || typeof val === "number") {
        const date = new Date(val);
        return isNaN(date.getTime()) ? undefined : date;
      }
      return undefined;
    },
    z.date({
      required_error: "Date of birth is required",
      invalid_type_error: "Please enter a valid date of birth",
    })
  ),
  agree: z.boolean().refine((v) => v, {
    message: "You must agree to the terms and conditions",
  }),
  paymentMethod: z.string().min(1, "Please select a payment method"),
});

export default function MainForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: "",
      dob: undefined,
      agree: false,
      paymentMethod: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-4 max-w-md mx-auto border rounded-sm shadow-md"
      >
        <FormInput
          name="name"
          label="Name"
          placeholder="Enter your name"
          control={form.control}
        />

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <FormSelect
            control={form.control}
            label="Gender"
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />

          <FormRadioGroup
            name="paymentMethod"
            label="Payment Method"
            control={form.control}
            options={[
              { label: "Cash", value: "cash" },
              { label: "Bkash", value: "bkash" },
              { label: "Nagad", value: "nagad" },
            ]}
          />
        </div>

        <FormDatePicker
          name="dob"
          label="Date of Birth"
          control={form.control}
        />

        <FormCheckbox
          name="agree"
          label="I agree to the terms and conditions"
          control={form.control}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
