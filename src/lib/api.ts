import { ITodoDb, ITodo } from '@/types'
import { db } from './db'

export const createTodo = async (
  title: string
): Promise<[ITodoDb, null] | [null, string]> => {
  try {
    const todo = await db.todo.create({
      data: {
        title,
      },
    })

    return [todo, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const editTodo = async (
  id: string,
  payload: { title?: string; isComplete?: boolean }
): Promise<[ITodoDb, null] | [null, string]> => {
  try {
    const todo = await db.todo.update({
      where: { id },
      data: payload,
    })

    return [todo, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const toggleTodo = async (
  id: string
): Promise<[ITodoDb, null] | [null, string]> => {
  try {
    const found = await db.todo.findUniqueOrThrow({ where: { id } })
    const updated = await db.todo.update({
      where: { id },
      data: {
        isComplete: !found.isComplete,
      },
    })

    return [updated, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const deleteTodo = async (
  id: string
): Promise<[string, null] | [null, string]> => {
  try {
    const deleted = await db.todo.delete({ where: { id } })
    return [deleted.id, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const getTodoById = async (
  id: string
): Promise<[ITodoDb, null] | [null, string]> => {
  try {
    const found = await db.todo.findUniqueOrThrow({ where: { id } })
    return [found, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const getTodosList = async (): Promise<
  [ITodoDb[], null] | [null, string]
> => {
  try {
    const todos = await db.todo.findMany()
    return [todos, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const formatTodo = ({
  createdAt,
  updatedAt,
  ...restTodo
}: ITodoDb): ITodo => ({
  ...restTodo,
  createdAt: createdAt.toISOString(),
  updatedAt: updatedAt.toISOString(),
})

export const formatTodos = (todos: ITodoDb[]): ITodo[] => todos.map(formatTodo)
