import { NextResponse } from 'next/server'
import Cors from 'micro-cors'
import { revalidateTag } from 'next/cache'

import { TAGS } from '@/constants'
import { createBlogpost } from '@/lib/api'

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
})

export const POST = async (req: Request) => {
  const body = await req.json()

  if (!body) {
    return new Response(null, {
      status: 500,
      statusText: 'Body payload missing',
    })
  }

  await createBlogpost(body)
  revalidateTag(TAGS.BLOG_POSTS)

  return NextResponse.json({ data: 'ok' })
}
