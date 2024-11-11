"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useStore } from "@/stores/layout"
import { format, subDays } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { DateRange } from "react-day-picker"

export default function DateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const {setStartDate,setEndDate} = useStore()

  const presets = [
    {
      label: "Yesterday",
      dates: { from: subDays(new Date(), 1), to: new Date() },
    },
    {
      label: "Last 7 days",
      dates: { from: subDays(new Date(), 7), to: new Date() },
    },
    {
      label: "Last 14 days",
      dates: { from: subDays(new Date(), 14), to: new Date() },
    },
    {
      label: "Last 30 days",
      dates: { from: subDays(new Date(), 30), to: new Date() },
    },
    {
      label: "Last 90 days",
      dates: { from: subDays(new Date(), 90), to: new Date() },
    },
  ]

  const handleDateChange = (dates: React.SetStateAction<DateRange | undefined>) => {
    if (typeof dates === 'function') {
      setDate(dates);
    } else {
      setDate(dates);
      if (dates?.from && dates?.to) {
          const startDate = format(dates.from, 'yyyy-MM-dd'); // Format start date
          const endDate = format(dates.to, 'yyyy-MM-dd'); // Format end date
          console.log(startDate,endDate)
          setStartDate(startDate)
          setEndDate(endDate)

    }
  }

  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex flex-row-reverse gap-2" align="start">
          <div className="flex flex-col space-y-2 p-2">
            <p className="text-sm">Date Presets</p>
            {presets.map((preset) => (
              <Button
                key={preset.label}
                onClick={() => handleDateChange(preset.dates)}
                variant="outline"
                className="justify-start font-normal"
              >
                {preset.label}
              </Button>
            ))}
          </div>
          <div className="border-t border-border p-3">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(selectedDate) => handleDateChange(selectedDate)}
              numberOfMonths={2}
              disabled={(date) => date > new Date()}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
