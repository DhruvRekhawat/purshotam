"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type T = {
  id: string
  particulars: string
  physical: string
  erp: number
  tally: number
}

export const columns: ColumnDef<T>[] = [

  {
    accessorKey: "particulars",
    header: "Particulars",
  },
  {
    accessorKey: "physical",
    header: "Physical",
  },
  {
    accessorKey: "erp",
    header: "ERP",
  },
  {
    accessorKey: "tally",
    header: "Tally",
  },
]
