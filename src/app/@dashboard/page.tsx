import { IPageProps } from '@/types'
import { wait } from '@/lib'

const DashboardPage = async ({ params, searchParams }: IPageProps) => {
  await wait(5000)

  return (
    <div className="min-h-[30vh] bg-green-500 p-4 rounded-lg flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold underline text-center">
        Dashboard page
      </h2>
    </div>
  )
}

export default DashboardPage
