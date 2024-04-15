import { notFound } from 'next/navigation'

import { getPostById } from '@/lib'

import type { PageProps } from '@/types'

const PostPage = async ({ params }: PageProps<{ postId: string }>) => {
  const [post] = await getPostById(params.postId)

  if (!post) {
    return notFound()
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-8">
        {post.title}
      </h1>
      <p className="text-center">{post.body}</p>
    </>
  )
}

export default PostPage
