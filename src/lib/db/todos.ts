'use server'

import type { ServerActionResult, Todo } from '@/types'
import { db } from '.'

export const fetchTodos = async () => {
  return await db.todo.findMany()
}

export const fetchTodoBy = async ({ id }: { id: string }) => {
  return await db.todo.findUniqueOrThrow({
    where: { id },
  })
}

export const addTodo = async (input: Pick<Todo, 'title' | 'completed'>) => {
  return await db.todo.create({
    data: input,
  })
}
export const updateTodo = async (
  id: string,
  input: Partial<Pick<Todo, 'title' | 'completed'>>
) => {
  return await db.todo.update({
    where: { id },
    data: input,
  })
}
export const deleteTodo = async (id: string) => {
  return await db.todo.delete({
    where: { id },
  })
}

export const getTodos = async (): Promise<ServerActionResult<Todo[]>> => {
  try {
    const todos = await db.todo.findMany()
    return { data: todos, message: 'ok' }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to get todos'
    return { error }
  }
}

export const getTodoBy = async ({
  id,
}: {
  id: string
}): Promise<ServerActionResult<Todo>> => {
  try {
    const todo = await db.todo.findUniqueOrThrow({
      where: { id },
    })
    return { data: todo, message: 'ok' }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to get todo'
    return { error }
  }
}
