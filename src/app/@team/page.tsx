import { IPageProps } from '@/types'
import { wait } from '@/lib'

const TeamPage = async ({ params, searchParams }: IPageProps) => {
  await wait(3000)
  return (
    <div className="min-h-[30vh] bg-blue-500 p-4 rounded-lg flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold underline text-center">Team page</h2>
    </div>
  )
}

export default TeamPage
