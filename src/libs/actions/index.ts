'use server'

import { unstable_cache, revalidateTag } from 'next/cache'
import type { Task } from '@prisma/client'

import db from '@/libs/db'

export const getTasksList = unstable_cache(
  async () => {
    return await db.task.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
  },
  [],
  {
    tags: ['tasks'],
  }
)

export const addTask = async (formData: FormData) => {
  const { title } = Object.fromEntries(formData) as Pick<Task, 'title'>

  const newTask = await db.task.create({
    data: { title },
  })

  revalidateTag('tasks')

  return newTask
}

export const updateTask = async ({
  id,
  title,
  isCompleted,
}: Partial<Pick<Task, 'title' | 'isCompleted'>> & Pick<Task, 'id'>) => {
  const updated = await db.task.update({
    where: { id },
    data: { title, isCompleted },
  })

  revalidateTag('tasks')
  return updated
}

export const deleteTask = async (id: Task['id']) => {
  const deleted = await db.task.delete({
    where: { id },
  })

  revalidateTag('tasks')
  return deleted
}
