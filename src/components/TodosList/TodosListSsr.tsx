import { unstable_noStore as noStore } from 'next/cache'

import { Todo } from '@/types'

const fetchTodos = async (): Promise<[Todo[], null] | [null, string]> => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      cache: 'no-store',
    })
    const payload = (await res.json()) as Todo[]

    return [payload, null]
  } catch (error) {
    console.log('server error :>> ', error)
    return [null, 'fetch error']
  }
}

const TodosListSsr = async () => {
  noStore()

  const [data, error] = await fetchTodos()

  return (
    <div className="p-2 bg-slate-200 rounded-lg my-4 max-w-5xl mx-auto">
      <h2 className="my-4 text-center text-xl font-semibold">Server fetch</h2>

      {error && (
        <p className="text-center font-semibold text-red-700">{error}</p>
      )}

      <ul className="pl-4 my-2 list-disc">
        {data &&
          data.map((current) => <li key={current.id}>{current.title}</li>)}
      </ul>
    </div>
  )
}

export const Loading = () => (
  <div className="p-2 bg-slate-200 rounded-lg my-4 max-w-5xl mx-auto h-10 flex flex-col justify-center items-center">
    <p>Loading...</p>
  </div>
)

export default TodosListSsr
