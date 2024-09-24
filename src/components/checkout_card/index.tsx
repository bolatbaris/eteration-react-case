import { Button, Card, Grow, Stack, Typography } from "@mui/material"
import { useMemo } from "react"

import { useCartStore } from "@stores"

import { checkoutCardStyles, totalPriceTextStyles } from "./styles"

export function CheckoutCard() {
  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)
  const total = useMemo(
    () =>
      items.reduce(
        (accr, curr) => accr + +curr.product.price * curr.quantity,
        0
      ),
    [items]
  )

  return (
    <Grow in={!!items.length} timeout={500}>
      <Card sx={checkoutCardStyles}>
        <Stack gap={1}>
          <Stack direction="row">
            <Typography>
              Total Price:{" "}
              <Typography
                color="primary"
                component="span"
                fontWeight="bold"
                sx={totalPriceTextStyles}
              >
                {total} ₺
              </Typography>
            </Typography>
          </Stack>
          <Button variant="contained" fullWidth onClick={clearCart}>
            Checkout
          </Button>
        </Stack>
      </Card>
    </Grow>
  )
}
