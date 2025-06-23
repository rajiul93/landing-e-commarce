
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CounterSlice, createCounterSlice } from "./slice/createCounterSlice";
import { createDataSlice, TDataSlice } from "./slice/createDataSlice";
import { createThemeSlice, TThemeToggleSlice } from "./slice/createThemeSlice";

export const useStore = create<
  CounterSlice & TDataSlice & TThemeToggleSlice
>()(
  devtools((set) => ({
    ...createCounterSlice(set), 
    ...createDataSlice(set),
    ...createThemeSlice(set),
  }))
);
