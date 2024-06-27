'use client'

import React from 'react'
import { decode } from 'html-entities'

import { items } from '@/constants'

const DisplayItems = (): JSX.Element => {
  return (
    <section className=" max-w-xl mx-auto border-4 border-sky-400 rounded-xl p-2">
      <h2 className=" text-xl font-semibold my-4 text-center">
        Client component
      </h2>

      <ul className="grid grid-cols-1 gap-2 my-4">
        {items.map(({ id, title }) => (
          <li key={id} className=" bg-sky-300 rounded p-2">
            {decode(title)}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DisplayItems
