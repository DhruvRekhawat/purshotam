"use client"

import { BarSingle } from "@/components/molecules/Charts/bar-single"
import { DonutTitle } from "@/components/molecules/Charts/donut-title"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InfoCard from "@/components/ui/info-card"
import { useEffect, useState } from "react"
import { LuPackage } from "react-icons/lu"


const Page = () => {


      const [cardData,setCardData]=useState([])    

      useEffect(()=>{
        const apiData= fetch("http://13.233.157.58:3000/api/para/total-stock-item-wise-by-category",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
            "Category":"FG"
        })
        }).then((res)=>res.json()).then((data)=>data.data).then((data)=>setCardData(data))
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
        {/* <DataTable columns={columns} data={data} filter="plantName" /> */}
      </CardContent>
    </Card>

    <BarSingle />
    <DonutTitle />
    </div>
    </>

  )
}

export default Page