import { NextResponse, NextRequest } from 'next/server'

import {
  regitrationSchema,
  regitrationSchema2,
} from '@/lib/schemas/registration'

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  const parsed = regitrationSchema2.safeParse(body)

  if (parsed.success) {
    return NextResponse.json({ data: parsed.data }, { status: 200 })
  } else {
    return NextResponse.json({ error: parsed.error }, { status: 401 })
  }
}
