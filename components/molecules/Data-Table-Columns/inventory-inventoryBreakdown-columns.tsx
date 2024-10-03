"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type T = {
  id: string
  plantName: string,
  rawMaterial: string,
  finishedGood: string,
  scrap: string,
  packagingMaterial: string,
  status: "Ready to Dispatch" | "Not Ready to Dispatch",
}

export const columns: ColumnDef<T>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
    enableHiding: false,
    },
  {
    accessorKey: "plantName",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Plant Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({row}) => {
        return <Link href={`/inventory/${row.original.plantName}`}>{row.original.plantName}</Link>
      }
  },
  {
    accessorKey: "rawMaterial",
    header: "Raw Material",
  },
  {
    accessorKey: "finishedGood",
    header: "Finished Good",
  },
  {
    accessorKey: "scrap",
    header: "Scrap",
  },
  {
    accessorKey: "packagingMaterial",
    header: "Packaging Material",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
        return <Badge className={`${row.original.status === "Ready to Dispatch" ? "bg-green-200 border-green-500 text-green-500" : "bg-red-200 border-red-500 text-red-500"}`}>{row.original.status}</Badge>
  },
  },
]
