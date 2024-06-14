import { IPageProps } from '@/types'

import TextInput from '@/components/TextInput'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>
      <TextInput />
    </>
  )
}

export default Homepage
