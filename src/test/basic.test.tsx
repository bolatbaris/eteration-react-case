// src/App.test.tsx
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import App from "../App"

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />)

    expect(true).toBe(true)
  })
})
