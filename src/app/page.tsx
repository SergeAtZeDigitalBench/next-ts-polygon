import React from 'react'

import { IPageProps } from '@/types'
import SocketsMessage from '@/components/SocketsMessage'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V13 POLYGON
      </h1>
      <SocketsMessage />
    </>
  )
}

export default Homepage
