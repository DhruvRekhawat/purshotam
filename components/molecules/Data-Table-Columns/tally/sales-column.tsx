"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// Define the type for the sales invoice data structure
export type SalesInvoiceData = {
  _id: string;
  Date: string;
  Particulars: string;
  Buyer: string;
  BuyerAddress: string;
  Consignee: string;
  ConsigneeAddress: string;
  VoucherNo: string;
  VoucherRefNo: string;
  GstinUin: string;
  PanNo: string;
  Narration: string;
  DespatchThrough: string;
  VesselFlightNo: string;
  TransporterName: string;
  ActualWeight: number;
  Quantity: string;
  AltUnits: string;
  Rate: string;
  Value: number;
  GrossTotal: string;
  SalesStructureRajasthan: string;
  Igst: string;
  RoundOff: string;
}

export const columns: ColumnDef<SalesInvoiceData>[] = [
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
    accessorKey: "Date",
    header: "Date",
  },
  {
    accessorKey: "Particulars",
    header: "Particulars",
  },
  {
    accessorKey: "Buyer",
    header: "Buyer",
  },
  {
    accessorKey: "Consignee",
    header: "Consignee",
  },
  {
    accessorKey: "VoucherNo",
    header: "Voucher No",
  },
  {
    accessorKey: "VoucherRefNo",
    header: "Voucher Ref No",
  },
  {
    accessorKey: "GstinUin",
    header: "GSTIN/UIN",
  },
  {
    accessorKey: "PanNo",
    header: "PAN No",
  },
  {
    accessorKey: "Narration",
    header: "Narration",
  },
  {
    accessorKey: "DespatchThrough",
    header: "Despatch Through",
  },
  {
    accessorKey: "VesselFlightNo",
    header: "Vessel/Flight No",
  },
  {
    accessorKey: "TransporterName",
    header: "Transporter Name",
  },
  {
    accessorKey: "ActualWeight",
    header: "Actual Weight",
  },
  {
    accessorKey: "Quantity",
    header: "Quantity",
  },
  {
    accessorKey: "AltUnits",
    header: "Alt Units",
  },
  {
    accessorKey: "Rate",
    header: "Rate",
  },
  {
    accessorKey: "Value",
    header: "Value",
  },
  {
    accessorKey: "GrossTotal",
    header: "Gross Total",
  },
  {
    accessorKey: "SalesStructureRajasthan",
    header: "Sales Structure Rajasthan",
  },
  {
    accessorKey: "Igst",
    header: "IGST",
  },
  {
    accessorKey: "RoundOff",
    header: "Round Off",
  },
]