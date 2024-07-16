'use client'

type ErrorPageProps = {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="flex flex-col gap-4 h-full w-full justify-center items-center">
      <h1>Error occurred! 💥</h1>
      <p>{error.message}</p>
      <button
        className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
        onClick={() => {
          reset()
        }}
      >
        reset
      </button>
    </div>
  )
}

export default ErrorPage
