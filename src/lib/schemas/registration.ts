import { z } from 'zod'

export const regitrationSchema = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  last: z.string().trim().min(1, { message: 'Last name is required' }),
  email: z.string().trim().email({ message: 'Must be a valid email address' }),
})

export const regitrationSchema2 = z.object({
  first: z.string().trim().min(18, { message: 'First name is required' }),
  last: z.string().trim().min(19, { message: 'Last name is required' }),
  email: z.string().trim().email({ message: 'Must be a valid email address' }),
})
