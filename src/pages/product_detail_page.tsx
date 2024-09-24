import {
  Box,
  Button,
  Card,
  CircularProgress,
  Stack,
  Typography
} from "@mui/material"
import { useParams } from "react-router-dom"

import { useProductDetail } from "@hooks"
import { useCartStore } from "@stores"

export function ProductDetailPage() {
  const { id } = useParams()
  const { product } = useProductDetail(id)
  const addToCart = useCartStore((state) => state.addToCart)

  function handleClickAddToCart() {
    if (product) {
      addToCart(product)
    }
  }

  if (!product) {
    return (
      <Box
        sx={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <CircularProgress />
      </Box>
    )
  }
  return (
    <Card
      sx={{
        gap: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: 2
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <img
          alt={product?.name}
          src={product?.image}
          style={{
            objectFit: "cover",
            width: "100%",
            aspectRatio: 1,
            borderRadius: "4px"
          }}
        />
      </Box>
      <Stack
        justifyContent="space-between"
        sx={{ width: { xs: "100%", md: "50%" } }}
      >
        <Stack gap={2} pt={4}>
          <Typography variant="h3">{product?.name}</Typography>
          <Typography color="primary" variant="h4">
            {product?.price} ₺
          </Typography>
        </Stack>
        <Stack gap={2}>
          <Button variant="contained" onClick={handleClickAddToCart}>
            Add to Cart
          </Button>
          <Typography alignSelf="flex-end">{product?.description}</Typography>
        </Stack>
      </Stack>
    </Card>
  )
}
