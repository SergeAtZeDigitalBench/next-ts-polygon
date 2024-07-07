/* eslint-disable @next/next/no-img-element */

import { solarSystemArticles } from '@/lib/mocks'
import clsx from 'clsx'

const pricePlan = [
  {
    id: 1,
    title: 'Basic Hosting',
    options: ['1 domain', '1 core', '512 MB memory', '1 email address'],
    price: 'Free*',
    note: '*We still want your credit card details, though!',
  },
  {
    id: 2,
    title: 'More Advanced Hosting',
    options: [
      'More Advanced Hosting',
      '4 domains',
      '1 GB memory',
      '10 email addresses',
      '5 MySQL databases',
    ],
    price: '$20 / mo',
    note: null,
  },
  {
    id: 3,
    title: 'Super Duper Whiz Bang Amazing Hosting',
    options: [
      '100 domains',
      '4 cores',
      '10 GB memory',
      'unlimited email addresses',
      '50 MySQL databases',
      'cPanel included',
    ],
    price: '$100 / mo',
    note: null,
  },
]

const List = ({ items }: { items: string[] }) => {
  return (
    <ul className="list-disc pl-2 ml-4">
      {items.map((current) => (
        <li key={current} className="my-1">
          {current}
        </li>
      ))}
    </ul>
  )
}

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-8">
        ch-9-subgrid-application
      </h1>
      <h2 className="my-8 text-center text-red-700 text-xl font-semibold">
        The problem
      </h2>

      <article className="grid gap-2 grid-cols-3">
        {pricePlan.map(({ id, title, options, price, note }) => {
          return (
            <section
              key={id}
              className={clsx(
                'rounded-xl border border-slate-300 overflow-hidden'
              )}
            >
              <h3 className="bg-sky-500 text-white text-lg font-semibold">
                {title}
              </h3>
              <List items={options} />
              <div className="bg-green-500 text-white">
                <p>{price}</p>
                <button className="px-2 py-1 bg-slate-200 text-black rounded-xl">
                  Sign Up
                </button>
                {note && <p className="text-xs">{note}</p>}
              </div>
            </section>
          )
        })}
      </article>

      <hr className="mt-8" />
      <h2 className="my-8 text-center text-green-700 text-xl font-semibold flex justify-center items-center gap-4">
        The fix
        <a
          href="https://www.sitepoint.com/css-subgrid-align-column-rows/"
          target="_blank"
          className="text-purple-900 underline hover:text-purple-950 text-xs"
        >
          read article
        </a>
      </h2>

      <article className="grid gap-2 grid-cols-3">
        {pricePlan.map(({ id, title, options, price, note }) => {
          return (
            <section
              key={id}
              className={clsx(
                'rounded-xl border border-slate-300 overflow-hidden',
                'grid grid-rows-[subgrid] row-[span_3]'
              )}
            >
              <h2 className="bg-sky-500 text-white text-lg font-semibold">
                {title}
              </h2>
              <List items={options} />
              <div className="bg-green-500 text-white">
                <p>{price}</p>
                <button className="px-2 py-1 bg-slate-200 text-black rounded-xl">
                  Sign Up
                </button>
                {note && <p className="text-xs">{note}</p>}
              </div>
            </section>
          )
        })}
      </article>

      <hr className="my-8" />
    </>
  )
}

export default Page
