import type { IPageProps } from '@/types'

import MapView from '@/components/MapView'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="my-8 text-5xl font-bold textGradient text-center">
        NEXT V.14 & MAPBOX
      </h1>
      <MapView />
    </>
  )
}

export default Homepage
