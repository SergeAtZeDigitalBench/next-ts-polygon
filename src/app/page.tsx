import React from 'react'
import Header from '@/components/Header'
import { wait } from '@/lib'

const Homepage = async () => {
  await wait(1000)

  return (
    <>
      <Header>
        <h1 className="text-3xl font-bold underline text-center">
          Main page Header
        </h1>
      </Header>
    </>
  )
}

export default Homepage
