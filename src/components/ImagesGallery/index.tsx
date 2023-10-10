import React from 'react'

import ImgContainer from '@/components/ImgContainer'
import { ImagesResults } from '@/models/images'
import { env } from '@/constants/env'
import { fetchImages } from '@/lib/fetch'

interface IProps {
  topic?: string
}

const Gallery = async ({ topic }: IProps) => {
  const endpoint = !!topic ? `/search?query=${topic}&page=1` : `/curated?page=1`

  const url = env.PEXELS_API_URL + endpoint

  const images: ImagesResults | undefined = await fetchImages(url)

  if (!images || images.per_page === 0) {
    return <h2 className=" text-2xl font-bold m-4">No images found.</h2>
  }

  return (
    <section>
      <ul className=" px-2 my-3 grid gap-2 grid-cols-gallery">
        {images.photos.map((image) => (
          <ImgContainer key={image.id} photo={image}></ImgContainer>
        ))}
      </ul>
    </section>
  )
}

export default Gallery
