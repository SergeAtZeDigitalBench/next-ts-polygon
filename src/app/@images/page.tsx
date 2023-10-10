import { IPageProps } from '@/types'
import ImagesGallery from '@/components/ImagesGallery'

const ImagesPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">Images</h1>
      {/* @ts-ignore server component */}
      <ImagesGallery topic="cars" />
    </>
  )
}

export default ImagesPage
