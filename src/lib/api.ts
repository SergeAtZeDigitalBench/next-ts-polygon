import { ITodoDb, ITodo, IBlogpost, IBlogpostDb } from '@/types'
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

export const formatTodoDb = ({
  createdAt,
  updatedAt,
  ...restTodo
}: ITodoDb): ITodo => ({
  ...restTodo,
  createdAt: createdAt.toISOString(),
  updatedAt: updatedAt.toISOString(),
})

export const formatBlogpostDb = ({
  createdAt,
  updatedAt,
  ...restTodo
}: IBlogpostDb): IBlogpost => ({
  ...restTodo,
  createdAt: createdAt.toISOString(),
  updatedAt: updatedAt.toISOString(),
})

export const formatTodos = (todos: ITodoDb[]): ITodo[] =>
  todos.map(formatTodoDb)

export const formatBlogposts = (blogPosts: IBlogpostDb[]): IBlogpost[] =>
  blogPosts.map(formatBlogpostDb)

export const createBlogpost = async ({
  title,
  body,
}: {
  title: string
  body: string
}): Promise<[IBlogpostDb, null] | [null, string]> => {
  try {
    const newBlogpost = await db.blogPost.create({
      data: {
        title,
        body,
      },
    })

    return [newBlogpost, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const getBlogposts = async (): Promise<
  [IBlogpostDb[], null] | [null, string]
> => {
  try {
    const bp = await db.blogPost.findMany()
    return [bp, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const getBlogpostById = async (
  id: string
): Promise<[IBlogpostDb, null] | [null, string]> => {
  try {
    const found = await db.blogPost.findUniqueOrThrow({
      where: { id },
    })
    return [found, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const updateBlogpost = async (
  id: string,
  data: { title?: string; body?: string }
): Promise<[IBlogpostDb, null] | [null, string]> => {
  try {
    const updated = await db.blogPost.update({
      where: { id },
      data,
    })

    return [updated, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}

export const deleteBlogpost = async (
  id: string
): Promise<[string, null] | [null, string]> => {
  try {
    const deleted = await db.blogPost.delete({
      where: { id },
    })

    return [deleted.id, null]
  } catch (err) {
    const statusText =
      err instanceof Error ? err.message : (err as any).toString()

    return [null, statusText]
  }
}
