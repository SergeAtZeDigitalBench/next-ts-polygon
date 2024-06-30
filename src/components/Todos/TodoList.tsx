'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import clsx from 'clsx'

import type { Todo } from '@/types'

import { getErrorMessage } from '@/lib'

const fetchTodos = async () => {
  const res = await fetch('/api/todos')

  if (!res.ok) {
    const errorResponse = await res.json()
    const errorMessage = getErrorMessage(errorResponse, 'Failed to fetch todos')

    throw new Error(errorMessage)
  }

  return (await res.json()) as Todo[]
}

const TodoList = (): JSX.Element => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isLoading) {
    return <p className="my-4 text-center font-semibold">Loading...</p>
  }

  if (error) {
    return (
      <p className="my-4 text-center font-semibold text-red-700">
        {error.message}
      </p>
    )
  }

  return (
    <ul className="grid grid-cols-3 gap-2 my-4">
      {data?.length === 0 && <li>no todos.</li>}

      {data &&
        data.map(({ id, title, completed }) => {
          return (
            <li
              key={id}
              className={clsx(
                'rounded border  p-4 flex flex-col justify-center items-center h-[150px]',
                !completed
                  ? 'border-slate-400 bg-slate-200'
                  : 'border-green-400 bg-green-200'
              )}
            >
              <Link href={`todo/${id}`} className="text-xl font-semibold">
                {title}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}

export default TodoList
