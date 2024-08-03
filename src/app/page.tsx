import { Suspense } from 'react'

import PostsList, { LoadPosts } from '@/components/PostsList'
import UsersList, { LoadUsers } from '@/components/UsersList'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">
        NEXT V.14 POLYGON
      </h1>

      <Suspense fallback={<LoadPosts />}>
        <PostsList maxItems={4} />
      </Suspense>

      <hr className="my-8" />

      <Suspense fallback={<LoadUsers />}>
        <UsersList maxItems={4} delay={1500} />
      </Suspense>
    </>
  )
}

export default Homepage
