'use server'
import { unstable_noStore as noStore } from 'next/cache'

import type { ServerActionResult, Todo } from '@/types'
import { db } from '.'

export const fetchTodos = async () => {
  noStore()
  return await db.todo.findMany()
}

export const fetchTodoBy = async ({ id }: { id: string }) => {
  noStore()
  console.log('fetch by id :>> ', id)
  return await db.todo.findUniqueOrThrow({
    where: { id },
  })
}

export const addTodo = async (input: Pick<Todo, 'title' | 'completed'>) => {
  noStore()
  return await db.todo.create({
    data: input,
  })
}
export const updateTodo = async (
  id: string,
  input: Partial<Pick<Todo, 'title' | 'completed'>>
) => {
  noStore()
  return await db.todo.update({
    where: { id },
    data: input,
  })
}
export const deleteTodo = async (id: string) => {
  noStore()
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

export const addTodoServerAction = async (
  input: Pick<Todo, 'title' | 'completed'>
): Promise<ServerActionResult<Todo>> => {
  try {
    const newTodo = await db.todo.create({
      data: input,
    })

    return { message: 'ok', data: newTodo }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to create todo'
    return { error }
  }
}

export const updateTodoServerAction = async (
  id: string,
  input: Partial<Pick<Todo, 'title' | 'completed'>>
): Promise<ServerActionResult<Todo>> => {
  try {
    const updatedTodo = await db.todo.update({
      where: { id },
      data: input,
    })

    return { message: 'ok', data: updatedTodo }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to update todo'
    return { error }
  }
}

export const deleteTodoServerAction = async (
  id: string
): Promise<ServerActionResult> => {
  try {
    await db.todo.delete({
      where: { id },
    })

    return { message: 'ok' }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to delete todo'
    return { error }
  }
}
