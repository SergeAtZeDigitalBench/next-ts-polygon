import { wait } from '@/lib'

const UsersPage = async () => {
  await wait(800)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4 bg-cyan-300 p-2 rounded-lg">
        Users
      </h1>
    </>
  )
}

export default UsersPage
