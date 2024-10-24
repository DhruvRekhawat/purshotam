"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

export type DeliveryNoteData = {
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
  Narration: string;
  DespatchThrough: string;
  VesselFlightNo: string;
  TransporterName: string;
  ActualWeight: number;
  Quantity: string;
  Rate: string;
  Value: number;
  GrossTotal: string;
  Cgst: string;
  Sgst: string;
  RoundOff: string;
  SalesCoilLocal: string;
}

export const columns: ColumnDef<DeliveryNoteData>[] = [
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
    accessorKey: "Narration",
    header: "Narration",
  },
  {
    accessorKey: "DespatchThrough",
    header: "Despatch Through",
  },
  {
    accessorKey: "TransporterName",
    header: "Transporter Name",
  },
  {
    accessorKey: "VesselFlightNo",
    header: "Vehicle No",
  },
  {
    accessorKey: "ActualWeight",
    header: "Actual Weight",
    cell: ({ row }) => {
      const weight = row.getValue("ActualWeight") as number;
      return `${weight} MT`;
    }
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
    cell: ({ row }) => {
      const value = row.getValue("Value") as number;
      return `₹ ${value}`;
    }
  },
  {
    accessorKey: "GrossTotal",
    header: "Gross Total",
  },
  {
    accessorKey: "Cgst",
    header: "CGST",
  },
  {
    accessorKey: "Sgst",
    header: "SGST",
  },
  {
    accessorKey: "RoundOff",
    header: "Round Off",
  },
  {
    accessorKey: "SalesCoilLocal",
    header: "Sales Coil Local",
  },
]