export interface TDataSlice {
  data: any[];
  setProductData: (data: any[]) => void;

  filter: string;
  setFilter: (filter: string) => void;
}

export const createProductDataSlice = (set: any): TDataSlice => ({
  data: [],
  setProductData: (data) => set({ data }),

  filter: "",
  setFilter: (filter) => set({ filter }),
});