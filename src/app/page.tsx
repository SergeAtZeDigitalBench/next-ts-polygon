import PetsList from '@/components/PetsList'
import PetsListSsr from '@/components/PetsList/PetsListSsr'

const Homepage = async () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>
      {/* @ts-ignore server component */}
      <PetsListSsr />
      <PetsList />
    </div>
  )
}

export default Homepage
