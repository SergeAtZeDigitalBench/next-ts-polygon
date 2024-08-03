'use client'

interface PageProps {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: PageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text-red-700 my-4">
        Error
      </h1>
      <p className="text-center text-red-700 my-4">{error.message}</p>
      {error.stack && (
        <p className="text-center text-red-700 my-4">{error.stack}</p>
      )}
      <button
        onClick={() => reset()}
        className="px-2 py-1 border-red-800 bg-red-500 hover:bg-red-600 focus:bg-red-700"
      >
        reset
      </button>
    </>
  )
}

export default ErrorPage
