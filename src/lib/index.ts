import { Post } from '@/types'

export const wait = (timeout: number, error?: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error(error))
      } else {
        resolve(null)
      }
    }, timeout)
  })

export const getErrorMessage = (
  error: unknown,
  defaultMesssage?: string
): string => {
  const messsage =
    error instanceof Error
      ? error.message
      : defaultMesssage || (error as any).toString()

  return messsage
}

const isEmpty = (obj: Record<string, any>) => {
  return Object.keys(obj).length === 0
}

export const getPosts = async (): Promise<
  [Pick<Post, 'id' | 'title'>[], null] | [null, string]
> => {
  try {
    const res = await fetch(`${process.env.JSON_PLACEHOLDER_API}/posts`)

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const posts = (await res.json()) as Post[]

    const postsList = posts.map(({ id, title }) => ({
      id,
      title,
    }))

    return [postsList, null]
  } catch (error) {
    return [null, getErrorMessage(error, 'Failed fetch posts')]
  }
}

export const getPostById = async (
  id: string
): Promise<[Post, null] | [null, string]> => {
  try {
    const res = await fetch(`${process.env.JSON_PLACEHOLDER_API}/posts/${id}`)

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const post = (await res.json()) as Post

    if (isEmpty(post)) {
      throw new Error(`Post "${id}" not found`)
    }

    return [post, null]
  } catch (error) {
    return [null, getErrorMessage(error, `Failed fetch post by id: ${id}`)]
  }
}
