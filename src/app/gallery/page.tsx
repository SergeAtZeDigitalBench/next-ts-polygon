import Link from 'next/link'

import { getPosts } from '@/lib'

const GalleryPage = async () => {
  const [posts, error] = await getPosts()

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-8">Gallery</h1>

      {error && (
        <p className=" bg-red-600 p-2 rounded-lg text-center text-slate-100">
          {error}
        </p>
      )}
      <ul className="grid grid-cols-gallery gap-2">
        {posts &&
          posts.slice(0, 12).map(({ id, title }) => {
            return (
              <li key={id} className="p-2 rounded-lg bg-pink-600">
                <Link
                  href={`/gallery/${id}`}
                  className="h-full w-full flex justify-center items-center text-slate-100 min-h-[150px]"
                >
                  <span>{title}</span>
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default GalleryPage
