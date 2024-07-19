import type { PageProps } from '@/types'

const Page = async ({ params, searchParams }: PageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Title</h1>
    </>
  )
}

export default Page
