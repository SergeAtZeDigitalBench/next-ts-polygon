import { IBlogpostDb, IBlogpost } from '@/types'

export const formatBlogpost = ({
  createdAt,
  updatedAt,
  ...restBp
}: IBlogpostDb): IBlogpost => ({
  createdAt: createdAt.toISOString(),
  updatedAt: updatedAt.toISOString(),
  ...restBp,
})

export const formatBlogpostList = (bpList: IBlogpostDb[]): IBlogpost[] =>
  bpList.map(formatBlogpost)
