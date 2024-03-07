import type { FormValues, IServerActionResponse } from '@/types'

import RegisterServerFormData from '@/components/RegisterServerFormData'
import { regitrationSchema } from '@/lib/schemas/registration'

const RegisterServerFormDataPage = async () => {
  const registerAction = async (
    data: FormData
  ): Promise<IServerActionResponse> => {
    'use server'

    const values = Object.fromEntries(data)

    const parsed = regitrationSchema.safeParse(values)

    if (parsed.success) {
      return { data: parsed.data, error: null }
    } else {
      return { data: null, error: parsed.error.flatten().fieldErrors }
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Register Server Action FormData
      </h1>
      <RegisterServerFormData onDataAction={registerAction} />
    </>
  )
}

export default RegisterServerFormDataPage
