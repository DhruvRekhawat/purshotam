import { PieLabel } from "@/components/molecules/Charts/pie-label"
import { BarMultiple } from "@/components/molecules/Charts/bar-multiple"
import { BarHorizontal } from "@/components/molecules/Charts/bar-horizontal"

const ChartView = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-4 p-6 mb-6 border-b-2 border-gray-200">
      <PieLabel></PieLabel>
      <BarHorizontal data={[]} title={""} description={""} dataKey={""} categoryKey={""}></BarHorizontal>
    </div>
    <div>
      <BarMultiple />
    </div>
    </>
  )
}

export default ChartView