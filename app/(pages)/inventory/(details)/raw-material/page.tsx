"use client"

import { BarSingle } from "@/components/molecules/Charts/bar-single"
import { DonutTitle } from "@/components/molecules/Charts/donut-title"
import { columns, InventoryData } from "@/components/molecules/Data-Table-Columns/total-stock-by-godown-RM-columns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import InfoCard from "@/components/ui/info-card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { LuPackage } from "react-icons/lu"

const Page = () => {


      const [cardData,setCardData]=useState([])    
      const [tableData,setTableData]=useState<InventoryData[]>([])    

      useEffect(()=>{
        const apiData= fetch("http://13.233.157.58:3000/api/para/total-stock-item-wise-by-category",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
            "Category":"RM"
        })
        }).then((res)=>res.json()).then((data)=>data.data).then((data)=>setCardData(data))
        .catch((err)=>console.error(err))
      })
      useEffect(()=>{
        const apiData= fetch("http://13.233.157.58:3000/api/para/total-stock-by-category-for-all-godowns",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
            "Category":"RM"
        })
        }).then((res)=>res.json()).then((data)=>data.data).then((data)=>setTableData(data))
        .catch((err)=>console.error(err))
      })

      
      

      
    
      const infoCardData = cardData.map(({ ItemName, AvailableStockMT }) => ({
        title: ItemName,
        value: AvailableStockMT,
        badge: "",
        info: `Available stock of ${ItemName}`,
        icon: LuPackage
      }));


  return (

    <>

<Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
                  
      </TabsContent>
      <TabsContent value="password">
        </TabsContent>
    </Tabs>
        {/* <InventorySearch></InventorySearch> */}

    <div className='grid grid-cols-3 gap-4 p-6 mb-6 border-b-2 border-gray-200'>
        {infoCardData.map((item, index) => (
          <InfoCard  key={index} title={item.title} value={item.value} badge={item.badge} info={item.info} icon={<item.icon className="w-4 h-4"/>} link="" />
        ))}
    </div>
    <div className="flex flex-col gap-4">
    <Card>
      <CardHeader>
        <CardTitle>Raw Material</CardTitle>
        <CardDescription>View the inventory breakdown for each plant.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={tableData} filter="godownName" />
      </CardContent>
    </Card>

    <BarSingle />
    <DonutTitle />
    </div>
    </>

  )
}

export default Page