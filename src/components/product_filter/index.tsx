import { Stack } from "@mui/material"
import { useMemo } from "react"

import { FilterCard } from "@components"
import { SortOptions, useFilterStore, useProductStore } from "@stores"

export function ProductFilter() {
  const productList = useProductStore((state) => state.products)
  const selectedBrands = useFilterStore((state) => state.brands)
  const selectedModels = useFilterStore((state) => state.models)
  const sortBy = useFilterStore((state) => state.sortBy)

  const setBrands = useFilterStore((state) => state.setBrands)
  const setModels = useFilterStore((state) => state.setModels)
  const setSortBy = useFilterStore((state) => state.setSortBy)

  const sortOptions = useMemo(
    () => [
      { value: SortOptions.NewToOld, label: SortOptions.NewToOld },
      { value: SortOptions.OldToNew, label: SortOptions.OldToNew },
      { value: SortOptions.PriceHighToLow, label: SortOptions.PriceHighToLow },
      { value: SortOptions.PriceLowToHigh, label: SortOptions.PriceLowToHigh }
    ],
    []
  )

  const modelOptions = useMemo(
    () =>
      Array.from(new Set(productList.map(({ model }) => model))).map(
        (model) => ({ label: model, value: model })
      ),
    [productList]
  )

  const brandOptions = useMemo(
    () =>
      Array.from(new Set(productList.map(({ brand }) => brand))).map(
        (brand) => ({ label: brand, value: brand })
      ),
    [productList]
  )

  return (
    <Stack flex={2} gap={4}>
      <FilterCard
        options={sortOptions}
        selectedValues={[sortBy]}
        title="Sort By"
        variant="radio"
        onValueChange={(option) => setSortBy(option[0] as SortOptions)}
      />
      <FilterCard
        height="10rem"
        options={brandOptions}
        selectedValues={selectedBrands}
        title="Brands"
        variant="checkbox"
        searchable
        onValueChange={setBrands}
      />
      <FilterCard
        height="10rem"
        options={modelOptions}
        selectedValues={selectedModels}
        title="Models"
        variant="checkbox"
        searchable
        onValueChange={setModels}
      />
    </Stack>
  )
}
