'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { fetchJson } from '@/lib/fetch'
import { useAuthContext } from '@/context/AuthContext'
interface IFormValues {
  email: string
  password: string
}

const isFormValid = (values: IFormValues) => {
  const isAnyEmpty = Object.values(values).some((value) => value.length === 0)

  return !isAnyEmpty
}

const initState: IFormValues = {
  email: '',
  password: '',
} as const

const LoginForm = (): JSX.Element => {
  const router = useRouter()
  const { setUser } = useAuthContext()
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formFields, setFormFields] = useState<IFormValues>({ ...initState })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setFormFields((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isFormValid(formFields)) {
      setError('Form invalid')
      return
    }

    setIsLoading(true)
    setError(null)

    const url = `${process.env.NEXT_PUBLIC_AUTH_SERVER}/auth/login`
    const [res, err] = await fetchJson<{
      data: { id: string; email: string; name: string }
    }>(url, {
      method: 'POST',
      body: JSON.stringify(formFields),
    })

    setIsLoading(false)
    setError(err)

    if (res?.data) {
      setUser(res.data)
      router.push('/')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="formLogin"
      className="w-[350px] p-2 border-2 border-green-700 rounded"
    >
      <fieldset className="flex flex-col gap-2 ">
        <label htmlFor="loginEmail" className="text-xs">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          autoComplete="username"
          required
          id="loginEmail"
          value={formFields.email}
          onChange={handleChange}
          className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
        />
        <label htmlFor="loginPassword" className="text-xs">
          Password
        </label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Your password"
          required
          id="loginPassword"
          value={formFields.password}
          onChange={handleChange}
          className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
        />
      </fieldset>
      <div className="my-2">
        <button
          className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 border-2 border-green-700 w-full capitalize"
          type="submit"
          disabled={isLoading}
        >
          continue
        </button>
      </div>

      <div className="min-h-[30px]">
        {error && (
          <p className="text-center font-semibold text-red-600">{error}</p>
        )}
        {isLoading && (
          <p className="text-center font-semibold text-green-600">loading...</p>
        )}
      </div>
    </form>
  )
}

export default LoginForm
