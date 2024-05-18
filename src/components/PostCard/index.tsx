import Link from 'next/link'
import React from 'react'

import { PostFileSummary } from '@/types'

interface IProps {
  post: PostFileSummary
}

const PostCard = ({ post }: IProps): JSX.Element => {
  return (
    <Link href={`/recipes/${post.slug}`}>
      <div className="postCard">
        <h3 className="font-bold text-xl">{post.title}</h3>
        <p>{post.bio}</p>
        <div className="statsContainer">
          <div className="text-sm">
            <h5 className="font-semibold">Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div className="text-sm">
            <h5 className="font-semibold">Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
