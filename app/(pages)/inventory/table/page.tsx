import { columns, T } from "@/components/molecules/Data-Table-Columns/inventory-inventoryBreakdown-columns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import InfoCard from "@/components/ui/info-card";
import { LuBox, LuBoxes, LuCheckSquare, LuPackage, LuRecycle, LuXSquare } from "react-icons/lu";


const TableView = () => {

  const data: T[] = [
    {
      id: "728ed52f",
      plantName: "Plant A",
      rawMaterial: "100 kg",
      finishedGood: "80 units",
      scrap: "5 kg",
      packagingMaterial: "90 boxes",
      status: "Ready to Dispatch"
      
    },
    {
      id: "92a5c6e8",
      plantName: "Plant B",
      rawMaterial: "150 kg",
      finishedGood: "120 units",
      scrap: "8 kg",
      packagingMaterial: "130 boxes",
      status: "Not Ready to Dispatch"
    },
    {
      id: "3f7b9d1a",
      plantName: "Plant C",
      rawMaterial: "75 kg",
      finishedGood: "60 units",
      scrap: "3 kg",
      packagingMaterial: "65 boxes",
      status: "Ready to Dispatch"
    },
    {
      id: "6c4e8f2d",
      plantName: "Plant D",
      rawMaterial: "200 kg",
      finishedGood: "160 units",
      scrap: "10 kg",
      packagingMaterial: "170 boxes",
      status: "Not Ready to Dispatch"
    },
    {
      id: "1d9a7b3e",
      plantName: "Plant E",
      rawMaterial: "125 kg",
      finishedGood: "100 units",
      scrap: "6 kg",
      packagingMaterial: "110 boxes",
      status: "Ready to Dispatch"
    }
  ];

  const infoCardData = [
    { title: "Raw Material", value: "1000 kg", badge: "+5%", info: "Total raw materials in inventory", link: "/inventory/table/raw-material", icon: LuPackage },
    { title: "Finished Goods", value: "520 units", badge: "-2%", info: "Total finished products ready for dispatch", link: "/inventory/table/finished-goods", icon: LuBoxes },
    { title: "Scrap", value: "32 kg", badge: "+1%", info: "Total waste material from production", link: "/inventory/table/scrap", icon: LuRecycle },
    { title: "Packaging Material", value: "565 boxes", badge: "+3%", info: "Total packaging materials available", link: "/inventory/table/packaging-material", icon: LuBox },
    { title: "Ready to Dispatch", value: "3 plants", badge: "60%", info: "Number of plants ready for dispatch", link: "/inventory/table/ready-to-dispatch", icon: LuCheckSquare },
    { title: "Not Ready", value: "2 plants", badge: "40%", info: "Number of plants not ready for dispatch", link: "/inventory/table/not-ready", icon: LuXSquare }
  ];

  return (
    <>
    <div className='grid grid-cols-3 gap-4 p-6 mb-6 border-b-2 border-gray-200'>
        {infoCardData.map((item, index) => (
          <InfoCard  key={index} title={item.title} value={item.value} badge={item.badge} info={item.info} icon={<item.icon className="w-4 h-4" />} link={`${item.link}`} />
        ))}
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Inventory Breakdown</CardTitle>
        <CardDescription>View the inventory breakdown for each plant.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} filter="plantName" />
      </CardContent>
    </Card>
    </>
  )
}

export default TableView