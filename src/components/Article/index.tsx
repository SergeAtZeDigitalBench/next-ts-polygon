import { wait } from '@/lib/commmon'
import { fetchJSONPlaceholderData } from '@/lib/fetch'
import { IPost } from '@/types'

interface IProps {
  delay: number
  id: number
  error?: string
}

const getArticle = async ({
  delay,
  id,
  error,
}: IProps): Promise<[IPost, null] | [null, string]> => {
  try {
    await wait({ delay, error })
    const article = await fetchJSONPlaceholderData<IPost>(`/posts/${id}`)
    if (!article) {
      throw new Error(`Article by id: "${id}" not found`)
    }

    return [article, null]
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : `Failed to fetch article id: "${id}"`
    return [null, msg]
  }
}

const Article = async ({ delay, id, error }: IProps) => {
  const [article, errorMessage] = await getArticle({ delay, id, error })

  if (errorMessage) {
    return (
      <div className="flex flex-col justify-center gap-1 bg-slate-200 rounded p-1 min-h-[80px]">
        <h3 className="text-md font-semibold capitalize text-red-600">
          {errorMessage}
        </h3>
      </div>
    )
  }

  return article ? (
    <div className="flex flex-col justify-center gap-1 bg-slate-200 rounded p-1">
      <h3 className="text-md font-semibold capitalize">{article?.title}</h3>
      <p className="text-sm font-thin">{article?.body}</p>
    </div>
  ) : null
}

export const ArticleLoader = () => (
  <div className="flex flex-col justify-center gap-1 bg-slate-200 rounded p-1 min-h-[80px]">
    <h3 className="text-md font-semibold">******* ******* *******</h3>
    <p className="text-sm font-thin">
      *******************************************************************************
      *******************************************************************************
    </p>
  </div>
)

export default Article
