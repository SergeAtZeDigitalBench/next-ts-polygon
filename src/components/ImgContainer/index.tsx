import React from 'react'
import Image from 'next/image'

import { Photo } from '@/models/images'

interface IProps {
  photo: Photo
}

const ImgContainer = ({ photo }: IProps): JSX.Element => {
  const { src, alt, blurredDataUrl } = photo

  return (
    <li className=" h-64 bg-gray-200 rounded-xl relative overflow-hidden">
      <Image
        src={src.large}
        alt={alt}
        fill
        placeholder={blurredDataUrl ? 'blur' : 'empty'}
        blurDataURL={blurredDataUrl}
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        className="object-cover hover:opacity-75"
      />
    </li>
  )
}

export default ImgContainer
