import type { IServerActionResponse, FormValuesZip } from '@/types'

import RegisterServerAsyncValidation from '@/components/RegisterServerAsyncValidation'
import { regitrationSchemaZipcode } from '@/lib/schemas/registration'

const RegisterZipcodeValidationPage = async () => {
  const registerAction = async (
    prevState: IServerActionResponse<FormValuesZip>,
    data?: FormData
  ): Promise<IServerActionResponse<FormValuesZip>> => {
    'use server'

    const values = Object.fromEntries(data || new FormData())

    const parsed = await regitrationSchemaZipcode.safeParseAsync(values)

    if (parsed.success) {
      return { data: parsed.data, error: null }
    } else {
      return { data: null, error: parsed.error.flatten().fieldErrors }
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Register server async validation
      </h1>
      <RegisterServerAsyncValidation onDataAction={registerAction} />
    </>
  )
}

export default RegisterZipcodeValidationPage
