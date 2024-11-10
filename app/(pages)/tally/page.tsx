"use client"

import { useState, useEffect } from "react"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PurchaseInvoiceData, columns as purchaseColumn } from "@/components/molecules/Data-Table-Columns/tally/purchase-column"
import { SalesInvoiceData, columns as salesColumn } from "@/components/molecules/Data-Table-Columns/tally/sales-column"
import { JobWorkData, columns as jobWorkColumn } from "@/components/molecules/Data-Table-Columns/tally/jobwork-column"
import { DeliveryChallanData, columns as dcColumn } from "@/components/molecules/Data-Table-Columns/tally/deliveryChallan-column"
import { DeliveryNoteData, columns as dnpColumn } from "@/components/molecules/Data-Table-Columns/tally/dnp-column"
import { ColumnDef } from "@tanstack/react-table"
import { useStore } from "@/stores/layout";

// Define available table types
const TABLE_TYPES = ['purchase', 'sales', 'jobWork', 'dc','dnp2','dnp4','dnp6'] as const;
type TableType = typeof TABLE_TYPES[number];

// Define types for different data structures
interface DataTypes {
    purchase: PurchaseInvoiceData;
    sales: SalesInvoiceData;
    jobWork: JobWorkData; 
    dc: DeliveryChallanData; 
    dnp2: DeliveryNoteData;
    dnp4: DeliveryNoteData;
    dnp6: DeliveryNoteData;
}

// Define column configurations with proper typing
const columnConfig: Record<TableType, ColumnDef<any>[]> = {
    purchase: purchaseColumn,
    sales: salesColumn,
    jobWork: jobWorkColumn, // Add proper columns when available
    dc: dcColumn,
    dnp2: dnpColumn,
    dnp4:dnpColumn,
    dnp6:dnpColumn, // Add proper columns when available
};

// Define filter field mapping
const filterConfig: Record<TableType, string> = {
    purchase: "particulars",
    sales: "particulars",
    jobWork: "particulars",
    dc: "particulars",
    dnp2:"particulars",
    dnp4:"particulars",
    dnp6:"particulars",
};

const Tally = () => {
    const [tab, setTab] = useState("Gzb Plant");
    const [select, setSelect] = useState<TableType>("purchase");
    const [data, setData] = useState<Array<DataTypes[TableType]>>([]);
    const { startDate, endDate } = useStore();


    useEffect(() => {
        const url = `http://13.233.157.58:3000/api/${select}/filter`
        fetch(url,{
            method:"POST",
      body:JSON.stringify({
      "startDate": startDate,
      "endDate": endDate
         })
        })
            .then(res => res.json())
            .then(data => setData(data.data))
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]);
            });
    }, [tab, select,startDate,endDate]);

    const onSelectChange = (value: TableType) => {
        setSelect(value);
    };

    const onTabChange = (value: string) => {
        setTab(value);

        // to be fixed when more data for Guj Plant 2,4 and 6 is available
        if(value === "Guj Plant 2"){
          setSelect("dnp2")
        }
        if(value === "Guj Plant 4"){
          setSelect("dnp4")
        }
        if(value === "Guj Plant 6"){
          setSelect("dnp6")
        }
        if(value === "Gzb Plant"){
          setSelect("purchase")
        }
        
    };
    
    
    return (
        <>
            <Tabs defaultValue="Gzb Plant" value={tab} onValueChange={onTabChange}>
                <div className="flex justify-between items-center w-full p-1 rounded-md bg-white">
                    <TabsList>
                        <TabsTrigger value="Gzb Plant">Gzb Plant</TabsTrigger>
                        <TabsTrigger value="Guj Plant 2">Guj Plant 2</TabsTrigger>
                        <TabsTrigger value="Guj Plant 4">Guj Plant 4</TabsTrigger>
                        <TabsTrigger value="Guj Plant 6">Guj Plant 6</TabsTrigger>
                    </TabsList>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center text-green-600">
                            Costing Sheet <LuSheet className="ml-2" />
                        </Badge>
                        <Badge variant="outline" className="flex items-center text-blue-600">
                            Download <LuDownload className="ml-2" />
                        </Badge>
                    </div>
                </div>
                <div className="my-4">
                    <Select onValueChange={onSelectChange} value={select}>
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
                                <DataTable 
                                    columns={columnConfig[select]} 
                                    data={data} 
                                    filter={filterConfig[select]}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="Guj Plant 2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
                        <Card className="w-full sm:col-span-2">
                            <CardHeader>
                                <CardTitle>Delivery Notes</CardTitle>
                                <CardDescription>{tab}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DataTable 
                                    columns={columnConfig["dnp2"]} 
                                    data={data} 
                                    filter={filterConfig["dnp2"]}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="Guj Plant 4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
                        <Card className="w-full sm:col-span-2">
                            <CardHeader>
                                <CardTitle>Delivery Notes</CardTitle>
                                <CardDescription>{tab}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DataTable 
                                    columns={columnConfig["dnp4"]} 
                                    data={data} 
                                    filter={filterConfig["dnp4"]}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="Guj Plant 6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4">
                        <Card className="w-full sm:col-span-2">
                            <CardHeader>
                                <CardTitle>Delivery Notes</CardTitle>
                                <CardDescription>{tab}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DataTable 
                                    columns={columnConfig["dnp6"]} 
                                    data={data} 
                                    filter={filterConfig["dnp6"]}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </>
    );
};

export default Tally;