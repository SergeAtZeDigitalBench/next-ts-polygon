import { NextResponse, NextRequest } from 'next/server'

import { regitrationSchema } from '@/lib/schemas/registration'

export const POST = async (req: NextRequest) => {
  const bodyFormData = await req.formData()
  const body = Object.fromEntries(bodyFormData)

  const parsed = regitrationSchema.safeParse(body)

  if (parsed.success) {
    return NextResponse.json({ data: parsed.data }, { status: 200 })
  } else {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }
}
