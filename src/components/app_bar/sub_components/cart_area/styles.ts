import type { SxProps, Theme } from "@mui/material"

export const stackStyles: SxProps<Theme> = {
  alignItems: "center",
  columnGap: { xs: 0.5, sm: 1, md: 2 },
  flexDirection: "row",
  height: "100%",
  justifyContent: {
    xs: "space-between",
    sm: "flex-end"
  }
}
