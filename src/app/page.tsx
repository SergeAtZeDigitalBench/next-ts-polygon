import PageErrorMessage from '@/components/PageErrorMessage'
import PostCard from '@/components/PostCard'
import { getPostsMetadata } from '@/lib'

const Homepage = async () => {
  const [postsMetadata, error] = await getPostsMetadata()

  if (error || !postsMetadata) {
    return <PageErrorMessage error={error} />
  }
  return (
    <main>
      <div className="postsContainer">
        {postsMetadata.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}

export default Homepage
