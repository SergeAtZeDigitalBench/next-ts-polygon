'use client'
import { useState } from 'react'

import { useServerAction } from '@/lib/hooks/useServerAction'
import { ITodo, IServerActionResponse } from '@/types'

interface IProps {
  todo: ITodo
  toggleTodoServerAction: (id: string) => Promise<IServerActionResponse>
  deleteTodoServerAction: (id: string) => Promise<IServerActionResponse>
}

const TodoCart = ({
  todo,
  toggleTodoServerAction,
  deleteTodoServerAction,
}: IProps): JSX.Element => {
  const [toggleState, handleToggle] = useServerAction({
    serverAction: toggleTodoServerAction,
  })
  const [deleteState, handleDelete] = useServerAction({
    serverAction: deleteTodoServerAction,
  })

  return (
    <div className="p-4 rounded bg-slate-200 flex flex-col justify-center items-center gap-2 ">
      <h4>{todo.title}</h4>
      <p className="w-full px-2 py-1 bg-orange-400 rounded text-white text-center font-semibold">
        {todo.isComplete ? ' ✅ done' : ' ⏳ in progress'}
      </p>
      <button
        type="button"
        className="px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white font-semibold w-full"
        onClick={() => handleDelete(todo.id)}
      >
        delete
      </button>
      <button
        type="button"
        className={
          'px-2 py-1 rounded text-white font-semibold w-full bg-green-500 hover:bg-green-600'
        }
        onClick={() => handleToggle(todo.id)}
      >
        {todo.isComplete ? 'set in progress' : 'set as done'}
      </button>
    </div>
  )
}

export default TodoCart
