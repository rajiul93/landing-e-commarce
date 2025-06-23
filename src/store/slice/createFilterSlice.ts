export interface FilterSlice {
  filter: string;
  setFilter: (filter: string) => void;
}

export const createFilterSlice = (set: any): FilterSlice => ({
  filter: "",
  setFilter: (filter) => set({ filter }),
});