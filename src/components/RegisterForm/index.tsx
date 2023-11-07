'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import ToggleShowIconButton from '@/components/ToggleShowIconButton'
import { useAuthContext } from '@/context/AuthContext'
import { IRegisterInput } from '@/types'

const initState: IRegisterInput = {
  name: '',
  email: '',
  password: '',
} as const

const RegisterForm = (): JSX.Element => {
  const router = useRouter()
  const { register, error, isLoading } = useAuthContext()
  const [formFields, setFormFields] = useState<IRegisterInput>({ ...initState })
  const [isPassword, setIsPassword] = useState<boolean>(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setFormFields((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    register(formFields, () => router.push('/'))
  }

  const toggleShowpassword = () => setIsPassword((current) => !current)

  return (
    <form
      onSubmit={handleSubmit}
      id="formRegister"
      className="w-[350px] p-2 border-2 border-green-700 rounded"
    >
      <fieldset className="flex flex-col gap-2 ">
        <label htmlFor="registerName" className="text-xs">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
          id="registerName"
          value={formFields.name}
          onChange={handleChange}
          className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
        />
        <label htmlFor="registerEmail" className="text-xs">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          // the full list of autocomplete attributes values: https://www.w3.org/TR/WCAG21/#input-purposes
          // the `autoComplete` attribute helps the browser autocomplete API, so the provided pw can be saved upon user agreement
          autoComplete="username"
          required
          id="registerEmail"
          value={formFields.email}
          onChange={handleChange}
          className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
        />
        <label htmlFor="registerPassword" className="text-xs">
          Password
        </label>
        <div className="relative">
          <input
            type={isPassword ? 'password' : 'text'}
            name="password"
            placeholder="Your password"
            // the full list of autocomplete attributes values: https://www.w3.org/TR/WCAG21/#input-purposes
            // the `autoComplete` attribute helps the browser autocomplete API, so the provided pw can be saved upon user agreement
            // important: to pass the `"new-password"` value , so the browser api knows that user is submitting a new pw value
            autoComplete="new-password"
            required
            id="registerPassword"
            value={formFields.password}
            onChange={handleChange}
            className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
          />
          <ToggleShowIconButton
            isVisible={!isPassword}
            onClick={toggleShowpassword}
            type="button"
            className="absolute top-2 right-2"
            title={isPassword ? 'view password' : 'hide password'}
          />
        </div>
      </fieldset>
      <div className="my-2 ">
        <button
          className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 border-2 border-green-700 w-full capitalize"
          type="submit"
          disabled={isLoading}
        >
          register account
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

export default RegisterForm
