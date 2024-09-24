import { Box, Card, FormGroup, Stack, Typography } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import { useCallback } from "react"

import { FilterCardContextProvider } from "@contexts"

import { CheckboxGroup } from "./sub_components/checkbox_group"
import { RadioGroup } from "./sub_components/radio_group"
import { SearchInput } from "./sub_components/search_input"

interface FilterCardProps {
  variant: "radio" | "checkbox"
  title: string
  options: { label: string; value: string }[]
  selectedValues: string[]
  onValueChange: (selectedValues: string[]) => void
  searchable?: boolean
  height?: string
}

export function FilterCard({
  title,
  options,
  selectedValues,
  searchable,
  onValueChange,
  variant,
  height
}: FilterCardProps) {
  const SelectGroup = useCallback(() => {
    if (variant === "radio") {
      return <RadioGroup />
    }

    return <CheckboxGroup />
  }, [variant])
  return (
    <FilterCardContextProvider
      options={options}
      searchable={!!searchable}
      selectedValues={selectedValues}
      onValueChange={onValueChange}
    >
      <Box>
        <Typography color="gray" marginBottom={0.5}>
          {title}
        </Typography>
        <Card sx={{ padding: 2, width: "100%" }}>
          <SearchInput />
          <FormControl
            component="fieldset"
            sx={{ width: "100%" }}
            variant="standard"
          >
            <FormGroup>
              <Stack
                sx={{
                  height,
                  overflow: "auto"
                }}
              >
                <SelectGroup />
              </Stack>
            </FormGroup>
          </FormControl>
        </Card>
      </Box>
    </FilterCardContextProvider>
  )
}
