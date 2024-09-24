import { act, renderHook } from "@testing-library/react-hooks"
import { beforeEach, describe, expect, it } from "vitest"

import { useCartStore } from "."

import type { Product } from "@models"

describe("useCartStore", () => {
  const mockProduct: Product = {
    id: "1",
    name: "Sample Product",
    image: "sample-image.jpg",
    price: "10.00",
    description: "Sample description",
    model: "Sample model",
    brand: "Sample brand",
    createdAt: "2024-01-01"
  }

  // Her testten önce localStorage'ı temizle
  beforeEach(() => {
    localStorage.clear()
  })

  it("should initialize with an empty cart", () => {
    const { result } = renderHook(() => useCartStore())

    expect(result.current.items).toEqual([])
  })

  it("should increment quantity of an existing product", () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.addToCart(mockProduct)
    })

    expect(result.current.items[0].quantity).toBe(2)
  })

  it("should remove a product from the cart", () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.removeFromCart(mockProduct.id)
    })

    expect(result.current.items).toHaveLength(0)
  })

  it("should update quantity of a product", () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.updateQuantity(mockProduct.id, 5)
    })

    expect(result.current.items[0].quantity).toBe(5)
  })

  it("should clear the cart", () => {
    const { result } = renderHook(() => useCartStore())

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.clearCart()
    })

    expect(result.current.items).toHaveLength(0)
  })
})
