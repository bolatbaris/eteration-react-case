import type { SxProps, Theme } from "@mui/material"

export const pageLayoutStyles: SxProps<Theme> = {
  width: "100vw",
  height: "100vh",
  minWidth: "375px",
  overflowX: "hidden"
}

export const containerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row"
  },
  gap: 0.5,
  flex: 12,
  pt: {
    xs: 1,
    md: 2,
    lg: 4
  }
}

export const contentStyles: SxProps<Theme> = {
  display: "flex",
  flex: 10
}

export const sideBarStyles: SxProps<Theme> = {
  flex: 2,
  display: "flex",
  gap: 4
}
