"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// Define the type for the data structure
export type PurchaseInvoiceData = {
  _id: string;
  Date: string;
  Particulars: string;
  Supplier: string;
  SupplierAddress: string;
  Consignee: string;
  ConsigneeAddress: string;
  VoucherNo: string;
  SupplierInvoiceNo: string;
  GstinUin: string;
  PanNo: string;
  Narration: string;
  OrderNoDate: string;
  TermsOfPayment: string;
  ReceiptDocLrNo: string;
  DespatchThrough: string;
  Destination: string;
  VesselFlightNo: string;
  TransporterName: string;
  ActualWeight: string;
  Quantity: string;
  Rate: string;
  Value: string;
  GrossTotal: string;
  PurchaseStructureGujarat: string;
  Igst: string;
  RoundOff: string;
}

export const columns: ColumnDef<PurchaseInvoiceData>[] = [
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
    accessorKey: "Consignee",
    header: "Consignee",
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
    accessorKey: "OrderNoDate",
    header: "Order No & Date",
  },
  {
    accessorKey: "TermsOfPayment",
    header: "Terms of Payment",
  },
  {
    accessorKey: "DespatchThrough",
    header: "Despatch Through",
  },
  {
    accessorKey: "Destination",
    header: "Destination",
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
    accessorKey: "PurchaseStructureGujarat",
    header: "Purchase Structure Gujarat",
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