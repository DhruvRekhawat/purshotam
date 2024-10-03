import { DataTable } from "@/components/ui/data-table"
import InfoCard from "@/components/ui/info-card"
import { columns,T} from "@/components/molecules/Data-Table-Columns/manpower-columns"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LuInfo, LuPackage, LuBoxes, LuRecycle, LuBox, LuCheckSquare, LuXSquare, LuUsers, LuUserCheck, LuHardHat, LuClipboardList } from "react-icons/lu";


const TableView = () => {

    const data: T[] = [
        {
          id: "1a2b3c4d",
          plantName: "Plant A",
          plantHead: "John Smith",
          productionHead: "Emma Johnson",
          supervisor: "Michael Brown",
          inventoryManager: "Sarah Davis",
          worker: "150"
        },
        {
          id: "2e3f4g5h",
          plantName: "Plant B",
          plantHead: "David Wilson",
          productionHead: "Olivia Taylor",
          supervisor: "James Anderson",
          inventoryManager: "Sophia Martinez",
          worker: "120"
        },
        {
          id: "3i4j5k6l",
          plantName: "Plant C",
          plantHead: "Robert Lee",
          productionHead: "Isabella Clark",
          supervisor: "William Turner",
          inventoryManager: "Emily White",
          worker: "200"
        },
        {
          id: "4m5n6o7p",
          plantName: "Plant D",
          plantHead: "Jennifer Brown",
          productionHead: "Daniel Moore",
          supervisor: "Jessica Taylor",
          inventoryManager: "Christopher Lee",
          worker: "180"
        },
        {
          id: "5q6r7s8t",
          plantName: "Plant E",
          plantHead: "Michael Johnson",
          productionHead: "Sophia Anderson",
          supervisor: "Matthew Davis",
          inventoryManager: "Olivia Martin",
          worker: "160"
        },
        {
          id: "6u7v8w9x",
          plantName: "Plant F",
          plantHead: "Elizabeth Wilson",
          productionHead: "Andrew Thompson",
          supervisor: "Ava Robinson",
          inventoryManager: "Ethan Clark",
          worker: "140"
        },
        {
          id: "7y8z9a0b",
          plantName: "Plant G",
          plantHead: "Thomas Harris",
          productionHead: "Mia Garcia",
          supervisor: "Alexander White",
          inventoryManager: "Sophia Lee",
          worker: "190"
        },
        {
          id: "8c9d0e1f",
          plantName: "Plant H",
          plantHead: "Sarah Martinez",
          productionHead: "Christopher Brown",
          supervisor: "Emma Wilson",
          inventoryManager: "Daniel Taylor",
          worker: "130"
        },
        {
          id: "9g0h1i2j",
          plantName: "Plant I",
          plantHead: "Joseph Anderson",
          productionHead: "Abigail Davis",
          supervisor: "Ryan Thompson",
          inventoryManager: "Madison Clark",
          worker: "170"
        },
        {
          id: "0k1l2m3n",
          plantName: "Plant J",
          plantHead: "Charles Taylor",
          productionHead: "Ella Moore",
          supervisor: "Liam Johnson",
          inventoryManager: "Chloe Martin",
          worker: "110"
        },
        {
          id: "1o2p3q4r",
          plantName: "Plant K",
          plantHead: "Patricia Robinson",
          productionHead: "Noah White",
          supervisor: "Grace Brown",
          inventoryManager: "Lucas Garcia",
          worker: "220"
        },
        {
          id: "2s3t4u5v",
          plantName: "Plant L",
          plantHead: "Christopher Lee",
          productionHead: "Zoe Thompson",
          supervisor: "Benjamin Davis",
          inventoryManager: "Lily Wilson",
          worker: "140"
        },
        {
          id: "3w4x5y6z",
          plantName: "Plant M",
          plantHead: "Margaret Clark",
          productionHead: "Samuel Anderson",
          supervisor: "Victoria Martinez",
          inventoryManager: "Henry Johnson",
          worker: "160"
        },
        {
          id: "4a5b6c7d",
          plantName: "Plant N",
          plantHead: "Richard Moore",
          productionHead: "Evelyn Taylor",
          supervisor: "Jack Brown",
          inventoryManager: "Scarlett Wilson",
          worker: "190"
        },
        {
          id: "5e6f7g8h",
          plantName: "Plant O",
          plantHead: "Linda Martin",
          productionHead: "Owen Harris",
          supervisor: "Audrey Thompson",
          inventoryManager: "Leo Garcia",
          worker: "130"
        },
        {
          id: "6i7j8k9l",
          plantName: "Plant P",
          plantHead: "Daniel White",
          productionHead: "Penelope Davis",
          supervisor: "Gabriel Clark",
          inventoryManager: "Nora Robinson",
          worker: "170"
        },
        {
          id: "7m8n9o0p",
          plantName: "Plant Q",
          plantHead: "Barbara Thompson",
          productionHead: "Sebastian Lee",
          supervisor: "Hazel Moore",
          inventoryManager: "Elijah Anderson",
          worker: "200"
        },
        {
          id: "8q9r0s1t",
          plantName: "Plant R",
          plantHead: "William Garcia",
          productionHead: "Aurora Wilson",
          supervisor: "Isaac Martin",
          inventoryManager: "Stella Brown",
          worker: "150"
        },
        {
          id: "9u0v1w2x",
          plantName: "Plant S",
          plantHead: "Elizabeth Davis",
          productionHead: "Caleb Taylor",
          supervisor: "Skylar Johnson",
          inventoryManager: "Zachary White",
          worker: "180"
        },
        {
          id: "0y1z2a3b",
          plantName: "Plant T",
          plantHead: "James Robinson",
          productionHead: "Violet Clark",
          supervisor: "Miles Thompson",
          inventoryManager: "Aria Harris",
          worker: "140"
        }
      ];
    

  const infoCardData = [
    { title: "Morning Shift Workers", value: "20", badge: "", info: "Number of operational plants", link: "/manpower/plants", icon: LuBox },
    { title: "Night Shift Workers", value: "3,250", badge: "+2%", info: "Total workforce across all plants", link: "/manpower/employees", icon: LuUsers },
    { title: "Man Power Shortage", value: "20", badge: "", info: "Number of plant heads", link: "/manpower/plant-heads", icon: LuUserCheck },
    { title: "Active Man Power", value: "20", badge: "", info: "Number of production heads", link: "/manpower/production-heads", icon: LuHardHat },
    { title: "Idle Man Power", value: "60", badge: "+5%", info: "Total number of supervisors", link: "/manpower/supervisors", icon: LuClipboardList },
    { title: "Total Man Power", value: "40", badge: "-2%", info: "Total number of inventory managers", link: "/manpower/inventory-managers", icon: LuPackage }
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