'use client'

import React, { type ChangeEvent, useState, FormEvent } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'

const TextInput = (): JSX.Element => {
  const [name, setName] = useLocalStorage({
    key: 'name',
    initValue: {
      firstName: '',
      lastName: '',
    },
  })

  const [formValues, setFormValues] = useState(() => name)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setName(formValues)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 justify-center items-center max-w-sm mx-auto my-4"
    >
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="fname">First name</label>
        <input
          id="fname"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formValues.firstName}
          className="px-2 py-1 bg-slate-200 rounded border border-slate-400"
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="myText">Last name</label>
        <input
          id="myText"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formValues.lastName}
          className="px-2 py-1 bg-slate-200 rounded border border-slate-400"
        />
      </div>

      <div className="w-full flex justify-between">
        <button
          type="submit"
          className="px-2 py-1 rounded bg-green-500 hover:bg-green-600"
        >
          submit
        </button>
        <button
          onClick={() => setFormValues(name)}
          className="px-2 py-1 rounded bg-gray-500 hover:bg-gray-600"
        >
          reset
        </button>
      </div>
    </form>
  )
}

export default TextInput
