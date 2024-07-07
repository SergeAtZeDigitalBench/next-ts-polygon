/* eslint-disable @next/next/no-img-element */
import { planets, Earth } from '@/lib/mocks'
import clsx from 'clsx'

const Page = async () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-center my-4">
        ch-8-overlapping-grid-mosaique
      </h1>

      <ul className="grid grid-cols-[1fr_1fr_1fr_1fr_1px] grid-rows-[auto_auto_auto_auto_auto] gap-[1vw] max-w-lg mx-auto">
        {[...planets, Earth].map(({ id, image }, index) => {
          const child = index + 1
          return (
            <li
              key={id}
              className={clsx({
                'col-[1/3] row-[1/3]': child === 1,
                'col-[3/5] row-[1/3]': child === 2,
                'col-[1/3] row-[3/6]': child === 3,
                'col-[3/5] row-[3/6]': child === 4,
                'col-[2/4] row-[2/4] border-[1vw] border-white rotate-45':
                  child === 5,
              })}
            >
              <img src={image.src} alt={image.alt} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Page
