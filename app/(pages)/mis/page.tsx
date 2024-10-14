import { columns as incomingColumns, T as IncomingT } from "@/components/molecules/Data-Table-Columns/mis-incoming-column"
import { columns as manpowerColumns, T as ManpowerT } from "@/components/molecules/Data-Table-Columns/mis-manpower-column"
import { columns as productionColumns, T as ProductionT } from "@/components/molecules/Data-Table-Columns/mis-production-column"
import { columns as stockColumns, T as StockT } from "@/components/molecules/Data-Table-Columns/mis-stock-columns"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LuDownload, LuSheet } from "react-icons/lu"

const data1: StockT[] = [
  {
    id: "001",
    particulars: "Raw Material A",
    physical: "500 kg",
    erp: 510,
    tally: 505,
  },
  {
    id: "002",
    particulars: "Product B",
    physical: "200 units",
    erp: 198,
    tally: 200,
  },
  {
    id: "003",
    particulars: "Component C",
    physical: "1000 pcs",
    erp: 1005,
    tally: 998,
  },
  {
    id: "004",
    particulars: "Finished Good D",
    physical: "50 boxes",
    erp: 52,
    tally: 50,
  },
  {
    id: "005",
    particulars: "Work in Progress E",
    physical: "300 kg",
    erp: 298,
    tally: 302,
  },
]
const data2: ProductionT[] = [
  {
    id: "001",
    particulars: "Product A",
    dailyMt: 15.5,
    monthlyMt: 465,
  },
  {
    id: "002",
    particulars: "Product B",
    dailyMt: 8.2,
    monthlyMt: 246,
  },
  {
    id: "003",
    particulars: "Product C",
    dailyMt: 12.7,
    monthlyMt: 381,
  },
  {
    id: "004",
    particulars: "Product D",
    dailyMt: 6.3,
    monthlyMt: 189,
  },
  {
    id: "005",
    particulars: "Product E",
    dailyMt: 10.1,
    monthlyMt: 303,
  },
]
const data3: ManpowerT[] = [
  {
    id: "001",
    particulars: "Production Workers",
    count: 50,
    amount: 250000,
  },
  {
    id: "002",
    particulars: "Quality Control Staff",
    count: 10,
    amount: 70000,
  },
  {
    id: "003",
    particulars: "Maintenance Team",
    count: 15,
    amount: 90000,
  },
  {
    id: "004",
    particulars: "Supervisors",
    count: 5,
    amount: 50000,
  },
  {
    id: "005",
    particulars: "Administrative Staff",
    count: 8,
    amount: 56000,
  },
]

const data4: IncomingT[] = [
  {
    id: "001",
    from: "Supplier A",
    numberOfVehicles: 3,
    kantPerWt: 15000,
    erpWt: 14950,
    tallyWt: 15020,
  },
  {
    id: "002",
    from: "Supplier B",
    numberOfVehicles: 2,
    kantPerWt: 10000,
    erpWt: 10050,
    tallyWt: 9980,
  },
  {
    id: "003",
    from: "Supplier C",
    numberOfVehicles: 1,
    kantPerWt: 5000,
    erpWt: 4990,
    tallyWt: 5010,
  },
  {
    id: "004",
    from: "Supplier D",
    numberOfVehicles: 4,
    kantPerWt: 20000,
    erpWt: 20100,
    tallyWt: 19950,
  },
  {
    id: "005",
    from: "Supplier E",
    numberOfVehicles: 2,
    kantPerWt: 8000,
    erpWt: 7980,
    tallyWt: 8020,
  },
]

const MIS = () => {
  return (
    <>
    <Tabs defaultValue="Plant A">
      <div className="flex justify-between items-center w-full p-1 rounded-md bg-white">
        <TabsList>
          <TabsTrigger value="Plant A">Plant A</TabsTrigger>
          <TabsTrigger value="Plant B">Plant B</TabsTrigger>
          <TabsTrigger value="Plant C">Plant C</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
        <Badge variant="outline" className="flex items-center text-green-600">Costing Sheet <LuSheet className="ml-2" /></Badge>
        <Badge variant="outline" className="flex items-center text-blue-600">Download <LuDownload className="ml-2" /></Badge>
        </div>
     
    </div>
    <TabsContent value="Plant A">
 
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">

      <Card className="w-full sm:col-span-2">
        <CardHeader>
          <CardTitle>Plant A</CardTitle>
          <CardDescription>Plant A Description</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={stockColumns} data={data1} filter="particulars" />
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Production</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={productionColumns} data={data2} filter="particulars" />
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Manpower</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={manpowerColumns} data={data3} filter="particulars" />
        </CardContent>
      </Card>
      <Card className="w-full sm:col-span-2">
        <CardHeader>
          <CardTitle>Incoming</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={incomingColumns} data={data4} filter="particulars" />
        </CardContent>
      </Card>
      <Card className="w-full sm:col-span-2">
        <CardHeader>
          <CardTitle>Despatch</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={incomingColumns} data={data4} filter="particulars" />
        </CardContent>
      </Card>

    </div>
    </TabsContent>
    </Tabs>
    </>
  )
}

export default MIS