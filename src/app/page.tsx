import Link from 'next/link'
import clsx from 'clsx'

import { getTodos } from '@/lib/db/todos'

export const dynamic = 'force-dynamic'

const Homepage = async () => {
  const { data, error, message } = await getTodos()

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>
      {error && (
        <p className="text-center my-4 text-red-700 font-semibold">{error}</p>
      )}
      {data && data.length === 0 && (
        <p className="text-center my-4 font-semibold">No todos</p>
      )}
      <div className="flex justify-end my-4">
        <Link
          href="/todo/add"
          className="px-2 py-1 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded"
        >
          new todo
        </Link>
      </div>
      <ul className="grid grid-cols-3 gap-2">
        {data &&
          data.map(({ id, title, completed }) => (
            <li
              key={id}
              className={clsx(
                'rounded border  p-4 flex flex-col justify-center items-center h-[150px]',
                !completed
                  ? 'border-slate-400 bg-slate-200'
                  : 'border-green-400 bg-green-200'
              )}
            >
              <Link href={`todo/${id}`} className="text-xl font-semibold">
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default Homepage
