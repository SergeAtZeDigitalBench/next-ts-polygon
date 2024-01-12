import PageTitle from '@/components/PageTitle'
import { IPageProps } from '@/types'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <PageTitle>Time to get started!</PageTitle>
    </>
  )
}

export default Homepage
