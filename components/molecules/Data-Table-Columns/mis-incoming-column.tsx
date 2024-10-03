"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type T = {
  id: string
  from: string
  numberOfVehicles: number
  kantPerWt: number
  erpWt: number
  tallyWt: number
}

export const columns: ColumnDef<T>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "from",
    header: "From",
  },
  {
    accessorKey: "numberOfVehicles",
    header: "Number of Vehicles",
  },
  {
    accessorKey: "kantPerWt",
    header: "Kant Per Wt",
  },
  {
    accessorKey: "erpWt",
    header: "ERP Wt",
  },
  {
    accessorKey: "tallyWt",
    header: "Tally Wt",
  },
]
