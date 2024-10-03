import { columns, T } from '@/components/molecules/Data-Table-Columns/summary-column'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import React from 'react'

const data: T[] = [
  {
    id: "1",
    projectName: "Solar Panel Installation",
    owner: "John Doe",
    startDate: "2023-01-15",
    dueDate: "2023-06-30",
    percentComplete: 75,
    status: "Ongoing"
  },
  {
    id: "2",
    projectName: "Wind Turbine Maintenance",
    owner: "Jane Smith",
    startDate: "2023-02-01",
    dueDate: "2023-05-31",
    percentComplete: 90,
    status: "Ongoing"
  },
  {
    id: "3",
    projectName: "Hydroelectric Dam Upgrade",
    owner: "Bob Johnson",
    startDate: "2023-03-10",
    dueDate: "2023-09-30",
    percentComplete: 50,
    status: "Ongoing"
  },
  {
    id: "4",
    projectName: "Geothermal Plant Construction",
    owner: "Alice Brown",
    startDate: "2023-01-01",
    dueDate: "2023-12-31",
    percentComplete: 30,
    status: "Ongoing"
  },
  {
    id: "5",
    projectName: "Biomass Facility Expansion",
    owner: "Charlie Wilson",
    startDate: "2023-04-15",
    dueDate: "2023-10-15",
    percentComplete: 60,
    status: "Ongoing"
  },
  {
    id: "6",
    projectName: "Tidal Energy Research",
    owner: "Diana Lee",
    startDate: "2023-02-28",
    dueDate: "2023-08-31",
    percentComplete: 40,
    status: "Ongoing"
  },
  {
    id: "7",
    projectName: "Solar Farm Optimization",
    owner: "Edward Green",
    startDate: "2023-03-01",
    dueDate: "2023-06-30",
    percentComplete: 80,
    status: "Ongoing"
  },
  {
    id: "8",
    projectName: "Wind Farm Expansion",
    owner: "Fiona White",
    startDate: "2023-05-01",
    dueDate: "2023-11-30",
    percentComplete: 20,
    status: "Ongoing"
  },
  {
    id: "9",
    projectName: "Energy Storage Implementation",
    owner: "George Black",
    startDate: "2023-01-15",
    dueDate: "2023-07-15",
    percentComplete: 70,
    status: "Ongoing"
  },
  {
    id: "10",
    projectName: "Smart Grid Integration",
    owner: "Hannah Gray",
    startDate: "2023-04-01",
    dueDate: "2023-10-31",
    percentComplete: 45,
    status: "Ongoing"
  },
  {
    id: "11",
    projectName: "Offshore Wind Project",
    owner: "Ian Blue",
    startDate: "2023-02-15",
    dueDate: "2023-12-15",
    percentComplete: 25,
    status: "Ongoing"
  },
  {
    id: "12",
    projectName: "Solar Thermal Power Plant",
    owner: "Julia Red",
    startDate: "2023-03-20",
    dueDate: "2023-09-20",
    percentComplete: 55,
    status: "Ongoing"
  },
  {
    id: "13",
    projectName: "Biofuel Production Facility",
    owner: "Kevin Yellow",
    startDate: "2023-01-10",
    dueDate: "2023-08-10",
    percentComplete: 65,
    status: "Ongoing"
  },
  {
    id: "14",
    projectName: "Hydrogen Fuel Cell Research",
    owner: "Laura Purple",
    startDate: "2023-04-05",
    dueDate: "2023-11-05",
    percentComplete: 35,
    status: "Ongoing"
  },
  {
    id: "15",
    projectName: "Waste-to-Energy Plant",
    owner: "Mike Orange",
    startDate: "2023-02-20",
    dueDate: "2023-10-20",
    percentComplete: 50,
    status: "Ongoing"
  },
  {
    id: "16",
    projectName: "Geothermal Exploration",
    owner: "Nancy Pink",
    startDate: "2023-05-10",
    dueDate: "2023-12-10",
    percentComplete: 15,
    status: "Ongoing"
  },
  {
    id: "17",
    projectName: "Solar Panel Recycling",
    owner: "Oscar Brown",
    startDate: "2023-03-15",
    dueDate: "2023-07-15",
    percentComplete: 85,
    status: "Ongoing"
  },
  {
    id: "18",
    projectName: "Wind Turbine Blade Design",
    owner: "Patricia Green",
    startDate: "2023-01-05",
    dueDate: "2023-06-05",
    percentComplete: 95,
    status: "Ongoing"
  },
  {
    id: "19",
    projectName: "Energy Efficiency Audit",
    owner: "Quincy Gray",
    startDate: "2023-04-20",
    dueDate: "2023-08-20",
    percentComplete: 75,
    status: "Ongoing"
  },
  {
    id: "20",
    projectName: "Microgrid Implementation",
    owner: "Rachel Teal",
    startDate: "2023-02-10",
    dueDate: "2023-09-10",
    percentComplete: 40,
    status: "Ongoing"
  }
]

const TableView = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plant Wise Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} filter="projectName" />
      </CardContent>
    </Card>
  )
}

export default TableView