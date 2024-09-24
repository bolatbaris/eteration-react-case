import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { configDefaults } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    exclude: [...configDefaults.exclude, "e2e/*"]
  },
  resolve: {
    alias: {
      "@constants": "/src/constants",
      "@pages": "/src/pages",
      "@layouts": "/src/layouts",
      "@components": "/src/components",
      "@contexts": "/src/contexts",
      "@api": "/src/api",
      "@hooks": "/src/hooks",
      "@models": "/src/models",
      "@stores": "/src/stores"
    }
  }
})
