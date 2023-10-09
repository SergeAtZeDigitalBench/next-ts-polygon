import Frame from '@/components/Frame'
import { IPageProps } from '@/types'
import { PHOTOS } from '@/constants'

const getPhoto = (id: string) => PHOTOS.find((current) => current.id === id)

const PhotoPage = ({ params }: IPageProps<{ id: string }>): JSX.Element => {
  const photo = getPhoto(params.id)

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        {photo ? <Frame photo={photo} /> : <p>Not found.</p>}
      </div>
    </div>
  )
}

export default PhotoPage
