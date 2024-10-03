import { DataTable } from "@/components/ui/data-table"
import InfoCard from "@/components/ui/info-card"
import { columns,T} from "@/components/molecules/Data-Table-Columns/io-columns"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LuInfo, LuPackage, LuBoxes, LuRecycle, LuBox, LuCheckSquare, LuXSquare, LuUsers, LuUserCheck, LuHardHat, LuClipboardList } from "react-icons/lu";


const TableView = () => {



  const infoCardData = [
    { title: "Total Inward Quantity", value: "20", badge: "", info: "Number of operational plants", link: "/manpower/plants", icon: LuBox },
    { title: "Total Outward Quantity", value: "3,250", badge: "+2%", info: "Total workforce across all plants", link: "/manpower/employees", icon: LuUsers },
    { title: "Net Stock", value: "20", badge: "", info: "Number of plant heads", link: "/manpower/plant-heads", icon: LuUserCheck },
    { title: "Total Number of Invoices", value: "20", badge: "", info: "Number of production heads", link: "/manpower/production-heads", icon: LuHardHat },
  
  ];

  const data: T[] = [
    {
      id: "1",
      plantName: "Plant A",
      godownName: "Godown 1",
      packagingType: "Bags",
      dispatchDate: "2023-04-01",
      invoiceOrDCNumber: "INV-001",
      invoiceOrDCDate: "2023-04-01",
      clientName: "Client X",
      shipTo: "Warehouse X",
      materialType: "Raw Material",
      packingListNumber: "PL-001",
      packingListDate: "2023-03-31",
      dispatchTonnage: "50",
    },
    {
      id: "2",
      plantName: "Plant B",
      godownName: "Godown 2",
      packagingType: "Containers",
      dispatchDate: "2023-04-02",
      invoiceOrDCNumber: "INV-002",
      invoiceOrDCDate: "2023-04-02",
      clientName: "Client Y",
      shipTo: "Warehouse Y",
      materialType: "Finished Product",
      packingListNumber: "PL-002",
      packingListDate: "2023-04-01",
      dispatchTonnage: "75",
    },
    {
      id: "3",
      plantName: "Plant C",
      godownName: "Godown 3",
      packagingType: "Pallets",
      dispatchDate: "2023-04-03",
      invoiceOrDCNumber: "INV-003",
      invoiceOrDCDate: "2023-04-03",
      clientName: "Client Z",
      shipTo: "Warehouse Z",
      materialType: "Semi-Finished",
      packingListNumber: "PL-003",
      packingListDate: "2023-04-02",
      dispatchTonnage: "100",
    },
    {
      id: "4",
      plantName: "Plant D",
      godownName: "Godown 4",
      packagingType: "Drums",
      dispatchDate: "2023-04-04",
      invoiceOrDCNumber: "INV-004",
      invoiceOrDCDate: "2023-04-04",
      clientName: "Client W",
      shipTo: "Warehouse W",
      materialType: "Liquid",
      packingListNumber: "PL-004",
      packingListDate: "2023-04-03",
      dispatchTonnage: "60",
    },
    {
      id: "5",
      plantName: "Plant E",
      godownName: "Godown 5",
      packagingType: "Boxes",
      dispatchDate: "2023-04-05",
      invoiceOrDCNumber: "INV-005",
      invoiceOrDCDate: "2023-04-05",
      clientName: "Client V",
      shipTo: "Warehouse V",
      materialType: "Fragile Goods",
      packingListNumber: "PL-005",
      packingListDate: "2023-04-04",
      dispatchTonnage: "40",
    },
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
        <CardTitle>Manpower Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} filter="plantName" />
      </CardContent>
    </Card>
    </>
  )
}

export default TableView