import PetsList from '@/components/PetsList'
import { getPets } from '@/lib/fetch'

const Homepage = async () => {
  const [pets, error] = await getPets()

  console.log('pets :>> ', { pets, error })

  console.log('process.env.NEXT_RUNTIME :>> ', process.env.NEXT_RUNTIME)

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>
      <h2 className="text-xl font-bold text-center underline">Server fetch:</h2>
      <ul className="border-b-2 border-gray-500 p-2 pl-4 my-4 list-disc">
        {pets &&
          pets.map((pet) => {
            return <li key={pet}>{pet}</li>
          })}

        {error && (
          <li className="text-center text-sm my-2 font-semibold text-red-700">
            {error}
          </li>
        )}
      </ul>
      <h2 className="text-xl font-bold text-center underline my-4">
        Browser fetch:
      </h2>
      <PetsList />
    </div>
  )
}

export default Homepage
