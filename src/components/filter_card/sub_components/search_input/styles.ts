import type { SxProps, Theme } from "@mui/material"

export const searchInputStyles: SxProps<Theme> = {
  "& .MuiInputBase-root": {
    borderRadius: 1
  },
  "& .MuiInputBase-root.MuiFilledInput-root:before": {
    borderBottomColor: "transparent"
  },
  "& .MuiInputBase-root.MuiFilledInput-root:after": {
    borderBottomColor: "transparent"
  }
}
