'use server'

import { OPEN_AI_API } from '@/constants'
import { IServerActionResponse } from '@/types'

export const createBlogPost = async (
  formData: FormData
): Promise<IServerActionResponse> => {
  try {
    const subject = formData.get('subject')
    if (!subject) {
      throw new Error('Form data: subject value is missing')
    }

    console.log('posting { subject } :>> ', { subject })
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
