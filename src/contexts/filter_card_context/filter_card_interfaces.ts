import type { ReactNode } from "react"

export interface Option {
  label: string
  value: string
}

export interface FormattedOption {
  label: string
  value: string
  isSelected: boolean
}

export interface FilterCardContextProviderProps {
  options: Option[]
  selectedValues: string[]
  children: ReactNode | ReactNode[]
  searchable: boolean
  onValueChange: (selectedValues: string[]) => void
}

export interface FilterCardContextProps {
  options: FormattedOption[]
  selectedValues: string[]
  searchable: boolean
  searchText: string
  setSearchText: (text: string) => void
  onValueChange: FilterCardContextProviderProps["onValueChange"]
}
