// useProductList Hook (useProductList.ts)
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

import { fetchProductDetail } from "@api"
import { useProductStore } from "@stores"

export function useProductDetail(id?: string) {
  const products = useProductStore((state) => state.products)

  const placeholderData = useMemo(
    () => products?.find((product) => product.id === id),
    [products, id]
  )

  const { data, error, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetail(id),
    placeholderData
  })

  return { product: data || placeholderData, error, isLoading }
}
