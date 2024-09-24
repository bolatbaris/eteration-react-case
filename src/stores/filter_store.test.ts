// src/store/useFilterStore.test.ts
import { act, renderHook } from "@testing-library/react-hooks"
import { describe, expect, it } from "vitest"

import { SortOptions, useFilterStore } from "."

describe("useFilterStore", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFilterStore())

    expect(result.current.sortBy).toBe(SortOptions.NewToOld)
    expect(result.current.brands).toEqual([])
    expect(result.current.models).toEqual([])
    expect(result.current.search).toBe("")
    expect(result.current.page).toBe(1)
  })

  it("should set sortBy option", () => {
    const { result } = renderHook(() => useFilterStore())

    act(() => {
      result.current.setSortBy(SortOptions.OldToNew)
    })

    expect(result.current.sortBy).toBe(SortOptions.OldToNew)
  })

  it("should set brands and reset page to 1", () => {
    const { result } = renderHook(() => useFilterStore())

    act(() => {
      result.current.setBrands(["Brand1", "Brand2"])
    })

    expect(result.current.brands).toEqual(["Brand1", "Brand2"])
    expect(result.current.page).toBe(1) // Page should reset to 1
  })

  it("should set models and reset page to 1", () => {
    const { result } = renderHook(() => useFilterStore())

    act(() => {
      result.current.setModels(["Model1", "Model2"])
    })

    expect(result.current.models).toEqual(["Model1", "Model2"])
    expect(result.current.page).toBe(1) // Page should reset to 1
  })

  it("should set search text and reset page to 1", () => {
    const { result } = renderHook(() => useFilterStore())

    act(() => {
      result.current.setSearch("search text")
    })

    expect(result.current.search).toBe("search text")
    expect(result.current.page).toBe(1) // Page should reset to 1
  })

  it("should set page number", () => {
    const { result } = renderHook(() => useFilterStore())

    act(() => {
      result.current.setPage(2)
    })

    expect(result.current.page).toBe(2)
  })
})
