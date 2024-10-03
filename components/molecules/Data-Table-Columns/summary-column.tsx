"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type T = {
  id: string
  projectName: string,
  owner: string,
  startDate: string,
  dueDate: string,
  percentComplete: number,
  status: "Ongoing" | "Completed" | "Cancelled",
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
    accessorKey: "projectName",
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
        return <Link href={`/inventory/${row.original.projectName}`}>{row.original.projectName}</Link>
      }
  },
  {
    accessorKey: "owner",
    header: "Owner",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    accessorKey: "percentComplete",
    header: "%Complete",
    cell: ({row}) => {
        return <div className="flex items-center justify-center gap-2"><Progress value={row.original.percentComplete} /> {row.original.percentComplete}% </div>
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
        return <Badge className={`${row.original.status === "Ongoing" ? "bg-green-200 border-green-500 text-green-500" : row.original.status === "Completed" ? "bg-blue-200 border-blue-500 text-blue-500" : "bg-red-200 border-red-500 text-red-500"}`}>{row.original.status}</Badge>
  },
  },
]
