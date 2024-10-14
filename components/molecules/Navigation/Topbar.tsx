'use client'
import AnimatedTabs from '@/components/ui/animated-underline-tabs'
import { Badge } from '@/components/ui/badge'
import { DatePickerWithRange } from '@/components/ui/date-range-picker'
import { usePathname } from 'next/navigation'
import { LuFilter } from 'react-icons/lu'

const Topbar = () => {
    // const [date, setDate] = useState(new Date());
    const path = usePathname()
    const breadcrumb = path?.split('/').slice(1).map((item) => item.toUpperCase()).join(' ')
  return (
    <>
    <div className="h-12 w-full border-b border-slate-300 flex justify-between items-center p-4 bg-white">
       <div className='flex items-center gap-2'>
        <div className='bg-purple-500 w-4 h-4 rounded-sm'></div>
        <p className='text-sm font-medium'>{breadcrumb}</p>
       </div>
       <div>
<div className="relative">
  <input
    type="text"
    placeholder="Search..."
    className="pl-8 pr-2 py-1 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
  <svg
    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</div>
       </div>
    </div>
    <div className='h-12 w-full border-b border-slate-300 flex justify-between items-center p-4 bg-white'>
    <div className='flex justify-between w-full items-center gap-2'>
       <AnimatedTabs />
       <div className="flex items-center gap-2">
        <DatePickerWithRange></DatePickerWithRange>
        <Badge variant="outline" className="flex items-center">Filter<LuFilter className="ml-2" /></Badge>
        </div>
       </div>
    </div>
    </>
  )
}

export default Topbar