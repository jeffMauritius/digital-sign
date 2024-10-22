import { Card, CardContent } from "@/components/ui/card"
import { FieldType } from "@/enums/field-type.enums"
import { cn } from "@/lib/utils"
import {
  CalendarDays,
  CheckSquare,
  ChevronDown,
  Contact,
  Disc,
  Edit,
  Hash,
  Mail,
  Type,
  User,
} from "lucide-react"
import React, { useState } from "react"

export default function AddFields() {
  const [selectedField, setSelectedField] = useState<FieldType | null>(null)

  return (
    <>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.SIGNATURE)}
        onMouseDown={() => setSelectedField(FieldType.SIGNATURE)}
        data-selected={selectedField === FieldType.SIGNATURE ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="flex flex-col items-center justify-center px-6 py-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <Edit className="h-4 w-4" />
              Signature
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.INITIALS)}
        onMouseDown={() => setSelectedField(FieldType.INITIALS)}
        data-selected={selectedField === FieldType.INITIALS ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="flex flex-col items-center justify-center px-6 py-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <Contact className="h-4 w-4" />
              Initials
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.EMAIL)}
        onMouseDown={() => setSelectedField(FieldType.EMAIL)}
        data-selected={selectedField === FieldType.EMAIL ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="flex flex-col items-center justify-center px-6 py-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <Mail className="h-4 w-4" />
              Email
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.NAME)}
        onMouseDown={() => setSelectedField(FieldType.NAME)}
        data-selected={selectedField === FieldType.NAME ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="p-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <User className="h-4 w-4" />
              Name
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.DATE)}
        onMouseDown={() => setSelectedField(FieldType.DATE)}
        data-selected={selectedField === FieldType.DATE ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="p-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <CalendarDays className="h-4 w-4" />
              Date
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.TEXT)}
        onMouseDown={() => setSelectedField(FieldType.TEXT)}
        data-selected={selectedField === FieldType.TEXT ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="p-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <Type className="h-4 w-4" />
              Text
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.NUMBER)}
        onMouseDown={() => setSelectedField(FieldType.NUMBER)}
        data-selected={selectedField === FieldType.NUMBER ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="p-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <Hash className="h-4 w-4" />
              Number
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.RADIO)}
        onMouseDown={() => setSelectedField(FieldType.RADIO)}
        data-selected={selectedField === FieldType.RADIO ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="p-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <Disc className="h-4 w-4" />
              Radio
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.CHECKBOX)}
        onMouseDown={() => setSelectedField(FieldType.CHECKBOX)}
        data-selected={selectedField === FieldType.CHECKBOX ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="p-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <CheckSquare className="h-4 w-4" />
              Checkbox
            </p>
          </CardContent>
        </Card>
      </button>
      <button
        type="button"
        className="group h-full w-full"
        onClick={() => setSelectedField(FieldType.DROPDOWN)}
        onMouseDown={() => setSelectedField(FieldType.DROPDOWN)}
        data-selected={selectedField === FieldType.DROPDOWN ? true : undefined}
      >
        <Card
          className={cn(
            "flex h-full w-full cursor-pointer items-center justify-center group-disabled:opacity-50",
          )}
        >
          <CardContent className="p-4">
            <p
              className={cn(
                "text-muted-foreground group-data-[selected]:text-foreground flex items-center justify-center gap-x-1.5 text-sm font-normal",
              )}
            >
              <ChevronDown className="h-4 w-4" />
              Dropdown
            </p>
          </CardContent>
        </Card>
      </button>
    </>
  )
}
