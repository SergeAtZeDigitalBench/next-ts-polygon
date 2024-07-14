'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { signin, signup } from '@/lib/authTools'
import { COOKIE_NAME } from '@/constants'

const authSchema = z.object({
  email: z.string().email({ message: 'A valid email is required' }),
  password: z
    .string()
    .min(8, { message: 'Password is required, min 8 char long' }),
})

export const registerUser = async (
  prevState: Record<string, any>,
  formData: FormData
) => {
  try {
    const validation = authSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (validation.error) {
      const { fieldErrors, formErrors } = validation.error.flatten()
      const { email, password } = fieldErrors
      const allErrors =
        email?.join(', ') ||
        '' + password?.join(', ') ||
        '' + formErrors.join(', ')

      throw new Error(allErrors || 'Form invalid')
    }

    const { email, password } = validation.data
    const { token } = await signup({ email, password })
    cookies().set(COOKIE_NAME, token)
  } catch (error) {}
}
