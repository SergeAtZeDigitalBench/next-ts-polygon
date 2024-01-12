import Link from 'next/link'

import ImageSlideshow from '@/components/ImageSlideshow'

const Homepage = async () => {
  return (
    <>
      <header className="flex gap-12 my-3 mx-auto w-[90%] max-w-[75rem]">
        <div className=" w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="heroHeading">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-4 text-base">
            <Link href="/community" className="ctaLink">
              Join the Community
            </Link>
            <Link href="/meals" className="ctaLink">
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="section">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="section">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}

export default Homepage
