import { DataTable } from "@/components/ui/data-table"
import InfoCard from "@/components/ui/info-card"
import { columns,Payment} from "@/components/molecules/Data-Table-Columns/mis-stock-colomns"


const InventoryTableView = () => {

    const data:Payment[] = [{
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      }]

  return (
    <>
    <div className='grid grid-cols-3 gap-4'>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
    </div>
    <DataTable columns={columns} data={data} />
    </>
  )
}

export default InventoryTableView