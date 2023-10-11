'use server'

import { revalidatePath } from 'next/cache'

import { IServerActionResult } from '@/types'
import { db } from './db'

export const addTodoServerAction = async (
  formData: FormData
): Promise<IServerActionResult> => {
  try {
    const title = formData.get('title')
    if (typeof title !== 'string' || !title) {
      throw new Error('Todo title not provided')
    }

    await db.todo.create({
      data: {
        title,
      },
    })

    revalidatePath('/server-action/todos')

    return { message: 'ok' }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to create todo'
    return { error }
  }
}

export const deleteTodoServerAction = async (
  id: string
): Promise<IServerActionResult> => {
  try {
    await db.todo.delete({
      where: { id },
    })

    revalidatePath('/server-action/todos')

    return { message: 'ok' }
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to delete todo'
    return { error }
  }
}
