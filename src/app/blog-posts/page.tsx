import { revalidatePath } from 'next/cache'

import { getBlogposts, formatBlogposts, deleteBlogpost } from '@/lib/api'
import { IServerActionResponse } from '@/types'

import SocketsMessage from '@/components/SocketsMessage'
import BlogPostCard from '@/components/BlogPostCard'
import AddBlogPost from '@/components/AddBlogPost'

const BlogPostsPage = async () => {
  const [blogPosts, error] = await getBlogposts()
  const formattedBlogposts = blogPosts ? formatBlogposts(blogPosts) : []

  const deleteServerAction = async (
    id: string
  ): Promise<IServerActionResponse> => {
    'use server'
    const [_, error] = await deleteBlogpost(id)
    if (!error) {
      revalidatePath('/blog-posts', 'page')
      return { message: 'ok' }
    } else {
      return { error: 'failed to update todo' }
    }
  }

  const addBlogPostActon = async (
    formData: FormData
  ): Promise<IServerActionResponse> => {
    'use server'

    try {
      const subject = formData.get('subject')
      if (!subject || typeof subject !== 'string') {
        throw new Error('Subject missing')
      }
      const url = process.env.OPEN_AI_URL + '/new-blog'
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ subject }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      const response = await res.json()

      return { message: 'ok' }
    } catch (err) {
      const msg: string =
        err instanceof Error ? err.message : (error as any).ToString()
      return { error: msg || 'failed to create blog' }
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Title</h1>
      <AddBlogPost addBlogPostActon={addBlogPostActon} />
      {error && (
        <p className="text-center font-bold text-red-600 my-4">{error}</p>
      )}
      {!error && formattedBlogposts.length === 0 && (
        <p className="text-center font-bold my-4"> 🤷‍♂️ no blog posts</p>
      )}
      <div className="grid grid-cols-3 gap-2">
        {formattedBlogposts.map((blogPost) => (
          <BlogPostCard
            key={blogPost.id}
            blogPost={blogPost}
            deleteBlogpostServerAction={deleteServerAction}
          />
        ))}
      </div>
      <SocketsMessage />
    </>
  )
}

export default BlogPostsPage
