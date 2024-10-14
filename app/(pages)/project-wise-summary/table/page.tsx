import { DataTable } from "@/components/ui/data-table"
import InfoCard from "@/components/ui/info-card"
import { columns,T} from "@/components/molecules/Data-Table-Columns/project-wise-groupPlanStatus-column"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LuPackage, LuBoxes, LuRecycle, LuBox, LuCheckSquare } from "react-icons/lu";


const TableView = () => {

   
        const data: T[] = [
          {
            id: "728ed52f",
            plantName: "Plant A",
            totalCapacity: 1000,
            capacityUtilized: 750,
            costing: 5000,
            runRate: 85,
            manPower: 50
          },
          {
            id: "92a5c6e8",
            plantName: "Plant B",
            totalCapacity: 1200,
            capacityUtilized: 900,
            costing: 6000,
            runRate: 90,
            manPower: 60
          },
          {
            id: "3f7b9d1a",
            plantName: "Plant C",
            totalCapacity: 800,
            capacityUtilized: 600,
            costing: 4000,
            runRate: 80,
            manPower: 40
          },
          {
            id: "6c4e8f2d",
            plantName: "Plant D",
            totalCapacity: 1100,
            capacityUtilized: 825,
            costing: 5500,
            runRate: 88,
            manPower: 55
          },
          {
            id: "1d9a7b3e",
            plantName: "Plant E",
            totalCapacity: 950,
            capacityUtilized: 712,
            costing: 4750,
            runRate: 82,
            manPower: 48
          },
          {
            id: "5e2c9f4a",
            plantName: "Plant F",
            totalCapacity: 1300,
            capacityUtilized: 975,
            costing: 6500,
            runRate: 92,
            manPower: 65
          },
          {
            id: "7b3d1e8c",
            plantName: "Plant G",
            totalCapacity: 850,
            capacityUtilized: 637,
            costing: 4250,
            runRate: 78,
            manPower: 43
          },
          {
            id: "9f4a2d7e",
            plantName: "Plant H",
            totalCapacity: 1050,
            capacityUtilized: 787,
            costing: 5250,
            runRate: 86,
            manPower: 53
          },
          {
            id: "2e8c6b1f",
            plantName: "Plant I",
            totalCapacity: 1150,
            capacityUtilized: 862,
            costing: 5750,
            runRate: 89,
            manPower: 58
          },
          {
            id: "4d7e9a3b",
            plantName: "Plant J",
            totalCapacity: 900,
            capacityUtilized: 675,
            costing: 4500,
            runRate: 81,
            manPower: 45
          },
          {
            id: "6b1f3c8d",
            plantName: "Plant K",
            totalCapacity: 1250,
            capacityUtilized: 937,
            costing: 6250,
            runRate: 91,
            manPower: 63
          },
          {
            id: "8d2e7a1b",
            plantName: "Plant L",
            totalCapacity: 975,
            capacityUtilized: 731,
            costing: 4875,
            runRate: 83,
            manPower: 49
          },
          {
            id: "a3b9c5d7",
            plantName: "Plant M",
            totalCapacity: 1175,
            capacityUtilized: 881,
            costing: 5875,
            runRate: 87,
            manPower: 59
          },
          {
            id: "c5d7e9f1",
            plantName: "Plant N",
            totalCapacity: 825,
            capacityUtilized: 618,
            costing: 4125,
            runRate: 79,
            manPower: 41
          },
          {
            id: "e9f1g3h5",
            plantName: "Plant O",
            totalCapacity: 1075,
            capacityUtilized: 806,
            costing: 5375,
            runRate: 84,
            manPower: 54
          },
          {
            id: "g3h5i7j9",
            plantName: "Plant P",
            totalCapacity: 1225,
            capacityUtilized: 918,
            costing: 6125,
            runRate: 93,
            manPower: 61
          },
          {
            id: "i7j9k1l3",
            plantName: "Plant Q",
            totalCapacity: 925,
            capacityUtilized: 693,
            costing: 4625,
            runRate: 82,
            manPower: 46
          },
          {
            id: "k1l3m5n7",
            plantName: "Plant R",
            totalCapacity: 1125,
            capacityUtilized: 843,
            costing: 5625,
            runRate: 88,
            manPower: 56
          },
          {
            id: "m5n7o9p1",
            plantName: "Plant S",
            totalCapacity: 875,
            capacityUtilized: 656,
            costing: 4375,
            runRate: 80,
            manPower: 44
          },
          {
            id: "o9p1q3r5",
            plantName: "Plant T",
            totalCapacity: 1025,
            capacityUtilized: 768,
            costing: 5125,
            runRate: 85,
            manPower: 51
          }
        ];
      

  const infoCardData = [
    { title: "Total Capacity", value: "1000 kg", badge: "+5%", info: "Total raw materials in inventory", link: "/inventory/table/raw-material", icon: LuPackage },
    { title: "Capacity Utilized", value: "520 units", badge: "-2%", info: "Total finished products ready for dispatch", link: "/inventory/table/finished-goods", icon: LuBoxes },
    { title: "Costing", value: "32 kg", badge: "+1%", info: "Total waste material from production", link: "/inventory/table/scrap", icon: LuRecycle },
    { title: "Run Rate", value: "565 boxes", badge: "+3%", info: "Total packaging materials available", link: "/inventory/table/packaging-material", icon: LuBox },
    { title: "Man Power", value: "3 plants", badge: "60%", info: "Number of plants ready for dispatch", link: "/inventory/table/ready-to-dispatch", icon: LuCheckSquare },
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
        <CardTitle>Group Plan Status</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} filter="plantName" />
      </CardContent>
    </Card>
    </>
  )
}

export default TableView