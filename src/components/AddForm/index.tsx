import { revalidatePath } from 'next/cache'

import { createTodo } from '@/lib/api'

const AddForm = (): JSX.Element => {
  const addTodoActon = async (formData: FormData) => {
    'use server'

    const title = formData.get('title')
    if (!title || typeof title !== 'string') {
      throw new Error('Title missing')
    }

    const [_, error] = await createTodo(title)

    if (!!error) {
      throw new Error(error)
    } else {
      revalidatePath('/todos', 'page')
    }
  }

  return (
    <form
      action={addTodoActon}
      className="max-w-sm mx-auto flex flex-col justify-center items-center gap-2 my-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Enter todo title"
        className="px-2 py-1 rounded bg-slate-200 border border-slate-500 w-full"
      />
      <button
        type="submit"
        className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 text-white font-semibold w-full"
      >
        add
      </button>
    </form>
  )
}

export default AddForm
