'use client'

import React from 'react'

import type { Todo } from '@/types'

interface Props {
  todoId: string
}

const DisplayTodo = ({ todoId }: Props): JSX.Element => {
  return (
    <section className="max-w-md mx-auto bg-orange-200 rounded-lg p-2 flex flex-col gap-4 justify-center items-center">
      <button className="px-2 py-1 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded">
        update
      </button>

      {/* <h1 className="text-3xl font-bold underline text-center">{todo.title}</h1>
      <p>Created: {todo.createdAt.toISOString()}</p>
      <p>Updated: {todo.updatedAt.toISOString()}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Todo'}</p> */}
    </section>
  )
}

export default DisplayTodo
