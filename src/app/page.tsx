import React from 'react'

import ControlledForm from '@/components/ControlledForm'
import { IPageProps } from '@/types'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Controlled input form
      </h1>
      <ControlledForm />
    </>
  )
}

export default Homepage
