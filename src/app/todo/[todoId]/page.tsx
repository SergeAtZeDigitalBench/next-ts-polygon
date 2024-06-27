import { redirect } from 'next/navigation'
import Link from 'next/link'

import type { PageProps } from '@/types'

import { getTodoBy } from '@/lib/db/todos'

const TodoPage = async ({ params }: PageProps<{ todoId: string }>) => {
  const { todoId } = params
  const { data, error } = await getTodoBy({ id: todoId })

  if (error || !data) {
    return redirect('/')
  }

  return (
    <section className="max-w-md mx-auto bg-orange-200 rounded-lg p-2 flex flex-col gap-4 justify-center items-center">
      <Link
        href={`/todo/${todoId}/update`}
        className="px-2 py-1 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded"
      >
        update
      </Link>
      <h1 className="text-3xl font-bold underline text-center">{data.title}</h1>
      <p>Created: {data.createdAt.toISOString()}</p>
      <p>Updated: {data.updatedAt.toISOString()}</p>
      <p>Status: {data.completed ? 'Completed' : 'Todo'}</p>
    </section>
  )
}

export default TodoPage
