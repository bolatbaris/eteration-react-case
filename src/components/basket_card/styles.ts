import type { SxProps, Theme } from "@mui/material"

export const basketLineStyles = {
  typography: {
    textOverflow: "ellipsis",
    maxWidth: "25ex",
    fontSize: 12
  }
}

const ButtonStyles: SxProps<Theme> = {
  height: "80%",
  aspectRatio: 1,
  justifyContent: "center",
  alignItems: "center",
  background: (theme) => theme.palette.grey[200],
  borderRadius: 0
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
  height: "90%",
  aspectRatio: 1,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  background: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.contrastText
}
