import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Bubbly Baker',
  description: 'My amazing recipe app',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <header>
          <Link href={'/'}>
            <h1 className="text-3xl font-bold">The Bubbly Baker</h1>
          </Link>
        </header>
        {children}
        <footer>
          <p>Made with 💛</p>
        </footer>
      </body>
    </html>
  )
}
