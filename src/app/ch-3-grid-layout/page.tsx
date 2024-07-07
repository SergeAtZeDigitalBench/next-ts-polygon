/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { moonImages } from '@/lib/mocks'

const classNames: Record<string, string> = {
  '1': '1st: col-[1/3] row-[4/5]',
  '2': '2nd: col-[1/2] row-[2/4]',
  '3': '3rd: col-[1/3] row-[1/2]',
  '4': '4th: col-[2/3] row-[2/3]',
  '5': '5th: col-[2/3] row-[3/4]',
}

const GridLayoutPage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Grid Layout Exercise
      </h1>
      <ol className="grid grid-cols-5 gap-1 my-8">
        {moonImages.map(({ id, src }, idx) => {
          return (
            <li key={id} className="relative">
              <img src={src} alt="" className="w-full" />
              <span className="absolute top-[2%] left-[15%] border-2 border-white p-1 text-white">
                {idx + 1}
              </span>
            </li>
          )
        })}
      </ol>

      <h2 className="my-8 text-2xl font-bold underline text-center">
        Re-Ordering using grid
      </h2>
      <ul className="grid grid-cols-[2fr_1fr] gap-2 w-[980px] mx-auto bg-black px-8 py-4">
        {moonImages.map(({ id, src }, idx) => {
          const child = idx + 1

          return (
            <li
              key={id}
              // className="[&:nth-child(3)]:col-[1/3] [&:nth-child(3)]:row-[1/2] [&:nth-child(2)]:col-[1/2] [&:nth-child(2)]:row-[2/4] [&:nth-child(4)]:row-[2/3] [&:nth-child(4)]:col-[2/3] [&:nth-child(5)]:row-[3/4] [&:nth-child(5)]:col-[2/3] first:row-[4/5] first:col-[1/3]"
              className={clsx('relative first:row-[4/5] first:col-[1/3]', {
                'col-[1/3] row-[1/2]': child === 3,
                'col-[1/2] row-[2/4]': child === 2,
                'col-[2/3] row-[2/3]': child === 4,
                'col-[2/3] row-[3/4]': child === 5,
              })}
            >
              <img src={src} alt="" className="w-full" />
              <span className="absolute top-[10%] left-[15%] border border-white p-1 text-white">
                {classNames[`${child}`]}
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GridLayoutPage
