export interface TThemeToggleSlice {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const createThemeSlice = (set: any): TThemeToggleSlice => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state:TThemeToggleSlice) => ({ isDarkMode: !state.isDarkMode })),
});
