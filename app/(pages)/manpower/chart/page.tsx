import { Donut } from "@/components/molecules/Charts/donut"
import { BarMultiple } from "@/components/molecules/Charts/bar-multiple"
import { DonutTitle } from "@/components/molecules/Charts/donut-title"
import { BarHorizontal } from "@/components/molecules/Charts/bar-horizontal"
import { BarSingle } from "@/components/molecules/Charts/bar-single"

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