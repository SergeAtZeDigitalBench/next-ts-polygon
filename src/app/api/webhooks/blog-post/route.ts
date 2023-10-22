import { NextResponse } from 'next/server'
import Cors from 'micro-cors'
import { revalidatePath } from 'next/cache'

import { notifySocketServer } from '@/lib/fetch'
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

  const [_blog, errorCreateBlogpost] = await createBlogpost(body)

  if (errorCreateBlogpost) {
    return new Response(null, {
      status: 500,
      statusText: 'Failed create the blogpost',
    })
  }

  revalidatePath('/blog-posts')

  const [res, errorSocketServer] = await notifySocketServer('/blog-posts')

  if (errorSocketServer) {
    return new Response(null, {
      status: 500,
      statusText: 'Failed notify the sockets server',
    })
  }

  return NextResponse.json({ data: res?.message || 'ok' })
}
