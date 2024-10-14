import { BarMultiple } from "@/components/molecules/Charts/bar-multiple"
import { BarSingle } from "@/components/molecules/Charts/bar-single"
import { DonutTitle } from "@/components/molecules/Charts/donut-title"

const ChartView = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-4 p-6 mb-6 border-b-2 border-gray-200">
      <DonutTitle></DonutTitle>
      <BarSingle/>
    </div>
    <div>
    <BarMultiple/>
     
    </div>
    </>
  )
}

export default ChartView