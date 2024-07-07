/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import { planetaryData, moonImages } from '@/lib/mocks'
import styles from './styles.module.css'
import classes from './exercise.module.css'

const classname: Record<string, string> = {
  1: 'Footer',
  2: 'LargeMoon',
  3: 'Header',
  4: 'SquareA',
  5: 'SquareB',
}

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        ch-5-grid-template-area
      </h1>
      <p className="text-sm text-center [&>code]:text-pink-950 pb-4">
        The use of <code>grid-template-area</code> is to achieve the same as we
        do with <code>grid-template-columns</code> and{' '}
        <code>grid-template-rows</code>{' '}
      </p>

      <div className={clsx('grid', styles.gridContainer)}>
        {planetaryData.map(({ id, image, caption, citeLink }, index) => {
          const child = index + 1

          return (
            <figure
              key={id}
              className={clsx(
                'grid gap-2 grid-cols-[1fr_2fr] items-center border border-red-600',
                {
                  [styles.largeSquare]: child === 3,
                  [styles.boxA]: child === 2,
                  [styles.boxB]: child === 1,
                  [styles.boxC]: child === 4,
                }
              )}
            >
              <img src={image.src} alt={image.alt} className=" max-w-full" />
              <figcaption className="border border-dotted border-blue-800">
                {caption}
                <cite>
                  <a
                    href={citeLink.href}
                    target="_blank"
                    className="text-purple-800 underline font-semibold"
                  >
                    {citeLink.title}
                  </a>
                </cite>
              </figcaption>
            </figure>
          )
        })}
      </div>

      <section>
        <h2 className="my-8 text-2xl font-bold underline text-center">
          Exercise grid areas
        </h2>
        <p className="text-sm my-2 text-center">
          Divided into 4 rows and 3 columns. Header takes first row and 3
          columns, etc.
        </p>
        <pre className="bg-slate-200 rounded-lg max-w-md mx-auto text-sm my-4">
          <code>
            {`
            .planetaryContainer {\n
              grid-template-areas:\n
                'Header Header Header'\n
                'LargeMoon LargeMoon SquareA'\n
                'LargeMoon LargeMoon SquareB'\n
                'Footer Footer Footer';\n
            }\n
          `}
          </code>
        </pre>
        <div className="w-[980px] mx-auto bg-black px-8 py-4">
          <ul className={clsx('grid gap-2', classes.planetaryContainer)}>
            {moonImages.map(({ id, src }, idx) => {
              const child = idx + 1

              return (
                <li
                  key={id}
                  className={clsx(
                    {
                      [classes.Footer]: child === 1,
                      [classes.Header]: child === 3,
                      [classes.LargeMoon]: child === 2,
                      [classes.SquareA]: child === 4,
                      [classes.SquareB]: child === 5,
                    },
                    'relative'
                  )}
                >
                  <img src={src} alt="" className="w-full" />
                  <span className="absolute top-[10%] left-[15%] border border-white p-1 text-white">
                    {classname[`${child}`]}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Page
