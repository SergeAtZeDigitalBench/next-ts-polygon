import type { PageProps } from '@/types'

import { getPostsMetadata, getPostMetadata, getPostContent } from '@/lib'
import PageErrorMessage from '@/components/PageErrorMessage'
import Markdown from 'markdown-to-jsx'

export async function generateStaticParams() {
  const [posts] = await getPostsMetadata()

  if (!posts) {
    return []
  }
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageProps<{ slug: string }>) {
  const [metadata] = await getPostMetadata(params.slug)

  if (!metadata) {
    return {}
  }

  const { title, bio } = metadata

  return {
    title,
    description: bio,
  }
}

const RecipePage = async ({ params }: PageProps<{ slug: string }>) => {
  const [recipe, error] = await getPostContent(params.slug)

  if (error || !recipe) {
    return <PageErrorMessage error={error} />
  }

  return (
    <main>
      <article>
        <Markdown>{recipe.content}</Markdown>
      </article>
    </main>
  )
}

export default RecipePage
