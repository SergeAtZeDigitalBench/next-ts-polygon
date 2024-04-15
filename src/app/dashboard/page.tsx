import { wait } from '@/lib'

const DashboardPage = async () => {
  await wait(400)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">
        <span>Dashboard</span>
      </h1>
    </>
  )
}

export default DashboardPage
