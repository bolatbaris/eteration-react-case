import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"

import { useFilterCardContext } from "@contexts"

import type { FormattedOption } from "@contexts"

export function CheckboxGroup() {
  const { options, selectedValues, onValueChange } = useFilterCardContext()

  function handleClickBox(option: FormattedOption) {
    return () => {
      if (option.isSelected) {
        onValueChange(
          selectedValues.filter(
            (selectedOption) => selectedOption !== option.value
          )
        )
        return
      }

      onValueChange([...selectedValues, option.value])
    }
  }
  return (
    <>
      {options.map((option) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={option.isSelected}
              name={option.value}
              size="small"
              onChange={handleClickBox(option)}
            />
          }
          key={option.value}
          label={option.label}
        />
      ))}
    </>
  )
}
