'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import Shell from '@/components/Shell'

type Props = {
  children: React.ReactNode
  rsvps: React.ReactNode
  events: React.ReactNode
}

const DashboardLayout = ({ children, rsvps, events }: Props): JSX.Element => {
  const pathname = usePathname()

  return (
    <Shell>
      {pathname === '/dashboard' ? (
        <div className="flex w-full h-screen">
          <div className="w-1/2 border-r border-default-50">{rsvps}</div>
          <div className="w-1/2 flex flex-col">
            <div className="border-b border-default-50 w-full h-1/2">
              {events}
            </div>
            <div className="w-full h-1/2">{children}</div>
          </div>
        </div>
      ) : (
        <div className="w-full h-1/2">{children}</div>
      )}
    </Shell>
  )
}

export default DashboardLayout
