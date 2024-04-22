import Navigation from '@/components/Navigation'
import '@/styles/globals.css'

export const metadata = {
  title: 'NextJS v.14 Code Polygon',
  description: 'Code polygon for latest Next.js v.14, features and patterns',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Navigation />
        </header>
        <main className="max-w-screen-xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
