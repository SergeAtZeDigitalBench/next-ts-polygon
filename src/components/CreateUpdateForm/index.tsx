'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import type { Todo } from '@/types'

type Inputs = Pick<Todo, 'completed' | 'title'>

type Props = {
  current?: Inputs
}

const CreateUpdateForm = ({ current }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const isCompleted = watch('completed')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto my-4 bg-slate-100 rounded-xl p-2 flex flex-col gap-4"
    >
      <input
        {...register('title', { required: true })}
        className="px-2 py-1 rounded"
      />
      {errors.title && <span>This field is required</span>}

      <div>
        <input
          type="checkbox"
          id="completed"
          {...register('completed')}
          checked={isCompleted}
        />
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
