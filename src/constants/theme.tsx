import { createTheme, responsiveFontSizes } from "@mui/material/styles"

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      button: {
        textTransform: "none"
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained"
        }
      },
      MuiTextField: {
        defaultProps: {
          size: "small"
        },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
              "& fieldset": {
                borderColor: "transparent"
              },
              "&:hover fieldset": {
                borderColor: "transparent"
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent"
              }
            }
          }
        }
      }
    },
    palette: {
      primary: {
        main: "#2A59FE"
      }
    }
  })
)
