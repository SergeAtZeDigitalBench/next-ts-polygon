import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { IRegisterResponseError } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleResponseError = (error: IRegisterResponseError) => {
  return Object.values(error)
    .map((current) => current)
    .join('. ')
}
