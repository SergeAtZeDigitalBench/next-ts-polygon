import type { Post } from '@/types'

import { JSON_PH_BASE_URL } from '@/constants'
import List from '@/components/List'
import { fetchData } from '@/libs'

export const LoadPosts = () => (
  <p className="text-center my-4">Loading posts...</p>
)

interface Props {
  maxItems?: number
  delay?: number
  isError?: boolean
}

const PostsList = async ({ maxItems = -1, delay = 1000, isError }: Props) => {
  const [posts, fetchError] = await fetchData<Post[]>({
    url: `${JSON_PH_BASE_URL}/posts?_limit=${maxItems}&_delay=${delay}`,
    isError,
    errorMessage: 'Failed to fetch posts',
  })

  if (fetchError || !posts) {
    return <p className=" text-red-700 text-center my-4">{fetchError}</p>
  }

  return (
    <List
      data={posts}
      getKey={(post) => post.id}
      liClassName="row-span-2"
      renderItem={(post) => (
        <>
          <h4 className="text-lg font-semibold my-2 capitalize">
            {post.title}
          </h4>
          <p className=" text-sm">{post.body}</p>
        </>
      )}
    />
  )
}

export default PostsList
