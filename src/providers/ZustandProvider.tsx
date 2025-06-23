'use client';

import { useStore } from '@/store/store';
import { useEffect } from 'react';

interface ZustandProviderProps {
  children: React.ReactNode;
  count?: number;
  filter?: string;
  data?: any[];
}

export function ZustandProvider({ children, ...props }: ZustandProviderProps) {
  const initializeStore = useStore((state) => state.setData);

  useEffect(() => {
    // Initialize store with server-side props
    if (props.data) {
      initializeStore(props.data);
    }
    // You can add other initializations here if needed
  }, [initializeStore, props.data]);

  return children;
}