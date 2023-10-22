'use client'

import { IState } from '@/lib/hooks/useFormState'

const DisplayNotifications = ({
  message,
  pending,
  error,
}: IState): JSX.Element | null => {
  if (!!message) {
    return (
      <p className="px-4 py-2 rounded min-w-[300px] fixed bottom-4 bg-green-600 text-center">
        Subject received, in progress. May take up to 1 minute.
      </p>
    )
  }
  if (!!error) {
    return (
      <p className="px-4 py-2 rounded min-w-[300px] fixed bottom-4 bg-red-600 text-center">
        An error occurred: {error}
      </p>
    )
  }

  if (!!pending) {
    return (
      <p className="px-4 py-2 rounded min-w-[300px] fixed bottom-4 bg-blue-400-600 text-center">
        Loading...
      </p>
    )
  }

  return null
}

export default DisplayNotifications
