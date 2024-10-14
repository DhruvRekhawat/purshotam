import { BarMultiple } from "@/components/molecules/Charts/bar-multiple"
import { Donut } from "@/components/molecules/Charts/donut"

const ChartView = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-4 p-6 mb-6 border-b-2 border-gray-200">
      <Donut />
      <Donut />
      <Donut />
    </div>
    <div>
      <BarMultiple />
    </div>
    </>
  )
}

export default ChartView