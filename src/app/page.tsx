import MapView from '@/components/MapView'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Map view</h1>
      {/* @ts-ignore RSC */}
      <MapView />
    </>
  )
}

export default Homepage
