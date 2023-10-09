import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { PHOTOS } from '@/constants'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {PHOTOS.map(({ id, imageSrc }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Homepage
