import { Inter } from 'next/font/google'
import { cn } from '@nextui-org/react'

import NextUIProvider from '@/providers/NextUIProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS v.14 Frontend Masters Course',
  description: 'Code polygon for latest Next.js v.14, features and patterns',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.className} dark text-foreground bg-background h-screen w-screen`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
