import { create } from "zustand";

interface FilterState {
  activeCategories: string[];
  priceRange: [number, number];
  activeColors: string[];
  activeSizes: string[];
  sortBy: string;
  setActiveCategories: (categories: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setActiveColors: (colors: string[]) => void;
  setActiveSizes: (sizes: string[]) => void;
  setSortBy: (sortBy: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  activeCategories: [],
  priceRange: [0, 1000],
  activeColors: [],
  activeSizes: [],
  sortBy: "featured",
  setActiveCategories: (categories) => set({ activeCategories: categories }),
  setPriceRange: (range) => set({ priceRange: range }),
  setActiveColors: (colors) => set({ activeColors: colors }),
  setActiveSizes: (sizes) => set({ activeSizes: sizes }),
  setSortBy: (sortBy) => set({ sortBy }),
}));
