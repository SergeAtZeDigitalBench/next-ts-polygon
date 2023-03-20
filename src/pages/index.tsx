import React from "react"
import type { NextPage } from "next"
import Head from "next/head"

import { cars } from "@/data"
import Carousel from "@/components/basicCarousel/Carousel"

type PageProps = {}

const HomePage: NextPage<PageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Carousel list={cars} />
      </main>
    </>
  )
}

export default HomePage
