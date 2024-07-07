/* eslint-disable @next/next/no-img-element */

import clsx from 'clsx'
import animation from './animation.module.css'

const Page = async () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-center my-4">
        ch-8-grid-animation
      </h1>
      <p className="text-sm font-semibold text-center my-2 text-green-600">
        Overlap grid items then animate one of them to display opacity
      </p>

      <ul className="grid grid-cols-1 gap-2 max-w-lg mx-auto">
        <li className="col-[1/1] row-[1/1] flex justify-center">
          <img
            src="https://assets.codepen.io/296057/fem-pluto1.jpg"
            alt="Pluto, with a heart-shaped patch on the planet."
          />
        </li>

        <li
          className={clsx(
            'col-[1/1] row-[1/1] flex justify-center',
            animation.card
          )}
        >
          <img
            src="https://assets.codepen.io/296057/fem-pluto2.jpg"
            alt="Pluto, with the Disney dog Pluto overlapping the heart-shaped patch."
          />
        </li>
      </ul>
    </div>
  )
}

export default Page
