"use client"

import { columns } from "@/components/molecules/Data-Table-Columns/io-columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import InfoCard from "@/components/ui/info-card";
import { LuBox, LuHardHat, LuUserCheck, LuUsers } from "react-icons/lu";
import { useStore } from "@/stores/layout";
import { useEffect, useState } from 'react'; // Add useEffect and useState imports


type resT = {
  inwardData: object[],
  outwardData: object[],
  totalInwardQuantity: number,
  totalOutwardQuantity: number,
}

async function getData(startDate:string,endDate:string) {


  const res = await fetch(`/inward-outward/api?startDate=${startDate}&endDate=${endDate}`,{
    cache:"no-store",
    method:"POST",
    body:JSON.stringify({
      startDate: startDate,
      endDate: endDate,
    })
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()

}

export default function TableView() {
  const { startDate, endDate } = useStore();
  const [data, setData] = useState({
  inwardData: {},
  outwardData: {},
  totalInwardQuantity: 0,
  totalOutwardQuantity: 0,
  }); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      const response:resT = await getData(startDate, endDate);
      setData(response);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, [startDate, endDate]); // Dependency array to refetch data on date change

  if (loading || !data) return <div>Loading...</div>; // Show loading state

  const inwardData = data.inwardData;
  const outwardData = data.outwardData;

  const infoCardData = [
    { title: "Total Inward Quantity", value: data.totalInwardQuantity.toString(), badge: "", info: "Number of operational plants", link: "", icon: LuBox },
    { title: "Total Outward Quantity", value:  data?.totalOutwardQuantity.toString(), badge: "+2%", info: "Total workforce across all plants", link: "", icon: LuUsers },
    { title: "Net Stock", value: "20", badge: "", info: "Number of plant heads", link: "", icon: LuUserCheck },
    { title: "Total Number of Invoices", value: "20", badge: "", info: "Number of production heads", link: "", icon: LuHardHat },
  
  ];


  return (
    <>
    <div className='grid grid-cols-3 gap-4 p-6 mb-6 border-b-2 border-gray-200'>
        {infoCardData.map((item, index) => (
          <InfoCard  key={index} title={item.title} value={item.value} badge={item.badge} info={item.info} icon={<item.icon className="w-4 h-4" />} link={`${item.link}`} />
        ))}
    </div>
    <div className="flex flex-col gap-8">
    <Card>
      <CardHeader>
        <CardTitle>Inward Data</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={Array.isArray(inwardData) ? inwardData : []} filter="plantName" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Outward Data</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={Array.isArray(outwardData) ? outwardData : []} filter="plantName" />
      </CardContent>
    </Card>
    </div>
    </>
  )
}
