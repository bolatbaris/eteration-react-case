import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import { Button, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import { errorPageStyles, iconStyles } from "./styles"

export function ErrorPage() {
  const navigate = useNavigate()

  function redirectToHome() {
    navigate("/")
  }

  return (
    <Stack id="error-page" sx={errorPageStyles}>
      <ErrorOutlineIcon color="error" sx={iconStyles} />
      <Typography component="h1" fontWeight="bold" variant="h2">
        Oops! Something went wrong...
      </Typography>
      <Typography variant="h6">
        But do not worry. We are aware of it and we are currently working on it.
      </Typography>
      <Button color="error" variant="contained" onClick={redirectToHome}>
        Go to Home
      </Button>
    </Stack>
  )
}
