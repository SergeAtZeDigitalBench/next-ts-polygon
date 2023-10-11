import { redirect } from 'next/navigation'
import { addTodoServerAction } from '@/lib/serverActions'

const ServerSideForm = (): JSX.Element => {
  const serverAction = async (formData: FormData) => {
    'use server'
    const { message } = await addTodoServerAction(formData)

    if (message === 'ok') {
      redirect('/server-action/todos')
    }
  }

  return (
    <form
      action={serverAction as unknown as string}
      className="max-w-xs mx-auto my-4 flex flex-col gap-2 justify-center items-center p-4 border-2 border-green-500 rounded"
    >
      <input
        type="text"
        name="title"
        placeholder="Todo title"
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

export default ServerSideForm
