import type { IServerActionResponse } from '@/types'

import RegisterServerFormDataNoJs from '@/components/RegisterServerFormDataNoJs'
import { regitrationSchema } from '@/lib/schemas/registration'

const wait = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

const RegisterServerFormDataNoJsPage = async () => {
  const registerAction = async (
    prevState: IServerActionResponse,
    data?: FormData
  ): Promise<IServerActionResponse> => {
    'use server'

    const values = Object.fromEntries(data || new FormData())

    const parsed = regitrationSchema.safeParse(values)

    await wait()

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
        <br />
        <small className=" text-sm text-red-700">
          {' '}
          with possibly JS disabled
        </small>
      </h1>

      <RegisterServerFormDataNoJs onDataAction={registerAction} />
    </>
  )
}

export default RegisterServerFormDataNoJsPage
