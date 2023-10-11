'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

const sendInputValueToApi = (value: string) => {
  console.log('submit value :>> ', value)
}

const ControlledForm = (): JSX.Element => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    sendInputValueToApi(value)
    setValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs mx-auto my-4 flex gap-2 justify-center items-center p-4 border-2 border-green-500 rounded"
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="px-2 py-1 border rounded border-slate-500"
      />
      <button
        type="submit"
        className="px-2 py-1 rounded bg-slate-200 border border-slate-500"
      >
        Send
      </button>
    </form>
  )
}

export default ControlledForm
