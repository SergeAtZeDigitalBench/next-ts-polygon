'use client'

import { useServerAction } from '@/lib/hooks/useServerAction'
import { IBlogpost, IServerActionResponse } from '@/types'

interface IProps {
  blogPost: IBlogpost
  deleteBlogpostServerAction: (id: string) => Promise<IServerActionResponse>
}

const BlogPostCard = ({
  blogPost,
  deleteBlogpostServerAction,
}: IProps): JSX.Element => {
  const [deleteState, handleDelete] = useServerAction({
    serverAction: deleteBlogpostServerAction,
  })

  return (
    <div className="p-4 rounded bg-slate-200 flex flex-col justify-center items-center gap-2 ">
      <h4 className="my-2 text-xl font-semibold ml-4">{blogPost.title}</h4>
      <p className="w-full px-2 py-1">{blogPost.body}</p>
      <button
        type="button"
        className="px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white font-semibold w-full"
        onClick={() => handleDelete(blogPost.id)}
      >
        delete
      </button>
    </div>
  )
}

export default BlogPostCard
