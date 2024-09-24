import axios from "axios"

import { API_BASE } from "@constants"

import type { Product } from "@models"

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get(`${API_BASE}/products`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Network error")
    } else {
      throw new Error("An unexpected error occurred")
    }
  }
}
