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
  godownName: string,
  packagingType: string,
  dispatchDate: string,
  invoiceOrDCNumber: string,
  invoiceOrDCDate: string,
  clientName: string,
  shipTo: string,
  materialType: string,
  packingListNumber: string,
  packingListDate: string,
  dispatchTonnage: string,
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
        accessorKey: "godownName",
        header: "Godown Name",
    },
    {
        accessorKey: "packagingType",
        header: "Packaging Type",
    },
    {
        accessorKey: "dispatchDate",
        header: "Dispatch Date",
    },
    {
        accessorKey: "invoiceOrDCNumber",
        header: "Invoice/DC Number",
    },
    {
        accessorKey: "invoiceOrDCDate",
        header: "Invoice/DC Date",
    },
    {
        accessorKey: "clientName",
        header: "Client Name",
    },
    {
        accessorKey: "shipTo",
        header: "Ship To",
    },
    {
        accessorKey: "materialType",
        header: "Material Type",
    },
    {
        accessorKey: "packingListNumber",
        header: "Packing List Number",
    },
    {
        accessorKey: "packingListDate",
        header: "Packing List Date",
    },
    {
        accessorKey: "dispatchTonnage",
        header: "Dispatch Tonnage",
    },
]
