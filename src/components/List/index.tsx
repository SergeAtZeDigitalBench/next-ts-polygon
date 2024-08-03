import React, { type Key, type ReactNode } from 'react'
import clsx from 'clsx'

interface Props<D = Record<string, any>> {
  data: D[]
  getKey: (item: D) => Key
  renderItem: (item: D) => ReactNode
  liClassName?: string
}

const List = <D extends {}>({
  data,
  getKey,
  renderItem,
  liClassName,
}: Props<D>): JSX.Element => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 grid-rows-[auto]">
      {data.map((item) => (
        <li
          key={getKey(item)}
          className={clsx(
            'grid grid-rows-subgrid rounded-xl border border-slate-500 bg-slate-100 p-2',
            liClassName
          )}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}

export default List
