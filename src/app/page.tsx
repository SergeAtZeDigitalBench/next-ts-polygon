import type { IPageProps } from '@/types'

import PetsList from '@/components/PetsList'
import { getPets } from '@/lib/fetch'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  const [pets, error] = await getPets()

  console.log('pets :>> ', { pets, error })

  console.log('process.env.NEXT_RUNTIME :>> ', process.env.NEXT_RUNTIME)
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>
      <PetsList initialPets={pets} />
    </>
  )
}

export default Homepage
