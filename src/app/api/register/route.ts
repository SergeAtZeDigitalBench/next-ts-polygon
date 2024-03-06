import { NextResponse, NextRequest } from 'next/server'

import { regitrationSchema } from '@/lib/schemas/registration'

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  const parsed = regitrationSchema.safeParse(body)

  if (parsed.success) {
    return NextResponse.json({ data: parsed.data }, { status: 200 })
  } else {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 401 }
    )
  }
}
