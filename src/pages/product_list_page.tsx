import { Box } from "@mui/material"

import { ProductFilter, ProductList } from "@components"

export function ProductListPage() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column-reverse", md: "row" }}
      sx={{ gap: 2 }}
    >
      <ProductFilter />
      <ProductList />
    </Box>
  )
}
