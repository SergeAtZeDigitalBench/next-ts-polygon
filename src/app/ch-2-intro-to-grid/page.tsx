/* eslint-disable @next/next/no-img-element */

import { planetaryData } from '@/lib/mocks'

const ExercisePage = async () => {
  return (
    <>
      <h1>Galilean Moons of Jupiter</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem_2rem] ">
        {planetaryData.map(({ id, image, caption, citeLink }) => (
          <figure key={id}>
            <img src={image.src} alt={image.alt} className=" max-w-full" />
            <figcaption>
              {caption}
              <cite>
                <a href={citeLink.href} target="_blank">
                  {citeLink.title}
                </a>
              </cite>
            </figcaption>
          </figure>
        ))}
      </div>

      <h2 className="my-8 text-center text-2xl font-bold underline">
        Another layout
      </h2>

      <div className="grid lg:grid-cols-2 gap-[1rem_2rem] ">
        {planetaryData.map(({ id, image, caption, citeLink }) => (
          <figure
            key={id}
            className="grid gap-2 grid-cols-[1fr_2fr] items-center border border-red-600"
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

      <h2 className="my-8 text-center text-2xl font-bold underline">
        Another layout
      </h2>

      <div className="grid grid-cols-2 gap-[1rem_2rem] grid-rows-3">
        {planetaryData.map(({ id, image, caption, citeLink }) => (
          <figure
            key={id}
            className="grid gap-2 grid-cols-[1fr_2fr] items-center border border-red-600 first:col-[1/2] first:row-[1/4] first:block"
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
    </>
  )
}

export default ExercisePage
