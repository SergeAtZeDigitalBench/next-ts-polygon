'use client'

import { useRef } from 'react'
import { useFormState } from '@/lib/hooks/useFormState'
import { IServerActionResponse } from '@/types'
import DisplayNotifications from './DisplayNotifications'

interface IProps {
  addBlogPostActon: (formData: FormData) => Promise<IServerActionResponse>
}

const AddBlogPost = ({ addBlogPostActon }: IProps): JSX.Element => {
  const [status, formAction, formRef] = useFormState({
    serverAction: addBlogPostActon,
  })

  return (
    <form
      action={formAction}
      ref={formRef}
      className="max-w-sm mx-auto flex flex-col justify-center items-center gap-2 my-4"
    >
      <input
        type="text"
        name="subject"
        placeholder="Enter blog post subject"
        className="px-2 py-1 rounded bg-slate-200 border border-slate-500 w-full"
      />
      <button
        type="submit"
        className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 text-white font-semibold w-full"
      >
        add
      </button>

      <DisplayNotifications
        error={status.error}
        message={status.message}
        pending={status.pending}
      />
    </form>
  )
}

export default AddBlogPost
