import Modal from '@/components/Modal'
import { getPostById } from '@/lib'

import type { PageProps } from '@/types'

const GalleryInterceptPage = async ({
  params,
}: PageProps<{ postId: string }>) => {
  const [post, error] = await getPostById(params.postId)

  return (
    <Modal>
      <div className="w-full bg-slate-300 rounded-lg p-2">
        <h1 className="text-3xl font-bold underline text-center my-4">
          {post?.title}
        </h1>
        <p className="text-center"> {post?.body}</p>
        {error && <p className="text-center text-red-700 my-4">{error}</p>}
      </div>
    </Modal>
  )
}

export default GalleryInterceptPage
