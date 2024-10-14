import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
import React from 'react'
import { LuInfo } from 'react-icons/lu'
import Link from 'next/link'

const InfoCard = ({
  title,
  value,
  badge,
  info,
  icon,
  link
}: {
  title: string,
  value: number,
  badge?: string,
  info?: string,
  icon?: React.ReactNode,
  link: string
}) => {
  return (
    
      <Card className='hover:bg-slate-100 hover:cursor-pointer'>
        <CardHeader className='flex flex-row justify-between items-center space-y-0 pb-4'>
          <div className='flex items-center gap-2'>
            {icon && (
              <div className='p-1 rounded-sm bg-slate-300'>
                {icon}
              </div>
            )}
            <CardTitle className='text-sm'>
              {title}
            </CardTitle>
          </div>
          {info && (
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="ghost" size="icon"> <LuInfo className='w-4 h-4' /></Button>
              </HoverCardTrigger>
              <HoverCardContent>
                {info}
              </HoverCardContent>
            </HoverCard>
          )}
        </CardHeader>
        <Link href={link}>
        <CardContent className='flex flex-row justify-start gap-4 items-center px-8'>
          <h2 className='text-2xl font-semibold'>{value}</h2>
          {badge && (
            <Badge variant="outline" className='text-green-500 bg-green-50'>{badge}</Badge>
          )}
        </CardContent>
        </Link>
      </Card>
  )
}

export default InfoCard