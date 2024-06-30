'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Todo } from '@/types'

interface Props {
  todoId: string
  fetchedPromise: Promise<Todo>
}

const DisplayTodo = ({ todoId, fetchedPromise }: Props): JSX.Element | null => {
  const router = useRouter()

  const { data, isLoading, error } = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => fetchedPromise,
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

export default DisplayTodo
