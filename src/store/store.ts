import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CounterSlice, createCounterSlice } from "./slice/createCounterSlice";
import { createProductDataSlice, TDataSlice } from "./slice/createDataSlice";
import { createThemeSlice, TThemeToggleSlice } from "./slice/createThemeSlice";
import { createUsersDataSlice, TUsersDataSlice } from "./slice/createUsersDataSlice";



export const useStore = create<CounterSlice & TDataSlice & TThemeToggleSlice & TUsersDataSlice>()(
  devtools((set) => ({
    ...createCounterSlice(set),
    ...createProductDataSlice(set),
    ...createThemeSlice(set),
    ...createUsersDataSlice(set),
  }))
);
