import { Suspense } from 'react'

import TodosListSsr, { Loading } from '@/components/TodosList/TodosListSsr'
import TodosList from '@/components/TodosList'

export const dynamic = 'force-dynamic'

const PetsPage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Pets</h1>
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore server component */}
        <TodosListSsr />
      </Suspense>
      <TodosList />
    </>
  )
}

export default PetsPage
