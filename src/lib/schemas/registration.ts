import { z } from 'zod'

import { validateZipCode } from '@/lib/actions/validateZipcode'

export const regitrationSchema = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  last: z.string().trim().min(1, { message: 'Last name is required' }),
  email: z.string().trim().email({ message: 'Must be a valid email address' }),
})

export const regitrationSchemaZipcode = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  last: z.string().trim().min(1, { message: 'Last name is required' }),
  email: z.string().trim().email({ message: 'Must be a valid email address' }),
  zipCode: z.string().refine(validateZipCode, {
    message: 'Invalid zipcode',
  }),
})
