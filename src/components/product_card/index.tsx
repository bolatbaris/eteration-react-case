import { Box, Button, Card, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import { useCartStore } from "@stores"

import type { Product } from "@models"

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart)
  const navigate = useNavigate()
  function handleClickAddToCart() {
    addToCart(product)
  }

  function handleClickCard() {
    navigate(`/${product.id}`)
  }

  return (
    <Card sx={{ alignSelf: "flex-start" }}>
      <Stack sx={{ width: "11rem", p: 1, gap: 1 }}>
        <Box
          component="span"
          sx={{ cursor: "pointer" }}
          onClick={handleClickCard}
        >
          <img
            alt={product.name}
            src={product.image}
            style={{
              width: "10rem",
              height: "9rem",
              objectFit: "cover",
              borderRadius: "4px"
            }}
          />
          <Typography color="primary">{product.price} ₺</Typography>
          <Typography>{product.name}</Typography>
        </Box>
        <Button variant="contained" onClick={handleClickAddToCart}>
          Add to Cart
        </Button>
      </Stack>
    </Card>
  )
}
