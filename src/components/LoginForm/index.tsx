'use client'

import { useState } from 'react'

interface IFormValues {
  username: string
  password: string
}

const isFormValid = (values: IFormValues) => {
  const isAnyEmpty = Object.values(values).some((value) => value.length === 0)

  return !isAnyEmpty
}

const initState: IFormValues = {
  username: '',
  password: '',
} as const

interface IProps {}

const LoginForm = ({}: IProps): JSX.Element => {
  const [formFields, setFormFields] = useState<IFormValues>({ ...initState })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setFormFields((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isFormValid(formFields)) {
      console.log('Form invalid')
      return
    }
    console.log('Login submit: ', formFields)
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="formLogin"
      className="w-[350px] p-2 border-2 border-green-700 rounded"
    >
      <fieldset className="flex flex-col gap-2 ">
        <input
          type="email"
          name="username"
          placeholder="Your username"
          autoComplete="username"
          required
          value={formFields.username}
          onChange={handleChange}
          className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
        />
        <label htmlFor="loginPassword" className="text-xs">
          password
        </label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          id="loginPassword"
          value={formFields.password}
          onChange={handleChange}
          className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
        />
      </fieldset>
      <div className="my-2">
        <button className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 border-2 border-green-700 w-[150px]]">
          login
        </button>
      </div>
    </form>
  )
}

export default LoginForm
