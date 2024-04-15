import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  users: ReactNode
  articles: ReactNode
}

const DashboardLayout = ({ children, users, articles }: Props): JSX.Element => {
  return (
    <div className="max-w-3xl mx-auto my-8 bg-slate-200 rounded-lg p-2 min-h-[75vh] flex flex-col justify-around">
      {children}
      {users}
      {articles}
    </div>
  )
}

export default DashboardLayout
