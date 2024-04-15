import { wait } from '@/lib'

const ArticlesPage = async () => {
  await wait(1200)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4 bg-yellow-300 p-2 rounded-lg">
        Articles
      </h1>
    </>
  )
}

export default ArticlesPage
