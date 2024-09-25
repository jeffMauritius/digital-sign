import React, { useMemo } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useTranslations } from "next-intl"
import { z } from "zod"

const SelectComponentSchema = z.object({
  values: z.record(z.unknown()),
  enumType: z.string(),
})

interface SelectComponentProps extends z.infer<typeof SelectComponentSchema> {}

const SelectComponent: React.FC<SelectComponentProps> = ({
  values,
  enumType,
}) => {
  SelectComponentSchema.parse({ values, enumType })

  const optionValues = useMemo(() => Object.keys(values), [values])
  const t = useTranslations()

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {optionValues.map(value => (
            <SelectItem key={value} value={value}>
              {t(`${enumType}.${value}`)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectComponent
