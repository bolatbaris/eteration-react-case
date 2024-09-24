import { createContext, useContext, useMemo, useState } from "react"
import { useDebounce } from "use-debounce"

import type {
  FilterCardContextProps,
  FilterCardContextProviderProps,
  FormattedOption
} from "./filter_card_interfaces"

const defaultValue: FilterCardContextProps = {
  selectedValues: [],
  options: [],
  searchable: false,
  searchText: "",
  setSearchText: () => undefined,
  onValueChange: () => undefined
}

const FilterCartContext = createContext<FilterCardContextProps>(defaultValue)

export function FilterCardContextProvider({
  children,
  selectedValues,
  options,
  searchable,
  onValueChange
}: FilterCardContextProviderProps) {
  const [searchText, setSearchText] = useState("")
  const [debouncedText] = useDebounce(searchText, 300)

  const formattedOptions: FormattedOption[] = useMemo(
    () =>
      options
        .filter((option) => {
          if (!debouncedText.length) {
            return true
          }
          return option.label.includes(debouncedText)
        })
        .map((option) => ({
          ...option,
          isSelected: selectedValues.includes(option.value)
        })),
    [selectedValues, options, debouncedText]
  )

  const value: FilterCardContextProps = useMemo(
    () => ({
      ...defaultValue,
      options: formattedOptions,
      searchable: !!searchable,
      setSearchText,
      searchText,
      onValueChange,
      selectedValues
    }),
    [
      formattedOptions,
      searchable,
      setSearchText,
      searchText,
      onValueChange,
      selectedValues
    ]
  )

  return (
    <FilterCartContext.Provider value={value}>
      {children}
    </FilterCartContext.Provider>
  )
}

export const useFilterCardContext = () => {
  const context = useContext(FilterCartContext)
  if (!context) {
    throw new Error(
      "useFilterCardContext must be used within a FilterCardContextProvider"
    )
  }
  return context
}
