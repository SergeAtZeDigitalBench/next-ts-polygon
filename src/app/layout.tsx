import { Quicksand, Montserrat } from 'next/font/google'
import classnames from 'classnames'

import MainHeaderBackground from '@/components/MainHeaderBackground'
import MainHeader from '@/components/MainHeader'
import './globals.css'

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
}

const quickSand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-quicksand',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className={classnames(quickSand.className, montserrat.className)}>
        <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
