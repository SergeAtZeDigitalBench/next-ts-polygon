'use client'

import { useFormState } from '@/lib/hooks/useFormState'

import { createBlogPost } from '@/lib/serverActions'

const CreateBlogForm = (): JSX.Element => {
  const [state, formAction] = useFormState({ serverAction: createBlogPost })
  console.log('state :>> ', state)
  return (
    <form
      action={formAction as any}
      className="min-w-[320px] flex flex-col gap-2 my-4"
    >
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Enter blog subject"
        required
        className="px-4 py-2 border border-slate-600 rounded-md"
      />
      <button
        type="submit"
        area-disabled={state.pending ? true : undefined}
        className="w-full bg-black text-white rounded-md px-4 py-2 text-center"
      >
        Create
      </button>
      {(state.message || state.error) && (
        <p aria-live="polite" className="sr-only" role="status">
          {state.message || state.error}
        </p>
      )}
    </form>
  )
}

export default CreateBlogForm
