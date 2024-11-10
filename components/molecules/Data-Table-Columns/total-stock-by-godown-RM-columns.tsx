"use client"

import { ColumnDef } from "@tanstack/react-table"

// Define the type for our inventory data
export type InventoryData = {
  godownName: string
  "CR Coil": number
  "Galvalume Coil": number
  "Galvalume Slitted Coil": number
  "GP Coil": number
  "GP Pipe": number
  "GP Sheet": number
  "GP Slitted Coil": number
  "HR ANGLE": number
  "HR COIL": number
  "HR FLAT": number
  "HR PIPE": number
  "HR ROUND BAR": number
  "HR SHEET": number
  "Hr Slitted Coil": number
  "MS ANGLE": number
  "Posmac Coil": number
  "POSMAC Sheet": number
  "Posmac Slitted Coil": number
  "ZM COIL": number
}

// Helper function to format numbers
const formatNumber = (value: any) => {
  return typeof value === "number" ? value.toFixed(3) : value
}

export const columns: ColumnDef<InventoryData>[] = [
  {
    accessorKey: "godownName",
    header: "Godown Name",
  },
  {
    accessorKey: "CR Coil",
    header: "CR Coil",
    cell: ({ row }) => formatNumber(row.getValue("CR Coil")),
  },
  {
    accessorKey: "Galvalume Coil",
    header: "Galvalume Coil",
    cell: ({ row }) => formatNumber(row.getValue("Galvalume Coil")),
  },
  {
    accessorKey: "Galvalume Slitted Coil",
    header: "Galvalume Slitted Coil",
    cell: ({ row }) => formatNumber(row.getValue("Galvalume Slitted Coil")),
  },
  {
    accessorKey: "GP Coil",
    header: "GP Coil",
    cell: ({ row }) => formatNumber(row.getValue("GP Coil")),
  },
  {
    accessorKey: "GP Pipe",
    header: "GP Pipe",
    cell: ({ row }) => formatNumber(row.getValue("GP Pipe")),
  },
  {
    accessorKey: "GP Sheet",
    header: "GP Sheet",
    cell: ({ row }) => formatNumber(row.getValue("GP Sheet")),
  },
  {
    accessorKey: "GP Slitted Coil",
    header: "GP Slitted Coil",
    cell: ({ row }) => formatNumber(row.getValue("GP Slitted Coil")),
  },
  {
    accessorKey: "HR ANGLE",
    header: "HR Angle",
    cell: ({ row }) => formatNumber(row.getValue("HR ANGLE")),
  },
  {
    accessorKey: "HR COIL",
    header: "HR Coil",
    cell: ({ row }) => formatNumber(row.getValue("HR COIL")),
  },
  {
    accessorKey: "HR FLAT",
    header: "HR Flat",
    cell: ({ row }) => formatNumber(row.getValue("HR FLAT")),
  },
  {
    accessorKey: "HR PIPE",
    header: "HR Pipe",
    cell: ({ row }) => formatNumber(row.getValue("HR PIPE")),
  },
  {
    accessorKey: "HR ROUND BAR",
    header: "HR Round Bar",
    cell: ({ row }) => formatNumber(row.getValue("HR ROUND BAR")),
  },
  {
    accessorKey: "HR SHEET",
    header: "HR Sheet",
    cell: ({ row }) => formatNumber(row.getValue("HR SHEET")),
  },
  {
    accessorKey: "Hr Slitted Coil",
    header: "HR Slitted Coil",
    cell: ({ row }) => formatNumber(row.getValue("Hr Slitted Coil")),
  },
  {
    accessorKey: "MS ANGLE",
    header: "MS Angle",
    cell: ({ row }) => formatNumber(row.getValue("MS ANGLE")),
  },
  {
    accessorKey: "Posmac Coil",
    header: "Posmac Coil",
    cell: ({ row }) => formatNumber(row.getValue("Posmac Coil")),
  },
  {
    accessorKey: "POSMAC Sheet",
    header: "Posmac Sheet",
    cell: ({ row }) => formatNumber(row.getValue("POSMAC Sheet")),
  },
  {
    accessorKey: "Posmac Slitted Coil",
    header: "Posmac Slitted Coil",
    cell: ({ row }) => formatNumber(row.getValue("Posmac Slitted Coil")),
  },
  {
    accessorKey: "ZM COIL",
    header: "ZM Coil",
    cell: ({ row }) => formatNumber(row.getValue("ZM COIL")),
  }
]

// Optional: Add column grouping
export const columnGroups = [
  {
    id: "cr",
    header: "Cold Rolled",
    columns: ["CR Coil"]
  },
  {
    id: "galvalume",
    header: "Galvalume",
    columns: ["Galvalume Coil", "Galvalume Slitted Coil"]
  },
  {
    id: "gp",
    header: "GP Products",
    columns: ["GP Coil", "GP Pipe", "GP Sheet", "GP Slitted Coil"]
  },
  {
    id: "hr",
    header: "Hot Rolled",
    columns: ["HR ANGLE", "HR COIL", "HR FLAT", "HR PIPE", "HR ROUND BAR", "HR SHEET", "Hr Slitted Coil"]
  },
  {
    id: "ms",
    header: "MS Products",
    columns: ["MS ANGLE"]
  },
  {
    id: "posmac",
    header: "Posmac",
    columns: ["Posmac Coil", "POSMAC Sheet", "Posmac Slitted Coil"]
  },
  {
    id: "zm",
    header: "ZM Products",
    columns: ["ZM COIL"]
  }
]