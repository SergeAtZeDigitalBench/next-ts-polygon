import PageTitle from '@/components/PageTitle'
import { IPageProps } from '@/types'

const MealDetailsPage = async ({ params }: IPageProps<{ slug: string }>) => {
  return (
    <>
      <PageTitle>Meal page: {params.slug}</PageTitle>
    </>
  )
}

export default MealDetailsPage
