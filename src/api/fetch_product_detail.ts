import { fetchProducts } from "./fetch_product_list"

import type { Product } from "@models"

export async function fetchProductDetail(
  id?: string
): Promise<Product | undefined> {
  if (!id) {
    return undefined
  }
  return (await fetchProducts()).find((product) => product.id === id)
}
