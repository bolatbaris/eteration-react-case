import { Pagination, Stack } from "@mui/material"

import { ProductCard } from "@components"
import { useProductList } from "@hooks"

export function ProductList() {
  const { products, totalPage, page, setPage } = useProductList()

  function handleChangePagination(_: unknown, _page: number) {
    setPage(_page)
  }

  return (
    <Stack flex={8} rowGap={1}>
      <Stack direction="row" flexWrap="wrap" gap={2} pl={3}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Stack>
      <Pagination
        color="primary"
        count={totalPage}
        page={page}
        sx={{ alignSelf: "center" }}
        onChange={handleChangePagination}
      />
    </Stack>
  )
}
