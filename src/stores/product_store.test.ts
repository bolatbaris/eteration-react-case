// src/store/useProductStore.test.ts
import { act, renderHook } from "@testing-library/react-hooks"
import { beforeEach, describe, expect, it } from "vitest"

import { useProductStore } from "."

import type { Product } from "@models"

describe("useProductStore", () => {
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Product 1",
      image: "image1.jpg",
      price: "10.00",
      description: "Description for Product 1",
      model: "Model 1",
      brand: "Brand A",
      createdAt: "2024-01-01"
    },
    {
      id: "2",
      name: "Product 2",
      image: "image2.jpg",
      price: "20.00",
      description: "Description for Product 2",
      model: "Model 2",
      brand: "Brand B",
      createdAt: "2024-01-02"
    }
  ]

  beforeEach(() => {
    localStorage.clear()
  })

  it("should initialize with an empty products array", () => {
    const { result } = renderHook(() => useProductStore())

    expect(result.current.products).toEqual([])
  })

  it("should set products", () => {
    const { result } = renderHook(() => useProductStore())

    act(() => {
      result.current.setProducts(mockProducts)
    })

    expect(result.current.products).toEqual(mockProducts)
  })
})
