'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

interface IFormValues {
  name: string
  email: string
}
const initState: IFormValues = { name: '', email: '' }

interface IProps {
  onUserAdd: (values: { name: string; email: string }) => void | Promise<void>
}

const UserForm = ({ onUserAdd }: IProps): JSX.Element => {
  const [formValues, setFormValues] = useState<IFormValues>(initState)
  const { name, email } = formValues

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name || !email) {
      return
    }

    await onUserAdd({ name, email })
    setFormValues(initState)
  }

  return (
    <form
      data-testid="UserForm"
      onSubmit={handleSubmit}
      className="w-80 mt-12 p-2 bg-slate-100 border-slate-300 rounded"
    >
      <div className="my-2 flex gap-2 justify-between">
        <label className="font-semibold" htmlFor="userFormName">
          Enter Name
        </label>
        <input
          value={name}
          name="name"
          id="userFormName"
          onChange={handleChange}
          className="px-2 py-1 rounded bg-green-200 border-green-300"
        />
      </div>
      <div className="my-2 flex gap-2 justify-between">
        <label className="font-semibold" htmlFor="userFormEmail">
          Enter Email
        </label>
        <input
          value={email}
          name="email"
          id="userFormEmail"
          onChange={handleChange}
          className="px-2 py-1 rounded bg-green-200 border-green-300"
        />
      </div>
      <button
        type="submit"
        className="px-2 py-1 bg-green-500 border-green-700 hover:bg-green-600 text-white rounded"
      >
        Add User
      </button>
    </form>
  )
}

export default UserForm
