import { Search } from "@mui/icons-material"
import { Box, InputAdornment, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

import { useFilterStore } from "@stores"

import { searchBoxStyles } from "./styles"

import type { ChangeEvent } from "react"

export function SearchArea() {
  const setSearch = useFilterStore((state) => state.setSearch)
  const [text, setText] = useState("")
  const [debounced] = useDebounce(text, 300)

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  useEffect(() => {
    setSearch(debounced)
  }, [debounced, setSearch])

  return (
    <Box flex={8} pl={3}>
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
        sx={searchBoxStyles}
        value={text}
        onChange={handleChangeText}
      />
    </Box>
  )
}
