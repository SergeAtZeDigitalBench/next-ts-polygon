import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ZodError } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleZodError = <T = any>(error: ZodError<T>) => {
  return error.issues.map((current) => current.message).join('. ')
}
