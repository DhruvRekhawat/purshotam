import { columns } from "@/components/molecules/Data-Table-Columns/io-columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import InfoCard from "@/components/ui/info-card";
import { LuBox, LuHardHat, LuUserCheck, LuUsers } from "react-icons/lu";



async function getData() {
  const res = await fetch('../api/route?dateFilter=hello&categoryFilter=yes')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const TableView = async() => {

  const data = await getData()
  const inwardData = data.inwardData
  const outwardData = data.outwardData
  console.log(data)

  const infoCardData = [
    { title: "Total Inward Quantity", value: data.totalInwardQuantity, badge: "", info: "Number of operational plants", link: "", icon: LuBox },
    { title: "Total Outward Quantity", value:  data.totalOutwardQuantity, badge: "+2%", info: "Total workforce across all plants", link: "", icon: LuUsers },
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
        <DataTable columns={columns} data={inwardData} filter="plantName" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Outward Data</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={outwardData} filter="plantName" />
      </CardContent>
    </Card>
    </div>
    </>
  )
}

export default TableView