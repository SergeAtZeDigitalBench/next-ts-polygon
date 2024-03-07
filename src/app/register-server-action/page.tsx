import type { FormValues, IServerActionResponse } from '@/types'

import RegisterServerAction from '@/components/RegisterServerAction'
import { regitrationSchema } from '@/lib/schemas/registration'

const RegisterServerActionPage = async () => {
  const registerAction = async (
    data: FormValues
  ): Promise<IServerActionResponse> => {
    'use server'

    const parsed = regitrationSchema.safeParse(data)

    if (parsed.success) {
      return { data: parsed.data, error: null }
    } else {
      return { data: null, error: parsed.error.flatten().fieldErrors }
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Register Server Action
      </h1>
      <RegisterServerAction onDataAction={registerAction} />
    </>
  )
}

export default RegisterServerActionPage
