export interface TDataSlice {
  data: any[];
  filter: string;
  setData: (data: any[]) => void;
  setFilter: (filter: string) => void;
}

export const createDataSlice = (set: any): TDataSlice => ({
  data: [],
  filter: "",
  setData: (data) => set({ data }),
  setFilter: (filter) => set({ filter }),
});