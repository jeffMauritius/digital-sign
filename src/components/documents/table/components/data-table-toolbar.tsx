"use client"

import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import { statuses } from "../data/data"
import { documents } from "../data/documents"
import { useTranslations } from "next-intl"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const t = useTranslations()
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-4">
        <Input
          placeholder="Filter documents..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={event =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[350px]"
        />

        {statuses.map(status => {
          return (
            <Button
              size={"sm"}
              variant={"outline"}
              className={`dark:bg-gray-700`}
              key={status.label}
              onClick={() => {
                if (status.value === "All") {
                  table.resetColumnFilters()
                  return
                }
                table.getColumn("status")?.setFilterValue(status.value)
              }}
            >
              <status.icon className={`mr-2 h-4 w-4 dark:${status.color} `} />
              {t(`documents.table.toolbar.${status.label.toLowerCase()}`)}{" "}
              {status.value === "All"
                ? documents.length
                : documents.filter(doc => doc.status === status.value).length}
            </Button>
          )
        })}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
