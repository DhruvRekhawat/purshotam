"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"

// Define a type for the data structure
export type EntryData = {
    _id: string;
    EntryNo: number;
    EntryDate: Date;
    EntryTime: string;
    Category: string;
    VendorName: string;
    TransporterName: string;
    GodownName: string;
    "Doc No": string;
    "Doc Date": string;
    "ERP Packing qty(MT)": number;
    "Empty Weight(KG)": number;
    "Empty Weight DateTime": string;
    "Loaded Weight(KG)": number;
    "Loaded Weight DateTime": string;
    "Net Weight(KG)": number;
    VehicleNo: string;
    Remarks: string;
}

// Update the existing type to use the new EntryData type
export type T = EntryData;

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
        accessorKey: "EntryNo",
        header: "Entry No",
    },
    {
        accessorKey: "EntryDate",
        header: "Entry Date",
        
    },
    {
        accessorKey: "EntryTime",
        header: "Entry Time",
    },
    {
        accessorKey: "Category",
        header: "Category",
    },
    {
        accessorKey: "VendorName",
        header: "Vendor Name",
    },
    {
        accessorKey: "TransporterName",
        header: "Transporter Name",
    },
    {
        accessorKey: "GodownName",
        header: "Godown Name",
    },
    {
        accessorKey: "Doc No",
        header: "Doc No",
    },
    {
        accessorKey: "Doc Date",
        header: "Doc Date",
    },
    {
        accessorKey: "ERP Packing qty(MT)",
        header: "ERP Packing qty (MT)",
    },
    {
        accessorKey: "Empty Weight(KG)",
        header: "Empty Weight (KG)",
    },
    {
        accessorKey: "Empty Weight DateTime",
        header: "Empty Weight DateTime",
    },
    {
        accessorKey: "Loaded Weight(KG)",
        header: "Loaded Weight (KG)",
    },
    {
        accessorKey: "Loaded Weight DateTime",
        header: "Loaded Weight DateTime",
    },
    {
        accessorKey: "Net Weight(KG)",
        header: "Net Weight (KG)",
    },
    {
        accessorKey: "VehicleNo",
        header: "Vehicle No",
    },
    {
        accessorKey: "Remarks",
        header: "Remarks",
    },
]
