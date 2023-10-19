import { db } from './db'

export const createBlogpost = async ({
  title,
  body,
}: {
  title: string
  body: string
}) => {
  const newBlogpost = await db.blogPost.create({
    data: {
      title,
      body,
    },
  })

  return newBlogpost
}

export const getBlogposts = () => db.blogPost.findMany()

export const getBlogpostById = (id: string) =>
  db.blogPost.findUniqueOrThrow({
    where: { id },
  })

export const updateBlogpost = async (
  id: string,
  data: { title?: string; body?: string }
) => {
  const updated = await db.blogPost.update({
    where: { id },
    data,
  })

  return updated
}

export const deleteBlogpost = async (id: string) => {
  const deleted = await db.blogPost.delete({
    where: { id },
  })

  return deleted.id
}
