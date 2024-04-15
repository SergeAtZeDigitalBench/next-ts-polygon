import Link from 'next/link'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  users: ReactNode
  articles: ReactNode
}

const DashboardLayout = ({ children, users, articles }: Props): JSX.Element => {
  return (
    <div className="max-w-3xl mx-auto">
      <nav className="flex justify-center gap-2">
        <Link
          href="/dashboard"
          className="py-1 px-2 rounded bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white text-sm"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/settings"
          className="py-1 px-2  rounded bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white text-sm"
        >
          Settings
        </Link>
      </nav>
      <div className="my-8 bg-slate-200 rounded-lg p-2 min-h-[75vh] flex flex-col justify-around">
        {children}
        {users}
        {articles}
      </div>
    </div>
  )
}

export default DashboardLayout
