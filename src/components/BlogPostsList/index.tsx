import React from 'react'

import { IBlogpost } from '@/types'

interface IProps {
  blogPosts: IBlogpost[]
}

const BlogPostsList = ({ blogPosts }: IProps): JSX.Element => {
  if (blogPosts.length === 0) {
    return <p className="text-center font-semibold my-6">No blog posts</p>
  }

  return (
    <div className="grid grid-cols-gallery gap-2">
      {blogPosts.map(({ id, title, body }) => {
        return (
          <div
            key={id}
            className="flex justify-center items-center relative h-64 rounded-xl"
          >
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BlogPostsList
