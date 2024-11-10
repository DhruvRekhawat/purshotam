import { ColumnDef } from "@tanstack/react-table";

// Define a type for the data based on the structure provided
type StockData = {
  godownName: string;
  Trimming?: number;
  "ID-OD SHEET"?: number;
  "PATTI SCRAP"?: number;
  "Weld Joint Scrap"?: number;
  "Punching Chips"?: number;
  Scrap?: number;
  DEVELOPMENT?: number;
  "BLACK STRIP PATTI"?: number;
  SHEET?: number;
  "PATTI SCRAP 1"?: number;
  PLASTIC?: number;
  "PLASTIC 1"?: number;
  "Recovery Pipe Scrap"?: number;
  "SHEETS SCRAP"?: number;
  "ID-OD"?: number;
  "PUNCHING SCRAP"?: number;
  "PUNCHING CHIPS 1"?: number;
  "WELDING BURR"?: number;
  "FRONT END TAIL END SCRAP"?: number;
  DRUM?: number;
  "Stock In Transit"?: number;
  [key: string]: string | number | undefined;
};

// Define columns using ShadCN table column definition structure
export const columns: ColumnDef<StockData>[] = [
  {
    accessorKey: "godownName",
    header: "Godown Name",
    cell: ({ row }) => row.original.godownName || "-",
  },
  {
    accessorKey: "Trimming",
    header: "Trimming",
    cell: ({ row }) => (row.original.Trimming !== undefined ? row.original.Trimming : "-"),
  },
  {
    accessorKey: "ID-OD SHEET",
    header: "ID-OD Sheet",
    cell: ({ row }) => (row.original["ID-OD SHEET"] !== undefined ? row.original["ID-OD SHEET"] : "-"),
  },
  {
    accessorKey: "PATTI SCRAP",
    header: "Patti Scrap",
    cell: ({ row }) => (row.original["PATTI SCRAP"] !== undefined ? row.original["PATTI SCRAP"] : "-"),
  },
  {
    accessorKey: "Weld Joint Scrap",
    header: "Weld Joint Scrap",
    cell: ({ row }) => (row.original["Weld Joint Scrap"] !== undefined ? row.original["Weld Joint Scrap"] : "-"),
  },
  {
    accessorKey: "Punching Chips",
    header: "Punching Chips",
    cell: ({ row }) => (row.original["Punching Chips"] !== undefined ? row.original["Punching Chips"] : "-"),
  },
  {
    accessorKey: "Scrap",
    header: "Scrap",
    cell: ({ row }) => (row.original.Scrap !== undefined ? row.original.Scrap : "-"),
  },
  {
    accessorKey: "DEVELOPMENT",
    header: "Development",
    cell: ({ row }) => (row.original.DEVELOPMENT !== undefined ? row.original.DEVELOPMENT : "-"),
  },
  {
    accessorKey: "BLACK STRIP PATTI",
    header: "Black Strip Patti",
    cell: ({ row }) => (row.original["BLACK STRIP PATTI"] !== undefined ? row.original["BLACK STRIP PATTI"] : "-"),
  },
  {
    accessorKey: "SHEET",
    header: "Sheet",
    cell: ({ row }) => (row.original.SHEET !== undefined ? row.original.SHEET : "-"),
  },
  {
    accessorKey: "PATTI SCRAP 1",
    header: "Patti Scrap 1",
    cell: ({ row }) => (row.original["PATTI SCRAP 1"] !== undefined ? row.original["PATTI SCRAP 1"] : "-"),
  },
  {
    accessorKey: "PLASTIC",
    header: "Plastic",
    cell: ({ row }) => (row.original.PLASTIC !== undefined ? row.original.PLASTIC : "-"),
  },
  {
    accessorKey: "PLASTIC 1",
    header: "Plastic 1",
    cell: ({ row }) => (row.original["PLASTIC 1"] !== undefined ? row.original["PLASTIC 1"] : "-"),
  },
  {
    accessorKey: "Recovery Pipe Scrap",
    header: "Recovery Pipe Scrap",
    cell: ({ row }) => (row.original["Recovery Pipe Scrap"] !== undefined ? row.original["Recovery Pipe Scrap"] : "-"),
  },
  {
    accessorKey: "SHEETS SCRAP",
    header: "Sheets Scrap",
    cell: ({ row }) => (row.original["SHEETS SCRAP"] !== undefined ? row.original["SHEETS SCRAP"] : "-"),
  },
  {
    accessorKey: "ID-OD",
    header: "ID-OD",
    cell: ({ row }) => (row.original["ID-OD"] !== undefined ? row.original["ID-OD"] : "-"),
  },
  {
    accessorKey: "PUNCHING SCRAP",
    header: "Punching Scrap",
    cell: ({ row }) => (row.original["PUNCHING SCRAP"] !== undefined ? row.original["PUNCHING SCRAP"] : "-"),
  },
  {
    accessorKey: "PUNCHING CHIPS 1",
    header: "Punching Chips 1",
    cell: ({ row }) => (row.original["PUNCHING CHIPS 1"] !== undefined ? row.original["PUNCHING CHIPS 1"] : "-"),
  },
  {
    accessorKey: "WELDING BURR",
    header: "Welding Burr",
    cell: ({ row }) => (row.original["WELDING BURR"] !== undefined ? row.original["WELDING BURR"] : "-"),
  },
  {
    accessorKey: "FRONT END TAIL END SCRAP",
    header: "Front End Tail End Scrap",
    cell: ({ row }) => (row.original["FRONT END TAIL END SCRAP"] !== undefined ? row.original["FRONT END TAIL END SCRAP"] : "-"),
  },
  {
    accessorKey: "DRUM",
    header: "Drum",
    cell: ({ row }) => (row.original.DRUM !== undefined ? row.original.DRUM : "-"),
  },
  {
    accessorKey: "Stock In Transit",
    header: "Stock In Transit",
    cell: ({ row }) => (row.original["Stock In Transit"] !== undefined ? row.original["Stock In Transit"] : "-"),
  },
];
