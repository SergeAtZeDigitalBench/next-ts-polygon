import { NextResponse } from 'next/server'
import Cors from 'micro-cors'
import { headers } from 'next/headers'

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

  console.log('Blog received from Open AI :>> ', body)

  return NextResponse.json({ data: 'ok' })
}
