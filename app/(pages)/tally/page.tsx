"use client"

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
import { PurchaseInvoiceData as purchaseType,columns as purchaseColumn } from "@/components/molecules/Data-Table-Columns/tally/purchase-column"
import { SalesInvoiceData as salesType, columns as salesColumn } from "@/components/molecules/Data-Table-Columns/tally/sales-column"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
  


const Tally = () => {

    const [tab, setTab] = useState("Gzb Plant");
    const [select,setSelect] = useState("purchase");
    const [data,setData] = useState<any[]>([]);


    useEffect(()=>{
      const url = `http://13.233.157.58:3000/api/${select}/filter?startDate=&endDate=`
      fetch(url).then((res)=>res.json()).then((data)=>setData(data.data))
    },[tab,select])

    const onSelectChange = (value:string)=>{
        setSelect(value)
    }

    const onTabChange = (value:string) => {
      setTab(value);
    }  
  return (
    <>
    <Tabs defaultValue="Gzb Plant" value={tab} onValueChange={onTabChange} >
      <div className="flex justify-between items-center w-full p-1 rounded-md bg-white">
        <TabsList>
          <TabsTrigger value="Gzb Plant">Gzb Plant</TabsTrigger>
          <TabsTrigger value="Guj Plant 2">Guj Plant 2</TabsTrigger>
          <TabsTrigger value="Guj Plant 4">Guj Plant 4</TabsTrigger>
          <TabsTrigger value="Guj Plant 6">Guj Plant 6</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
        <Badge variant="outline" className="flex items-center text-green-600">Costing Sheet <LuSheet className="ml-2" /></Badge>
        <Badge variant="outline" className="flex items-center text-blue-600">Download <LuDownload className="ml-2" /></Badge>
        </div>
     
    </div>
    <div className="my-4">
            <Select onValueChange={onSelectChange} value={select} >
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Data" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="purchase">Purchase</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="jobWork">Job Work</SelectItem>
            <SelectItem value="dc">Delivery Challan</SelectItem>
        </SelectContent>
        </Select>

        
    </div>

    <TabsContent value="Gzb Plant">
 
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">

      <Card className="w-full sm:col-span-2">
        <CardHeader>
          <CardTitle>{select.toLocaleUpperCase()}</CardTitle>
          <CardDescription>{tab}</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={purchaseColumn} data={data} filter="particulars" />
        </CardContent>
      </Card>

    </div>
    </TabsContent>
    </Tabs>
    </>
  )
}

export default Tally