import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
import React from 'react'
import { LuBox, LuInfo } from 'react-icons/lu'

const InfoCard = () => {
  return (
    <Card>
            <CardHeader className='flex flex-row justify-between items-center space-y-0 pb-4'>
                <div className='flex items-center gap-2'>
                <div className='p-1 rounded-sm bg-slate-300'>
                    <LuBox className='w-4 h-4' />
                </div>
                <CardTitle>Inventory</CardTitle>
                </div>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button variant="ghost" size="icon"> <LuInfo className='w-4 h-4' /></Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        This is a hover card. Use it for additional information.
  </HoverCardContent>
</HoverCard>

            </CardHeader>
            <CardContent className='flex flex-row justify-start gap-4 items-center px-8'>
                <h2 className='text-2xl sm:text-4xl font-bold'>100</h2>
                <Badge variant="outline" className='text-green-500 bg-green-50'>100</Badge>
            </CardContent>
        </Card>
  )
}

export default InfoCard