
import { DataTable } from "@/components/ui/data-table"
import { columns,Payment } from "@/components/molecules/Data-Table-Columns/mis-stock-colomns"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LuCalendar, LuDownload, LuFilter, LuSheet } from "react-icons/lu"



const data:Payment[] = [{
  id: "728ed52f",
  amount: 100,
  status: "pending",
  email: "m@example.com",
}]

const MIS = () => {
  return (
    <>
    <Tabs defaultValue="Plant A">
      <div className="flex justify-between items-center w-full p-1 rounded-md">
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
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Production</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Manpower</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>

    </div>
    </TabsContent>
    </Tabs>
    </>
  )
}

export default MIS