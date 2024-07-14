import { db } from '@/lib/db'

type PostSummary = {
  id: string
  createdAt: string | null
  title: string
  content: string
  status: 'draft' | 'published' | 'hidden'
  user: {
    username: string
  }
}

const getPosts = async (): Promise<[PostSummary[], null] | [null, string]> => {
  try {
    const posts = await db.query.posts.findMany({
      with: {
        user: {
          columns: {
            username: true,
            id: false,
            email: false,
            isEmailConfirmed: false,
            password: false,
            createdAt: false,
          },
        },
      },
      columns: {
        userId: false,
      },
    })

    return [posts, null]
  } catch (error) {
    console.warn(error)
    return [null, 'Failed to query the posts']
  }
}

const Homepage = async () => {
  const [posts, dbError] = await getPosts()

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>

      {dbError && (
        <p className="my-4 text-red-700 font-semibold text-center">{dbError}</p>
      )}

      <ul className="grid gap-4 grid-cols-gallery grid-rows-[repeat(4,_auto)] px-2">
        {posts &&
          posts.map(({ id, title, content, createdAt, user }) => {
            return (
              <li
                key={id}
                className="grid grid-rows-[subgrid] gap-2 rounded-xl p-2 bg-slate-200 row-span-4"
              >
                <h3 className="text-xl font-semibold text-center">{title}</h3>
                <small className="text-xs">Created: {createdAt}</small>
                <small className="text-xs font-semibold">
                  By: {user.username}
                </small>
                <p>{content}</p>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Homepage
