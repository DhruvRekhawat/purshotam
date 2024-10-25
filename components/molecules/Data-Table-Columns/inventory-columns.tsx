"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// Define the type for the inventory item data structure
export type InventoryItemData = {
  itemName: string;
  entryDate: string;
  grade: string;
  make: string;
  godownName: string;
  width: string;
  thickness: string;
  category: string;
}

export const columns: ColumnDef<InventoryItemData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
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
    accessorKey: "itemName",
    header: "Item Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
  {
    accessorKey: "make",
    header: "Make",
  },
  {
    accessorKey: "width",
    header: "Width (mm)",
    cell: ({ row }) => {
      const width = row.getValue("width");
      return `${width} mm`;
    }
  },
  {
    accessorKey: "thickness",
    header: "Thickness",
  },
  {
    accessorKey: "godownName",
    header: "Godown",
  },
  {
    accessorKey: "entryDate",
    header: "Entry Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("entryDate"));
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    }
  },
]