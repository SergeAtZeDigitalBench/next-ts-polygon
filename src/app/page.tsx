import Link from 'next/link'

import { getTodos } from '@/lib/db/todos'

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
      <ul className="grid grid-cols-3 gap-2">
        {data &&
          data.map(({ id, title }) => (
            <li
              key={id}
              className="rounded border border-slate-400 bg-slate-200 p-4 flex flex-col justify-center items-center h-[150px]"
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
