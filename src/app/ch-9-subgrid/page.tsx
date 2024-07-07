/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { cards } from '@/lib/mocks'
import useCaseImg from './subgrid-use-case.png'
import clsx from 'clsx'

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        {' '}
        ch-9-subgrid
      </h1>
      <div className="mx-auto max-w-lg">
        <p className="my-4 text-center">
          Use case: we had cards with elements that did not align across each
          other. For example, we had headlines that wrapped so cards were
          different lengths. see img below
        </p>
        <Image src={useCaseImg} alt="use case grid" />
        <p className=" text-red-700 font-semibold">
          Subgrid is useful for making elements align with their parent grid, in
          addition to their own grid.
        </p>
      </div>

      <h2 className="my-4 text-center text-2xl underline text-red-600 font-bold">
        The issue
      </h2>

      <ul className="grid gap-2 grid-cols-[repeat(4,_minmax(200px,_1fr))] max-w-[1200px] mx-auto px-2">
        {cards.map(({ id, image, caption, readMoreLink }, index) => {
          const child = index + 1

          return (
            <li
              key={id}
              className={clsx('border p-2', {
                'col-[1/3] row-[1/3] bg-sky-300 border-sky-700': child === 1,
                'border-pink-600 bg-pink-300': child === 2,
                'border-green-600 bg-green-300': child === 3,
                'border-pink-700 bg-pink-200': child === 4,
                'border-purple-800 bg-purple-300': child === 5,
              })}
            >
              <h4 className="text-xl font-semibold my-2 ">{caption.title}</h4>
              {image && (
                <img src={image.src} alt={image.alt} className="w-full" />
              )}
              <p className="my-2">{caption.text}</p>
              <a
                href={readMoreLink.href}
                className=" px-4 py-2 bg-black text-white rounded text-center text-sm hover:opacity-90"
              >
                {readMoreLink.name}
              </a>
            </li>
          )
        })}
      </ul>

      <h2 className="my-8 text-center text-2xl underline text-orange-600 font-bold">
        The Fix
      </h2>

      <ul
        className={clsx(
          'grid gap-2 max-w-[1200px] mx-auto px-2',
          'grid-cols-[repeat(4,_minmax(200px,_1fr))] grid-rows-[0.2fr_1fr_0.1fr] '
        )}
      >
        {cards.map(({ id, image, caption, readMoreLink }, index) => {
          const child = index + 1
          return (
            <li
              key={id}
              className={clsx(
                'border p-2 grid gap-1 grid-cols-1',
                'grid-rows-[subgrid] row-[span_3]',
                {
                  'col-[1/3] row-[1/7] bg-sky-300 border-sky-700': child === 1,
                  'border-pink-600 bg-pink-300': child === 2,
                  'border-green-600 bg-green-300': child === 3,
                  'border-pink-700 bg-pink-200': child === 4,
                  'border-purple-800 bg-purple-300': child === 5,
                }
              )}
            >
              <h4 className="text-xl font-semibold my-2 ">{caption.title}</h4>
              {image && (
                <img src={image.src} alt={image.alt} className="w-full" />
              )}
              <p className="my-2">{caption.text}</p>
              <div>
                <a
                  href={readMoreLink.href}
                  className=" px-4 py-2 bg-black text-white rounded text-center text-sm hover:opacity-90"
                >
                  {readMoreLink.name}
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Page
