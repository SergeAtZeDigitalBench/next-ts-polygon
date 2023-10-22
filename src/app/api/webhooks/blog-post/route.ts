import { NextResponse } from 'next/server'
import Cors from 'micro-cors'
import { revalidatePath } from 'next/cache'
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

  const [_blog, error] = await createBlogpost(body)

  if (!error) {
    revalidatePath('/blog-posts')
  }

  return NextResponse.json({ data: 'ok' })
}
