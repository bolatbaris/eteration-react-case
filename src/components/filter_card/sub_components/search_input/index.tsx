import { Search } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"

import { useFilterCardContext } from "@contexts"

import { searchInputStyles } from "./styles"

import type { ChangeEvent } from "react"

export function SearchInput() {
  const { searchable, searchText, setSearchText } = useFilterCardContext()

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }

  if (!searchable) {
    return null
  }

  return (
    <TextField
      placeholder="Search"
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }
      }}
      sx={searchInputStyles}
      value={searchText}
      variant="filled"
      hiddenLabel
      onChange={handleChangeText}
    />
  )
}
