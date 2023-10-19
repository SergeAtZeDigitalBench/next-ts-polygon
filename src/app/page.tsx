import React from 'react'

import CreateBlogForm from '@/components/CreateBlogForm'
import BlogPostsList from '@/components/BlogPostsList'
import { fetchJson } from '@/lib/fetch'
import { IBlogpost } from '@/types'
import { TAGS } from '@/constants'

const Homepage = async () => {
  const [blogPosts, error] = await fetchJson<{ data: IBlogpost[] }>(
    'http://localhost:3000/api/blog-post',
    {
      next: { tags: [TAGS.BLOG_POSTS] },
    }
  )

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Blog posts</h1>
      <div className="min-h-[30px]">
        {error && (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        )}
      </div>
      <div className="max-w-[30vw] mx-auto">
        <CreateBlogForm />
      </div>
      <BlogPostsList blogPosts={blogPosts?.data || []} />
    </>
  )
}

export default Homepage
