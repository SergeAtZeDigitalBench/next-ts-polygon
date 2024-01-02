import { ReactNode } from 'react'
import type { Metadata } from 'next'

import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

interface IProps {
  children: ReactNode
  team: ReactNode
  dashboard: ReactNode
}

const RootLayout = ({ children, team, dashboard }: IProps) => {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Navigation />
        </header>
        <main className="container mx-auto">
          {children}
          <div className="grid grid-cols-2 gap-2 mt-2">
            {team}
            {dashboard}
          </div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
