'use client'

import { useState, useEffect } from 'react'

import { Todo } from '@/types'

import { getErrorMessage } from '@/lib/common'

const useTodos = () => {
  const [error, setError] = useState<null | string>(null)
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [data, setData] = useState<Todo[]>([])

  useEffect(() => {
    let isMounted = true
    const fetchPets = async () => {
      try {
        setisLoading(true)
        setError(null)
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'GET',
        })

        if (!res.ok) {
          const message = await res.json()

          throw new Error(message?.error || res.statusText)
        }

        const payload = (await res.json()) as Todo[]

        isMounted && setData(payload)
      } catch (error) {
        isMounted && setError(getErrorMessage(error))
      } finally {
        isMounted && setisLoading(false)
      }
    }
    fetchPets()
    return () => {
      isMounted = false
    }
  }, [])

  return { data, isLoading, error }
}

const TodosList = (): JSX.Element => {
  const { data, isLoading, error } = useTodos()

  return (
    <div className="p-2 bg-slate-200 rounded-lg my-4 max-w-5xl mx-auto">
      <h2 className="my-4 text-center text-xl font-semibold">Browser fetch</h2>

      <ul className=" list-disc pl-4 my-4">
        {data.map((current) => {
          return <li key={current.id}>{current.title}</li>
        })}
      </ul>

      {isLoading && (
        <p className="text-center text-sm  my-2 font-semibold text-green-700">
          loading...
        </p>
      )}

      {error && (
        <p className="text-center text-sm my-2 font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

export default TodosList
