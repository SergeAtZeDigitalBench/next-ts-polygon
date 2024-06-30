import { z } from 'zod'

export const todoSchema = z.object({
  title: z.string().min(3, { message: 'Title is required' }),
  completed: z.boolean({ message: 'Completed status is required' }),
})

export const todoSchemaUpdate = z.object({
  title: z.string().min(3, { message: 'Title is min 3 characters' }).optional(),
  completed: z.boolean().optional(),
})
