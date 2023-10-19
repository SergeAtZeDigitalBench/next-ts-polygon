import { NextResponse } from 'next/server'

const OPEN_AI_API = 'http://localhost:3030'

export const POST = async (req: Request) => {
  const { subject } = await req.json()

  if (!subject) {
    return new Response(null, {
      status: 500,
      statusText: 'Body payload missing',
    })
  }

  try {
    const res = await fetch(`${OPEN_AI_API}/new-blog`, {
      method: 'POST',
      body: JSON.stringify({ subject }),
    })

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const response = await res.json()
    return NextResponse.json({ data: response })
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : 'Failed to create new blog'

    return new Response(null, {
      status: 500,
      statusText: msg,
    })
  }
}
