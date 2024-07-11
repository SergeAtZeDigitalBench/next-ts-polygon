/* eslint-disable @next/next/no-img-element */
const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Pictures</h1>
      <h2 className="text-2xl my-4 font-bold underline text-center">
        The case when: You decide which image displays
      </h2>

      <picture className="mx-auto max-w-7xl flex justify-center my-8">
        <source
          srcSet="/images/fem-moons-large_935px_334px.jpg"
          media="(min-width: 1200px)"
        />
        <source
          srcSet="/images/fem-moons-med-square_835px_835px.jpg"
          media="(min-width: 900px)"
        />
        <source
          srcSet="/images/fem-moons-small_vertical_291px_858px.jpg"
          media="(min-width: 600px)"
        />
        <img
          src="/images/fem-moons-default_square_300px_300px.jpg"
          alt="Io, Europa, Ganymede, and Callisto, showing relative size."
        />
      </picture>

      <h2 className="text-2xl my-4 font-bold underline text-center">
        The case when: srcset and sizes, the browser decides which image
        displays
      </h2>
      <pre>
        <code>
          {`
          <img
            src="/images/fem-moons-default_square_300px_300px.jpg"
            srcSet="large.jpg 1024w,
                    medium.jpg 640w,
                    small.jpg 320w"
            sizes="(min-width: 36em) 33.3vw, 100vw"
            alt="A rad wolf"
          />
          `}
        </code>
      </pre>

      <div className="flex justify-center">
        <img
          src="/images/fem-moons-default_square_300px_300px.jpg"
          srcSet="/images/fem-moons-large_935px_334px.jpg 1024w,
                    /images/fem-moons-med-square_835px_835px.jpg 640w,
                    /images/fem-moons-small_vertical_291px_858px.jpg 320w"
          sizes="(min-width: 36em) 33.3vw, 100vw"
          alt="Moons"
        />
      </div>
    </>
  )
}

export default Page
