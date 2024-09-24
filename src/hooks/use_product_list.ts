// useProductList Hook (useProductList.ts)
import { useQuery } from "@tanstack/react-query"
import { useEffect, useMemo } from "react"

import { fetchProducts } from "@api"
import { SortOptions, useFilterStore, useProductStore } from "@stores"

import type { Product } from "@models"

interface FilterAndSortProps {
  products: Product[]
  brands: string[]
  models: string[]
  search?: string
  sortBy: SortOptions
}

function filterAndSortProducts({
  products,
  brands,
  models,
  search,
  sortBy
}: FilterAndSortProps): Product[] {
  return products
    .filter((product) => {
      const matchesBrand = brands.length === 0 || brands.includes(product.brand)
      const matchesModel = models.length === 0 || models.includes(product.model)
      const matchesSearch =
        !search || product.name.toLowerCase().includes(search.toLowerCase())
      return matchesBrand && matchesModel && matchesSearch
    })
    .sort((a, b) => {
      const sortFunctions: Record<SortOptions, () => number> = {
        [SortOptions.OldToNew]: () =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        [SortOptions.NewToOld]: () =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        [SortOptions.PriceLowToHigh]: () =>
          parseFloat(a.price) - parseFloat(b.price),
        [SortOptions.PriceHighToLow]: () =>
          parseFloat(b.price) - parseFloat(a.price)
      }

      return sortFunctions[sortBy] ? sortFunctions[sortBy]() : 0
    })
}

export function useProductList() {
  const setProducts = useProductStore((state) => state.setProducts)
  const products = useProductStore((state) => state.products)
  const brands = useFilterStore((state) => state.brands)
  const models = useFilterStore((state) => state.models)
  const search = useFilterStore((state) => state.search)
  const sortBy = useFilterStore((state) => state.sortBy)
  const page = useFilterStore((state) => state.page)
  const setPage = useFilterStore((state) => state.setPage)

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    placeholderData: products
  })

  useEffect(() => {
    if (data) {
      setProducts(data)
    }
  }, [data, setProducts])

  const startIndex = useMemo(() => (page - 1) * 12, [page])

  const { sliced, totalPage } = useMemo(() => {
    const filtered = filterAndSortProducts({
      products,
      brands,
      models,
      search,
      sortBy
    })

    const _sliced = filtered.slice(startIndex, startIndex + 12)
    const _totalPage = Math.ceil(filtered.length / 12)
    return { sliced: _sliced, totalPage: _totalPage }
  }, [products, brands, models, search, sortBy, startIndex])

  return { products: sliced, error, isLoading, page, setPage, totalPage }
}
