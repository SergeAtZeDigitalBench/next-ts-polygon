'use server'

import { revalidateTag } from 'next/cache'

import { OPEN_AI_API, TAGS } from '@/constants'
import { IServerActionResponse } from '@/types'
import { deleteBlogpost } from '@/lib/api'

export const createBlogPost = async (
  formData: FormData
): Promise<IServerActionResponse> => {
  try {
    const subject = formData.get('subject')
    if (!subject) {
      throw new Error('Form data: subject value is missing')
    }

    const res = await fetch(`${OPEN_AI_API}/new-blog`, {
      method: 'POST',
      body: JSON.stringify({ subject }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const { status: message } = await res.json()

    return { message }
  } catch (err) {
    const error =
      err instanceof Error ? err.message : 'Failed to create new blogpost'
    return { error }
  }
}

export const deleteBlogpostServerAction = async (
  id: string
): Promise<IServerActionResponse> => {
  try {
    await deleteBlogpost(id)
    revalidateTag(TAGS.BLOG_POSTS)
    return { message: 'ok' }
  } catch (err) {
    const error =
      err instanceof Error ? err.message : 'Failed to create new blogpost'
    return { error }
  }
}
