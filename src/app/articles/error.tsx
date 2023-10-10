'use client'

import { IErrorPageProps } from '@/types'

const Error = ({ error, reset }: IErrorPageProps): JSX.Element => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <p className="text-xl text-center font-bold text-red-600">
        {error.message || 'Error articles.'}
      </p>
      <button
        onClick={reset}
        className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-bold"
      >
        reset
      </button>
    </div>
  )
}

export default Error
