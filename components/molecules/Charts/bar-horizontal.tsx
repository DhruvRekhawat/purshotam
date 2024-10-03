"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A horizontal bar chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

// Define the props interface
interface BarHorizontalProps {
  data: Array<{ [key: string]: string | number }>
  title: string
  description: string
  dataKey: string
  categoryKey: string
  trendPercentage?: number
  footerText?: string
}

export function BarHorizontal({
  data,
  title,
  description,
  dataKey,
  categoryKey,
  trendPercentage,
  footerText,
}: BarHorizontalProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey={dataKey} hide />
            <YAxis
              dataKey={categoryKey}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (typeof value === 'string') {
                  return value.length > 3 ? value.slice(0, 3) : value;
                }
                return value.toString();
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />

            <Bar dataKey={dataKey} fill={`var(--color-${dataKey})`} radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {(trendPercentage !== undefined || footerText) && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {trendPercentage !== undefined && (
            <div className="flex gap-2 font-medium leading-none">
              Trending {trendPercentage > 0 ? "up" : "down"} by {Math.abs(trendPercentage)}% this month{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
          )}
          {footerText && (
            <div className="leading-none text-muted-foreground">
              {footerText}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
