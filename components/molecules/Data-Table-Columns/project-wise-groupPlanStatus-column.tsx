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
  totalCapacity: number,
  capacityUtilized: number,
  costing: number,
  runRate: number,
  manPower: number,
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
    accessorKey: "totalCapacity",
    header: "Total Capacity",
  },
  {
    accessorKey: "capacityUtilized",
    header: "Capacity Utilized",
  },
  {
    accessorKey: "costing",
    header: "Costing",
  },
  {
    accessorKey: "runRate",
    header: "Run Rate",
  },
  {
    accessorKey: "manPower",
    header: "Man Power",
  },
]
