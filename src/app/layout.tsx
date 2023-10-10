import './globals.css'
import Navigation from '@/components/Navigation'

type Props = {
  children: React.ReactNode
  users: React.ReactNode
  images: React.ReactNode
}

export default function RootLayout({ children, users, images }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Navigation />
        </header>
        <main className="max-w-screen-xl mx-auto">
          <div className=" grid grid-cols-2">
            <div>{users}</div>
            <div>{images}</div>
          </div>

          {children}
        </main>
      </body>
    </html>
  )
}
