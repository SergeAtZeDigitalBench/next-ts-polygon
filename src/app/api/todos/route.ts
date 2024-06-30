import { NextResponse } from 'next/server'

import { fetchTodos, addTodo } from '@/lib/db/todos'
import { getErrorMessage } from '@/lib'
import { todoSchema } from '@/lib/zod'

export const GET = async (req: Request) => {
  try {
    const todos = await fetchTodos()
    return NextResponse.json(todos, { status: 200, statusText: 'OK' })
  } catch (error) {
    NextResponse.json(
      { error: getErrorMessage(error, 'Failed to fetch todos') },
      { status: 500 }
    )
  }
}

export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const result = todoSchema.safeParse(body)

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400, statusText: 'Bad request' }
      )
    }

    const newTodo = await addTodo(result.data)
    return NextResponse.json(newTodo, { status: 201, statusText: 'Created' })
  } catch (error) {
    return NextResponse.json(
      { error: getErrorMessage(error, 'Failed to create new todo') },
      { status: 500 }
    )
  }
}
