'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import ToggleShowIconButton from '@/components/ToggleShowIconButton'
import { useAuthContext } from '@/context/AuthContext'
import { ILoginInput } from '@/types'

const initState: ILoginInput = {
  email: '',
  password: '',
} as const

const LoginForm = (): JSX.Element => {
  const router = useRouter()
  const { login, isLoading, error } = useAuthContext()
  const [formFields, setFormFields] = useState<ILoginInput>({ ...initState })
  const [isPassword, setIsPassword] = useState<boolean>(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setFormFields((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login(formFields, () => router.push('/'))
  }

  const toggleShowpassword = () => setIsPassword((current) => !current)

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
          // the full list of autocomplete attributes values: https://www.w3.org/TR/WCAG21/#input-purposes
          // the `autoComplete` attribute helps the browser autocomplete API, so if the username is saved it will paste it in if the user agrees
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
        <div className="relative">
          <input
            type={isPassword ? 'password' : 'text'}
            name="password"
            // the `autoComplete` attribute helps the browser autocomplete API, so if the pw is saved it will paste it in if the user agrees
            // important: to pass the `"current-password"` value , so the browser api knows that we are about to find the existing saved user pw
            autoComplete="current-password"
            placeholder="Your password"
            required
            id="loginPassword"
            value={formFields.password}
            onChange={handleChange}
            className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
            title={isPassword ? 'view password' : 'hide password'}
          />
          <ToggleShowIconButton
            isVisible={!isPassword}
            onClick={toggleShowpassword}
            type="button"
            className="absolute top-2 right-2"
          />
        </div>
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
