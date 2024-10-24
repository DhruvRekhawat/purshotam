"use client"

import { columns } from "@/components/molecules/Data-Table-Columns/io-columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import InfoCard from "@/components/ui/info-card";
import { LuBox, LuHardHat, LuUserCheck, LuUsers } from "react-icons/lu";
import { useStore } from "@/stores/layout";
import { useEffect, useState } from 'react'; // Add useEffect and useState imports


type resT = {
  status: string,
  message:string,
  data:any[]
}


async function getData(startDate:string,endDate:string) {


  const inwardRes = await fetch(`http://13.233.157.58:3000/api/erp-inward?startDate=${startDate}&endDate=${endDate}`,{
    method:"GET",
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const inwardData:resT = await inwardRes.json()

  const outwardRes = await fetch(`http://13.233.157.58:3000/api/erp-outward?startDate=${startDate}&endDate=${endDate}`,{
    method:"GET",
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const outwardData = await outwardRes.json()

 

  if (!inwardRes.ok || !outwardRes.ok) {
    throw new Error('Failed to fetch data')
  }

  return [inwardData.data,outwardData.data]


}

export default function TableView() {
  const { startDate, endDate } = useStore();
  const [inwardData, setInwardData] = useState<any[]>(); // State to hold fetched data
  const [outwardData, setOutwardData] = useState<any[]>(); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      const response:any[] = await getData(startDate, endDate);
      setInwardData(response[0]);
      setOutwardData(response[1]);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
    console.log(startDate,endDate)
  }, [startDate, endDate]); // Dependency array to refetch data on date change

  if (loading || !inwardData || !outwardData) return <div>Loading...</div>; // Show loading state

  const infoCardData = [
    { title: "Total Inward Quantity", value: inwardData.length.toString(), badge: "", info: "Number of operational plants", link: "", icon: LuBox },
    { title: "Total Outward Quantity", value:  outwardData.length.toString(), badge: "+2%", info: "Total workforce across all plants", link: "", icon: LuUsers },
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
        <DataTable columns={columns} data={inwardData} filter="VendorName" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Outward Data</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={outwardData} filter="VendorName" />
      </CardContent>
    </Card>
    </div>
    </>
  )
}
