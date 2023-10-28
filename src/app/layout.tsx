import { AuthContextProvider } from '@/context/AuthContext'
import Navigation from '@/components/Navigation'
import './globals.css'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthContextProvider>
          <header>
            <Navigation />
          </header>
          <main className="max-w-screen-xl mx-auto">{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  )
}
