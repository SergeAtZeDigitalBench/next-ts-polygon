import { Suspense } from 'react'

import PetsListSsr, { Loading } from '@/components/PetsList/PetsListSsr'
import PetsList from '@/components/PetsList'

export const dynamic = 'force-dynamic'

const PetsPage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Pets</h1>
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore server component */}
        <PetsListSsr />
      </Suspense>
      <PetsList />
    </>
  )
}

export default PetsPage
