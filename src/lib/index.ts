import { ApiErrorResponse } from '@/types'

export const isServer = () => typeof window === 'undefined'

export const getErrorMessage = (error: unknown, defaultMessage?: string) => {
  if (
    !!error &&
    typeof error === 'object' &&
    typeof (error as ApiErrorResponse).error === 'string'
  ) {
    return (error as ApiErrorResponse).error
  }

  const message = error instanceof Error ? error.message : defaultMessage

  return message || 'An error occurred'
}
