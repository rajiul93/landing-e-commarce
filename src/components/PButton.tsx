import { cva, VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "py-1 shadow-md px-4 rounded-full text-white font-bold",
  {
    variants: {
      variant: {
        defult: "bg-gray-600",
        gradiant: " bg-gradient-to-r from-secondary to-primary",
      },
      size: {
        defult: "h-12",
        medium: "h-16",
        large: "24",
      },
    },
    defaultVariants: {
      variant: "defult",
      size: "defult",
    },
  }
);

export const PButton = ({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, size, className }))}
    />
  );
};
