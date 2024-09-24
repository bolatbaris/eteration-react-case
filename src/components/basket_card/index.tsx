import { Add, Remove } from "@mui/icons-material"
import { Box, Card, Grow, IconButton, Stack, Typography } from "@mui/material"

import { useCartStore } from "@stores"

import {
  countBoxStyles,
  iconButtonLeftStyles,
  iconButtonRightStyles
} from "./styles"

import type { Product } from "@models"

function BasketLine({
  product,
  quantity
}: {
  product: Product
  quantity: number
}) {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  function handleDecreaseLine() {
    const newQuantity = quantity - 1
    if (newQuantity <= 0) {
      removeFromCart(product.id)
      return
    }
    updateQuantity(product.id, newQuantity)
  }

  function handleIncreaseLine() {
    updateQuantity(product.id, quantity + 1)
  }

  return (
    <Stack direction="row" gap={1} justifyContent="space-between">
      <Stack maxWidth="50%" width="50%">
        <Typography sx={{ textOverflow: "ellipsis", fontSize: 14 }}>
          {product.name}
        </Typography>
        <Typography color="primary" fontSize={12} fontWeight={500}>
          {product.price} ₺
        </Typography>
      </Stack>
      <Box
        alignItems="center"
        display="flex"
        sx={{ justifyContent: "flex-end", width: "50%" }}
      >
        <IconButton
          disabled={quantity <= 0}
          sx={iconButtonLeftStyles}
          onClick={handleDecreaseLine}
        >
          <Remove fontSize="small" />
        </IconButton>
        <Box sx={countBoxStyles}>{quantity}</Box>
        <IconButton sx={iconButtonRightStyles} onClick={handleIncreaseLine}>
          <Add fontSize="small" />
        </IconButton>
      </Box>
    </Stack>
  )
}

export function BasketCard() {
  const items = useCartStore((state) => state.items)

  return (
    <Grow in={!!items.length}>
      <Card sx={{ padding: 2, width: "100%" }}>
        <Stack rowGap={1}>
          {items.map((item) => (
            <BasketLine
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </Stack>
      </Card>
    </Grow>
  )
}
