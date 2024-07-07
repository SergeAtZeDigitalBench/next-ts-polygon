/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import { planetaryData, moonImages } from '@/lib/mocks'

const classNames: Record<string, string> = {
  '1': '1st: first:col-[1/span_2] row-[4/5]',
  '2': '2nd: col-[1/2] row-[2/span_2]',
  '3': '3rd: [1/span_2] row-[1/2]',
  '4': '4th: col-[2/3] row-[2/3]',
  '5': '5th: col-[2/3] row-[3/4]',
}

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        ch-4-grid-span
      </h1>

      <div className="grid grid-cols-2 gap-[1rem_2rem] grid-rows-3">
        {planetaryData.map(({ id, image, caption, citeLink }) => (
          <figure
            key={id}
            className={clsx(
              'grid gap-2 grid-cols-[1fr_2fr] items-center border border-red-600',
              '[&:nth-child(3)]:col-[1/2] [&:nth-child(3)]:row-[1/span_3] [&:nth-child(3)]:block',
              ' last:row-[4/5] last:col-start-1 last:col-span-2'
            )}
            // CSS "grid-row: 1/span 3" - is meaning grid row starts at row 1 and spans over 3 rows, here we position item explicitly at the 1st row
            // however, when CSS is "grid-row: span 3" - is meaning just wherever the grid item is by default just span 3 rows
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
        ))}
      </div>

      <section className="my-8">
        <h2 className="text-2xl font-bold underline text-center mb-4">
          ch-4-grid-span Exercise
        </h2>

        <ul className="grid grid-cols-[2fr_1fr] gap-2 w-[980px] mx-auto bg-black px-8 py-4">
          {moonImages.map(({ id, src }, idx) => {
            const child = idx + 1

            return (
              <li
                key={id}
                // className="[&:nth-child(3)]:col-[1/3] [&:nth-child(3)]:row-[1/2] [&:nth-child(2)]:col-[1/2] [&:nth-child(2)]:row-[2/4] [&:nth-child(4)]:row-[2/3] [&:nth-child(4)]:col-[2/3] [&:nth-child(5)]:row-[3/4] [&:nth-child(5)]:col-[2/3] first:row-[4/5] first:col-[1/3]"
                className={clsx(
                  'relative first:row-[4/5] first:col-[1/span_2]',
                  {
                    'col-[1/span_2] row-[1/2]': child === 3,
                    'col-[1/2] row-[2/span_2]': child === 2,
                    'col-[2/3] row-[2/3]': child === 4,
                    'col-[2/3] row-[3/4]': child === 5,
                  }
                )}
              >
                <img src={src} alt="" className="w-full" />
                <span className="absolute top-[10%] left-[15%] border border-white p-1 text-white">
                  {classNames[`${child}`]}
                </span>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Page
