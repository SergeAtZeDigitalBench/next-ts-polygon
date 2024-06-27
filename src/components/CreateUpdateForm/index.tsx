'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import type { Todo } from '@/types'

type Inputs = Pick<Todo, 'completed' | 'title'>

type Props = {
  current?: Inputs
  onSubmit: (values: Inputs) => void | Promise<void>
}

const CreateUpdateForm = ({ current, onSubmit }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const isCompleted = watch('completed')

  const onSubmitSuccess = async (values: Inputs) => {
    await onSubmit(values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitSuccess)}
      className="max-w-md mx-auto my-4 bg-slate-100 rounded-xl p-2 flex flex-col gap-4"
    >
      <input
        {...register('title', { required: true })}
        className="px-2 py-1 rounded"
      />
      {errors.title && <span>This field is required</span>}

      <div>
        <input type="checkbox" id="completed" {...register('completed')} />
        <label htmlFor="completed">
          {isCompleted ? 'Completed' : 'Not completed'}
        </label>
      </div>

      <input
        type="submit"
        value="submit"
        className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer"
      />
    </form>
  )
}

export default CreateUpdateForm
