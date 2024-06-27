import { decode } from 'html-entities'

import { items } from '@/constants'
import DisplayItems from '@/components/DisplayItems'

const Homepage = async () => {
  const formatItems = async () => {
    'use server'
    return items.map(({ id, title }) => ({ id, title: decode(title) }))
  }

  const itemsFormatted = await formatItems()

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>

      <ul className="grid grid-cols-1 gap-2 max-w-xl mx-auto my-4">
        {itemsFormatted.map(({ id, title }) => (
          <li key={id} className="bg-slate-200 rounded p-2">
            {title}
          </li>
        ))}
      </ul>

      <DisplayItems />
    </>
  )
}

export default Homepage
