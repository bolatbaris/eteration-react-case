import { Box, Container, Typography } from "@mui/material"
import MUIAppbar from "@mui/material/AppBar"
import { useNavigate } from "react-router-dom"

import { containerStyles } from "./styles"
import { CartArea } from "./sub_components/cart_area"
import { SearchArea } from "./sub_components/search_area"

export function AppBar() {
  const navigate = useNavigate()
  function handleClickLogo() {
    navigate("/")
  }
  return (
    <MUIAppbar component="nav" position="static">
      <Container maxWidth="xl" sx={containerStyles}>
        <Box flex={2} sx={{ cursor: "pointer" }}>
          <Typography fontWeight="bold" variant="h4" onClick={handleClickLogo}>
            Eteration
          </Typography>
        </Box>
        <SearchArea />
        <CartArea />
      </Container>
    </MUIAppbar>
  )
}
