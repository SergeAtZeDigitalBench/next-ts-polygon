'use client'

import { FormEvent, useState, useRef } from 'react'
import { postMockData } from '@/lib'

const postDataToApi = async (data: FormData) => {
  try {
    const username = data.get('username')
    const password = data.get('password')
    await postMockData({ username, password }, {})
    return { error: null }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'failed submit'
    return { error }
  }
}

interface IStatus {
  loading: boolean
  error: null | string
}
const INIT_STATUS: IStatus = { loading: false, error: null }

const UncontrolledForm = (): JSX.Element => {
  const [formStatus, setFormStatus] = useState<IStatus>(INIT_STATUS)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus({ ...INIT_STATUS, loading: true })
    const formData = new FormData(event.currentTarget)
    const { error } = await postDataToApi(formData)
    setFormStatus({
      ...INIT_STATUS,
      error,
    })
    formRef.current && formRef.current.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="max-w-xs mx-auto my-4 flex flex-col gap-2 justify-center items-center p-4 border-2 border-green-500 rounded"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="px-2 py-1 border rounded border-slate-500"
        disabled={formStatus.loading}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="px-2 py-1 border rounded border-slate-500"
        disabled={formStatus.loading}
      />

      <button
        type="submit"
        disabled={formStatus.loading}
        className="px-2 py-1 rounded bg-slate-200 border border-slate-500"
      >
        Send
      </button>

      <div className="min-h-[50px] my-2 ">
        {formStatus.error && (
          <p className=" text-red-600 font-semibold text-center">
            {formStatus.error}
          </p>
        )}

        {formStatus.loading && (
          <p className=" text-blue-600 font-semibold text-center">Loading...</p>
        )}
      </div>
    </form>
  )
}

export default UncontrolledForm
