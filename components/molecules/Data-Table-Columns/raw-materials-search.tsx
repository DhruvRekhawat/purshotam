"use client"

import { ColumnDef } from "@tanstack/react-table"

export type T = {
EntryDate: string,
ItemName: string,
CategoryName: string,
SizeDesp: string,
Thickness: string,
Width: string,
Grade: string,
MAKE: string,
GodownName: string,
StockInQTYMT: number,
StockOutQTYMT: number
}

export const columns: ColumnDef<T>[] = [

  {
    accessorKey: "EntryDate",
    header: "Entry Date",
  },
  {
    accessorKey: "ItemName",
    header: "Item Name",
  },
  {
    accessorKey: "CategoryName",
    header: "Category Name",
  },
  {
    accessorKey: "SizeDesp",
    header: "Size Desp",
  },
  {
    accessorKey: "Thickness",
    header: "Thickness",
  },
  {
    accessorKey: "Width",
    header: "Width",
  },
  {
    accessorKey: "Grade",
    header: "Grade",
  },
  {
    accessorKey: "MAKE",
    header: "Make",
  },
  {
    accessorKey: "GodownName",
    header: "Godown Name",
  },
  {
    accessorKey: "StockInQTYMT",
    header: "Stock In (MT)",
  },
  {
    accessorKey: "StockOutQTYMT",
    header: "Stock Out (MT)",
  },
]
