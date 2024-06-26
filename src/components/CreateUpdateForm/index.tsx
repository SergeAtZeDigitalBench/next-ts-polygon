'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

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

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto my-4 bg-slate-100 rounded-xl p-2 flex flex-col gap-4"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue="test"
        {...register('example')}
        className="px-2 py-1 rounded"
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register('exampleRequired', { required: true })}
        className="px-2 py-1 rounded"
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        type="submit"
        value="submit"
        className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer"
      />
    </form>
  )
}

export default CreateUpdateForm
