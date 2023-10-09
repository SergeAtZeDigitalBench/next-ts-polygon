import Image from 'next/image'

import { IPhoto } from '@/types'

interface IProps {
  photo: IPhoto
}

const Frame = ({ photo }: IProps): JSX.Element => {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </>
  )
}

export default Frame
