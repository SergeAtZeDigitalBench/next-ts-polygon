import { object, string } from 'zod'

export const signInSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

const USERS = [
  { id: '123', email: 'john.doe@gmail.com', password: 'Secret123' },
]

export const verifyUser = ({
  email,
  password,
}: Record<'email' | 'password', string>): Promise<(typeof USERS)[number]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFound = USERS.find(
        (current) => current.email === email && current.password === password
      )

      if (!userFound) {
        reject(new Error('Wrong credentials'))
      } else {
        resolve(userFound)
      }
    }, 800)
  })
}
