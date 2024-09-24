import { PersonOutline, WorkOutlineOutlined } from "@mui/icons-material"
import { Box, Grow, Stack, Typography } from "@mui/material"
import { useMemo } from "react"

import { useCartStore } from "@stores"

import { stackStyles } from "./styles"

export function CartArea() {
  const items = useCartStore((state) => state.items)

  const total = useMemo(
    () =>
      items.reduce(
        (accr, curr) => accr + +curr.product.price * curr.quantity,
        0
      ),
    [items]
  )

  return (
    <Box flex={{ xs: 6, lg: 2 }}>
      <Stack sx={stackStyles}>
        <Grow in={!!items.length}>
          <Stack alignItems="center" direction="row" gap={{ xs: 0, md: 1 }}>
            <WorkOutlineOutlined />
            <Typography>{total} ₺</Typography>
          </Stack>
        </Grow>
        <Stack alignItems="center" direction="row">
          <PersonOutline />
          <Typography>Kerem</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
