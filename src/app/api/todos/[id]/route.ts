import { NextResponse } from 'next/server'

import { fetchTodoBy, updateTodo, deleteTodo } from '@/lib/db/todos'
import { getErrorMessage } from '@/lib'
import { todoSchemaUpdate } from '@/lib/zod'

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id
    const todoFound = await fetchTodoBy({ id })

    return NextResponse.json(todoFound, { status: 200, statusText: 'OK' })
  } catch (error) {
    return NextResponse.json(
      { error: getErrorMessage(error, 'Failed to fetch todo') },
      { status: 500 }
    )
  }
}

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json()
    const id = params.id
    const result = todoSchemaUpdate.safeParse(body)

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400, statusText: 'Bad request' }
      )
    }

    const updated = await updateTodo(id, result.data)
    return NextResponse.json(updated, { status: 200, statusText: 'OK' })
  } catch (error) {
    return NextResponse.json(
      { error: getErrorMessage(error, 'Failed to fetch todo') },
      { status: 500 }
    )
  }
}

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id
    const deleted = await deleteTodo(id)
    return NextResponse.json(deleted, { status: 200, statusText: 'OK' })
  } catch (error) {
    return NextResponse.json(
      { error: getErrorMessage(error, 'Failed to fetch todo') },
      { status: 500 }
    )
  }
}
