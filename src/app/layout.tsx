import './globals.css'
import Navigation from '@/components/Navigation'

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
