import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

interface IProps {
  children: ReactNode
  modal: ReactNode
}

const RootLayout = ({ children, modal }: IProps) => {
  return (
    <html lang="en">
      <head />
      <body>
        <header></header>
        <main className="container mx-auto">
          {children}
          {modal}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
