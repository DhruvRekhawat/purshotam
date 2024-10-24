"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// Define the type for the jobwork data structure
export type JobWorkData = {
  _id: string;
  Date: string;
  Particulars: string;
  Supplier: string;
  SupplierAddress: string;
  Consignee: string;
  ConsigneeAddress: string;
  VoucherType: string;
  VoucherNo: string;
  SupplierInvoiceNo: string;
  GstinUin: string;
  PanNo: string;
  Narration: string;
  VesselFlightNo: string;
  ActualWeight: number;
  Quantity: string;
  Rate: string;
  Value: number;
  GrossTotal: string;
  Sgst: string;
  Cgst: string;
  TdsOnContractService194c: string;
  RoundOff: string;
  JobWorkCharges12MmclSteel: string;
}

export const columns: ColumnDef<JobWorkData>[] = [
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
    accessorKey: "Supplier",
    header: "Supplier",
  },
  {
    accessorKey: "SupplierAddress",
    header: "Supplier Address",
  },
  {
    accessorKey: "Consignee",
    header: "Consignee",
  },
  {
    accessorKey: "ConsigneeAddress",
    header: "Consignee Address",
  },
  {
    accessorKey: "VoucherType",
    header: "Voucher Type",
  },
  {
    accessorKey: "VoucherNo",
    header: "Voucher No",
  },
  {
    accessorKey: "SupplierInvoiceNo",
    header: "Supplier Invoice No",
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
    accessorKey: "VesselFlightNo",
    header: "Vessel/Flight No",
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
    accessorKey: "Sgst",
    header: "SGST",
  },
  {
    accessorKey: "Cgst",
    header: "CGST",
  },
  {
    accessorKey: "TdsOnContractService194c",
    header: "TDS (194C)",
  },
  {
    accessorKey: "RoundOff",
    header: "Round Off",
  },
  {
    accessorKey: "JobWorkCharges12MmclSteel",
    header: "Job Work Charges",
  },
]