import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  return NextResponse.json({ message: 'Hello world!' })
}

export const POST = async (req: Request) => {
  const body = await req.json()

  if (!body) {
    return new Response(null, {
      status: 500,
      statusText: 'Body payload missing',
    })
  }

  return NextResponse.json({ data: body })
}
