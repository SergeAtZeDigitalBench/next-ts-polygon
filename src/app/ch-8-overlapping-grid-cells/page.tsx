/* eslint-disable @next/next/no-img-element */
import { planets } from '@/lib/mocks'

const Page = async () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-center my-4">
        ch-8-overlapping-grid-cells
      </h1>
      <h2 className="text-2xl font-bold text-center my-2">initial version</h2>
      <p className="text-sm text-center mb-4 font-semibold text-red-700">
        For each item: We want ot have caption text to ovelap on top of the
        image
      </p>

      <ul className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        {planets.map(({ id, image, caption }) => {
          return (
            <li key={id}>
              <figure>
                <img src={image.src} alt={image.alt} />
                <figcaption>
                  <h2>{caption.title}</h2>
                  <p>{caption.text}</p>
                </figcaption>
              </figure>
            </li>
          )
        })}
      </ul>

      <h2 className="text-2xl font-bold text-center my-4">
        Updated version ( ovelap )
      </h2>
      <ul className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        {planets.map(({ id, image, caption }, index) => {
          return (
            <li key={id} className="relative ">
              <figure className="grid grid-cols-1 grid-rows-[70%_30%]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="row-[1/3] col-[1/2]"
                />
                <figcaption className="row-[2/3] col-[1/2] bg-teal-800 p-2 text-white opacity-75">
                  <h2 className="text-sm font-semibold">{caption.title}</h2>
                  <p className="text-xs">{caption.text}</p>
                </figcaption>
              </figure>

              {index === 0 && (
                <span className="absolute border border-white p-1 text-white top-2 left-4 flex flex-col gap-1 text-xs">
                  <span>container: grid-rows-[70%_30%]</span>
                  <span>image: row-[1/3] col-[1/2]</span>
                  <span>text: row-[2/3] col-[1/2]</span>
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Page
