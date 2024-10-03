"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type T = {
  id: string
  particulars: string
  dailyMt: number
  monthlyMt: number
}

export const columns: ColumnDef<T>[] = [

  {
    accessorKey: "particulars",
    header: "Particulars",
  },
  {
    accessorKey: "dailyMt",
    header: "Daily Mt",
  },
  {
    accessorKey: "monthlyMt",
    header: "Monthly Mt",
  },

]
