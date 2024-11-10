import { columns, T } from "@/components/molecules/Data-Table-Columns/inventory-inventoryBreakdown-columns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import InfoCard from "@/components/ui/info-card";
import { LuBox, LuBoxes, LuCheckSquare, LuPackage, LuRecycle, LuXSquare } from "react-icons/lu";



interface StockCategory {
  CategoryName: string;
  AvailableStockMT: number;
}

interface StockResponse {
  status: string;
  message: string;
  data: StockCategory[];
}


const TableView = async({startDate,endDate}:{startDate:string,endDate:string}) => {

  const stock = await fetch('http://13.233.157.58:3000/api/para/total-stock-by-category',{
    method:"POST",
    body:JSON.stringify({
      startDate:startDate,
      endDate:endDate
    })
  })
  const stockResponse:StockResponse = await stock.json()
  const  stockData:StockCategory[] = stockResponse.data


  const stockGodownWise = await fetch('http://13.233.157.58:3000/api/para/total-stock-by-godown-and-category',{
    method:"POST",
    body:JSON.stringify({
      startDate:startDate,
      endDate:endDate
    })
  })

  const stockGodownWiseResponse = await stockGodownWise.json() 
  const  stockGodownWiseData = stockGodownWiseResponse.data

  const infoCardData = [
    { title: "Raw Material", value: stockData[2].AvailableStockMT.toString(), badge: "", info: "Total raw materials in inventory", link: "/inventory/raw-material", icon: LuPackage },
    { title: "Finished Goods", value: stockData[1].AvailableStockMT.toString(), badge: "", info: "Total finished products ready for dispatch", link: "/inventory/finished-goods", icon: LuBoxes },
    { title: "Scrap", value: stockData[3].AvailableStockMT.toString(), badge: "", info: "Total waste material from production", link: "/inventory/scrap", icon: LuRecycle },
    { title: "Ladder", value: stockData[0].AvailableStockMT.toString(), badge: "+3%", info: "Total packaging materials available", link: "/inventory/packaging-material", icon: LuBox },
  ];

  return (
    <>
    <div className='grid grid-cols-3 gap-4 p-6 mb-6 border-b-2 border-gray-200'>
        {infoCardData.map((item, index) => (
          <InfoCard  key={index} title={item.title} value={item.value + " MT"} badge={item.badge} info={item.info} icon={<item.icon className="w-4 h-4" />} link={`${item.link}`} />
        ))}
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Inventory Breakdown</CardTitle>
        <CardDescription>View the inventory breakdown for each plant.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={stockGodownWiseData} filter="plant" />
      </CardContent>
    </Card>
    </>
  )
}

export default TableView