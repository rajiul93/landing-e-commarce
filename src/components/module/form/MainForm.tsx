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
import { FormSelectWithInputSearch } from "./FormSelectWithInputSearch";
import FormImageInput from "./FormImageInput";
import FormFileInput from "./FormImageInput";
const countryOptions = [
  { label: "Bangladesh", value: "bangladesh" },
  { label: "India", value: "india" },
  { label: "Pakistan", value: "pakistan" },
  { label: "Nepal", value: "nepal" },
  { label: "Sri Lanka", value: "sri-lanka" },
  { label: "United States", value: "united-states" },
  { label: "United Kingdom", value: "united-kingdom" },
  { label: "Canada", value: "canada" },
  { label: "Australia", value: "australia" },
  { label: "Germany", value: "germany" },
  { label: "France", value: "france" },
  { label: "Italy", value: "italy" },
  { label: "Spain", value: "spain" },
  { label: "China", value: "china" },
  { label: "Japan", value: "japan" },
  { label: "South Korea", value: "south-korea" },
  { label: "Malaysia", value: "malaysia" },
  { label: "Singapore", value: "singapore" },
  { label: "Saudi Arabia", value: "saudi-arabia" },
  { label: "United Arab Emirates", value: "uae" },
  { label: "Qatar", value: "qatar" },
  { label: "Kuwait", value: "kuwait" },
  { label: "Philippines", value: "philippines" },
  { label: "Egypt", value: "egypt" },
  { label: "Turkey", value: "turkey" },
];
const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  gender: z.string().min(1, "Please select your gender"),
  country: z.string().min(1, "Please select your country"),
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
  document: z
    .any()
    .refine((file) => file instanceof File || (file && file.length > 0), {
      message: "Profile picture is required",
    })
    .refine((file) => !file || file.size <= 1024 * 1024, {
      message: "File must be under 1MB",
    }),
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
      country: "",
      document: undefined,
    },
  });

  const onSubmit = (values: any) => {
    console.log("Raw values2:", values);

    const formData = new FormData();
    formData.append("image", values.profileImage);

    // formData.append("name", values.name);
    // formData.append("gender", values.gender);
    // formData.append("country", values.country);
    // formData.append("dob", values.dob.toISOString());
    // formData.append("paymentMethod", values.paymentMethod);

    console.log("Raw values:", values);

    // কোনো API-তে পাঠাতে চাইলে:
    // fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // });
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
        <FormSelectWithInputSearch
          name="country"
          label="country"
          placeholder="Select your country"
          control={form.control}
          options={countryOptions}
        />

        <FormFileInput
          name="document"
          label="Upload File"
          control={form.control}
          accept="image/*,application/pdf,video/*"
          description="Supports image, PDF or video file"
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
