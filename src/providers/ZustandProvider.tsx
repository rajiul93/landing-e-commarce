"use client";

import { useStore } from "@/store/store";
import { useEffect } from "react";

interface ZustandProviderProps {
  children: React.ReactNode;
  count?: number;
  filter?: string;
  productData?: any[];
  userData?: any[];
}

export function ZustandProvider({ children, ...props }: ZustandProviderProps) {
  const { setProductData, setUserData } = useStore((state) => state);

  useEffect(() => {
    // Initialize store with server-side props
    if (props.productData) {
      setProductData(props.productData);
    }
    if (props.userData) {
      setUserData(props.userData);
    }
  }, []);

  return children;
}
