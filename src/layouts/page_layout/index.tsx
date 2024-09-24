import { Box, Container, Stack } from "@mui/material"
import { Outlet } from "react-router-dom"

import { AppBar, BasketCard, CheckoutCard } from "@components"

import {
  containerStyles,
  contentStyles,
  pageLayoutStyles,
  sideBarStyles
} from "./styles"

export function PageLayout() {
  return (
    <Box sx={pageLayoutStyles}>
      <AppBar />
      <Container maxWidth="xl" sx={containerStyles}>
        <Box sx={contentStyles}>
          <Box sx={{ width: "100%" }}>
            <Outlet />
          </Box>
        </Box>
        <Stack sx={sideBarStyles}>
          <BasketCard />
          <CheckoutCard />
        </Stack>
      </Container>
    </Box>
  )
}
