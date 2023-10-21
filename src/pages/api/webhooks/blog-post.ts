import { NextApiRequest, NextApiResponse } from 'next'
import { createBlogpost } from '@/lib/api'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(403).send('Method not allowed')
    return
  }
  console.log('req.url :>> ', req.url)
  console.log('req.body :>> ', req.body)

  const { title, body } = JSON.parse(req.body)

  const [newBlog, error] = await createBlogpost({ title, body })

  console.log('pages/api/ newBlog :>> ', newBlog)

  if (error) {
    console.log('Webhook error :>> ', error)
  } else {
    console.log('success revalidating page... ')
    // res.revalidate('/blog-posts')
    res.setHeader('Location', '/blog-posts')
  }

  res.status(302).end()
}

export default handler
