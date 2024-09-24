import { create } from "zustand"
import { persist } from "zustand/middleware"

import type { Product } from "@models"

interface ProductStore {
  products: Product[]
  setProducts: (products: Product[]) => void
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products })
    }),
    {
      name: "product-storage"
    }
  )
)
