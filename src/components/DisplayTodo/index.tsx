'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import type { Todo } from '@/types'

import { getErrorMessage } from '@/lib'
import clsx from 'clsx'

const fetchTodo = async ({ id }: { id: string }) => {
  const res = await fetch(`/api/todos/${id}`)

  if (!res.ok) {
    const errorResponse = await res.json()
    const errorMessage = getErrorMessage(errorResponse, 'Failed to fetch todo')

    throw new Error(errorMessage)
  }

  return (await res.json()) as Todo
}

interface Props {
  todoId: string
}

const DisplayTodo = ({ todoId }: Props): JSX.Element | null => {
  const router = useRouter()

  const { data, isLoading, error } = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => fetchTodo({ id: todoId }),
  })

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto bg-slate-200 rounded-lg p-2 flex flex-col gap-4 justify-center items-center h-[250px]" />
    )
  }

  if (error) {
    return (
      <p className="text-center my-4 text-red-700 font-semibold">
        {error.message}
      </p>
    )
  }

  if (!data) {
    router.push('/')
    return null
  }

  return (
    <section
      className={clsx(
        'max-w-md mx-auto  rounded-lg p-2 flex flex-col gap-4 justify-center items-center',
        data.completed ? 'bg-green-300' : 'bg-orange-200'
      )}
    >
      <Link
        href={`/todo/${todoId}/update`}
        className="px-2 py-1 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded"
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

export default DisplayTodo
