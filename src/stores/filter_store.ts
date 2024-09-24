import { create } from "zustand"

export enum SortOptions {
  OldToNew = "Old to New",
  NewToOld = "New to Old",
  PriceHighToLow = "Price High to Low",
  PriceLowToHigh = "Price Low to High"
}

interface FilterStore {
  sortBy: SortOptions
  setSortBy: (sortOption: SortOptions) => void
  brands: string[]
  setBrands: (brands: string[]) => void
  models: string[]
  setModels: (models: string[]) => void
  search?: string
  setSearch: (text?: string) => void
  page: number
  setPage: (page: number) => void
}

export const useFilterStore = create<FilterStore>()((set) => ({
  sortBy: SortOptions.NewToOld,
  brands: [],
  setBrands: (brands) => {
    set({ brands, page: 1 })
  },
  models: [],
  setModels: (models) => {
    set({ models, page: 1 })
  },
  search: "",
  setSearch: (text) => {
    set({ search: text, page: 1 })
  },
  setSortBy: (sortOption) => set({ sortBy: sortOption }),
  page: 1,
  setPage: (page) => set({ page })
}))
