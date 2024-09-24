import type { SxProps, Theme } from "@mui/material"

const ButtonStyles: SxProps<Theme> = {
  justifyContent: "center",
  alignItems: "center",
  background: (theme) => theme.palette.grey[200],
  borderRadius: 0,
  alignSelf: "center"
}

export const iconButtonLeftStyles: SxProps<Theme> = {
  ...ButtonStyles,
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4
}

export const iconButtonRightStyles: SxProps<Theme> = {
  ...ButtonStyles,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4
}

export const countBoxStyles: SxProps<Theme> = {
  width: "5rem",
  height: "3rem",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  background: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.contrastText
}
