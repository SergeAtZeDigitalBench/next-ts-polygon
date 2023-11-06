'use client'

import { useState } from 'react'
import { faker } from '@faker-js/faker/locale/en'
import useSWR from 'swr'

import { IProduct } from '@/types'

const LIMIT = 6
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

let cache: IProduct[] = []

const productsFetcher = async (limit: number) => {
  await pause(800)
  const nextPage = new Array(limit).fill(0).map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productDescription(),
      color: faker.color.rgb({ prefix: '#', casing: 'lower' }),
    }
  })
  cache = [...cache, ...nextPage]
  return cache
}

interface IHookProps {
  limit?: number
}
export const useProducts = ({ limit = LIMIT }: IHookProps) => {
  const [page, setPage] = useState(0)

  const { isLoading, data } = useSWR(
    `/products/?page=${page}`,
    () => productsFetcher(limit),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      keepPreviousData: true,
    }
  )

  return {
    fetchNextPage: () => setPage((p) => p + 1),
    products: data || [],
    isLoading,
  }
}
