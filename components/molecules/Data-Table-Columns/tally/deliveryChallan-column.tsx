"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// Define the type for the delivery challan data structure
export type DeliveryChallanData = {
  _id: string;
  Date: string;
  Particulars: string;
  Buyer: string;
  BuyerAddress: string;
  Consignee: string;
  ConsigneeAddress: string;
  VoucherType: string;
  VoucherNo: string;
  VoucherRefNo: string;
  GstinUin: string;
  PanNo: string;
  Narration: string;
  DespatchDocNo: string;
  VesselFlightNo: string;
  ActualWeight: number;
  Quantity: string;
  Rate: string;
}

export const columns: ColumnDef<DeliveryChallanData>[] = [
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
    accessorKey: "BuyerAddress",
    header: "Buyer Address",
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
    accessorKey: "DespatchDocNo",
    header: "Despatch Doc No",
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
]