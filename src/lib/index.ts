import matter, { type GrayMatterFile } from 'gray-matter'
import fs from 'fs/promises'
import path from 'path'

import type { PostFileMetadata, PostFileSummary } from '@/types'

const getErrorMessage = (defaultMessage: string, error: unknown) => {
  return error instanceof Error ? error.message : defaultMessage
}

export const getPostsMetadata = async (): Promise<
  [PostFileSummary[], null] | [null, string]
> => {
  try {
    const files = await fs.readdir(path.join(process.cwd(), 'src', 'recipes'))
    const mdPosts = files.filter((file) => file.endsWith('.md'))
    const postsDataPromises = mdPosts.map(async (fileName) => {
      const fileData = await fs.readFile(
        path.join(process.cwd(), 'src', 'recipes', fileName),
        { encoding: 'utf-8' }
      )
      const PostFileMetadata = matter(fileData)
      const {
        title,
        prep_time,
        cook_time,
        description: bio,
      } = PostFileMetadata.data as PostFileMetadata

      return {
        title,
        prep_time,
        cook_time,
        bio,
        slug: fileName.replace('.md', ''),
      }
    })

    const postsMetadataList = await Promise.all(postsDataPromises)
    return [postsMetadataList, null]
  } catch (error) {
    return [null, getErrorMessage('Failed to fetch metadata', error)]
  }
}

export const getPostMetadata = async (
  slug: string
): Promise<[PostFileSummary, null] | [null, string]> => {
  try {
    const fileData = await fs.readFile(
      path.join(process.cwd(), 'src', 'recipes', `${slug}.md`),
      { encoding: 'utf-8' }
    )
    const PostFileMetadata = matter(fileData)

    const {
      title,
      prep_time,
      cook_time,
      description: bio,
    } = PostFileMetadata.data as PostFileMetadata

    const metadata = {
      title,
      prep_time,
      cook_time,
      bio,
      slug,
    }

    return [metadata, null]
  } catch (error) {
    return [null, getErrorMessage('Failed to fetch metadata', error)]
  }
}

export const getPostContent = async (
  slug: string
): Promise<[GrayMatterFile<string>, null] | [null, string]> => {
  try {
    const fileData = await fs.readFile(
      path.join(process.cwd(), 'src', 'recipes', `${slug}.md`),
      { encoding: 'utf-8' }
    )
    const PostFileMetadata = matter(fileData)

    return [PostFileMetadata, null]
  } catch (error) {
    return [null, getErrorMessage('Failed to fetch post content', error)]
  }
}
