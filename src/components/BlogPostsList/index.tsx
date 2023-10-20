import React from 'react'

import { IBlogpost } from '@/types'
import { deleteBlogpostServerAction } from '@/lib/serverActions'

import DeleteButton from './components/DeleteButton'

interface IProps {
  blogPosts: IBlogpost[]
}

const BlogPostsList = ({ blogPosts }: IProps): JSX.Element => {
  if (blogPosts.length === 0) {
    return <p className="text-center font-semibold my-6">No blog posts</p>
  }

  return (
    <div className="grid grid-cols-gallery gap-2 p-2">
      {blogPosts.map(({ id, title, body }) => {
        return (
          <div
            key={id}
            className="flex flex-col justify-center relative h-64 rounded-xl bg-slate-200 p-2"
          >
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p>{body}</p>
            <DeleteButton
              handleDeleteAction={async () => {
                'use server'
                return await deleteBlogpostServerAction(id)
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default BlogPostsList
