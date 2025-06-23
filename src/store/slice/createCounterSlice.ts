export interface CounterSlice {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const createCounterSlice = (set: any): CounterSlice => ({
  count: 0,
  increment: () => set((state: CounterSlice) => ({ count: state.count + 1 })),
  decrement: () => set((state: CounterSlice) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
});