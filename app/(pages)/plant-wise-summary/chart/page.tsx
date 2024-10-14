
import { BarHorizontal } from '@/components/molecules/Charts/bar-horizontal'
import { PieLabel } from '@/components/molecules/Charts/pie-label'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ChartView = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <PieLabel></PieLabel>
      <BarHorizontal data={[]} title={""} description={""} dataKey={""} categoryKey={""}></BarHorizontal>
      <div className='col-span-2 row-span-2'>
        <TableDemo></TableDemo>
      </div>    
      <BarHorizontal data={[]} title={""} description={""} dataKey={""} categoryKey={""}></BarHorizontal>
      <BarHorizontal data={[]} title={""} description={""} dataKey={""} categoryKey={""}></BarHorizontal>
    </div>
  )
}

export default ChartView

const data = [
    {
        id: "1",
        plantName: "Plant 1",
        runningProject: "Tata",
    },
    {
        id: "2",
        plantName: "Plant 2",
        runningProject: "Honda",
    },
    {
        id: "3",
        plantName: "Plant 3",
        runningProject: "Toyota",
    },
    {
        id: "4",
        plantName: "Plant 4",
        runningProject: "Ford",
    },
    {
        id: "5",
        plantName: "Plant 5",
        runningProject: "Volkswagen",
    },
    {
        id: "6",
        plantName: "Plant 6",
        runningProject: "BMW",
    },
    {
        id: "7",
        plantName: "Plant 7",
        runningProject: "Mercedes",
    },
    {
        id: "8",
        plantName: "Plant 8",
        runningProject: "Hyundai",
    },
    {
        id: "9",
        plantName: "Plant 9",
        runningProject: "Kia",
    },
    {
        id: "10",
        plantName: "Plant 10",
        runningProject: "Nissan",
    },
    {
        id: "11",
        plantName: "Plant 11",
        runningProject: "Mazda",
    },
    {
        id: "12",
        plantName: "Plant 12",
        runningProject: "Subaru",
    },
    {
        id: "13",
        plantName: "Plant 13",
        runningProject: "Volvo",
    },
    {
        id: "14",
        plantName: "Plant 14",
        runningProject: "Audi",
    },
    {
        id: "15",
        plantName: "Plant 15",
        runningProject: "Lexus",
    },
    {
        id: "16",
        plantName: "Plant 16",
        runningProject: "Jaguar",
    },
    {
        id: "17",
        plantName: "Plant 17",
        runningProject: "Land Rover",
    },
    {
        id: "18",
        plantName: "Plant 18",
        runningProject: "Porsche",
    },
    {
        id: "19",
        plantName: "Plant 19",
        runningProject: "Tesla",
    },
    {
        id: "20",
        plantName: "Plant 20",
        runningProject: "Fiat",
    },
]
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>A list of your recent projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Plant Name</TableHead>
            <TableHead>Running Project</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.plantName}</TableCell>
              <TableCell>{data.runningProject}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  