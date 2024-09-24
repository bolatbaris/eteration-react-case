import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import MUIRadioGroup from "@mui/material/RadioGroup"
import { useMemo } from "react"

import { useFilterCardContext } from "@contexts"

import type { ChangeEvent } from "react"

export function RadioGroup() {
  const { options, selectedValues, onValueChange } = useFilterCardContext()

  const value = useMemo(() => selectedValues?.[0], [selectedValues])

  function handleClickRadio(event: ChangeEvent<HTMLInputElement>) {
    onValueChange([event.target.value])
  }

  return (
    <MUIRadioGroup value={value} onChange={handleClickRadio}>
      {options.map((option) => (
        <FormControlLabel
          control={<Radio size="small" />}
          key={option.value}
          label={option.label}
          sx={{ fontSize: 14 }}
          value={option.value}
        />
      ))}
    </MUIRadioGroup>
  )
}
