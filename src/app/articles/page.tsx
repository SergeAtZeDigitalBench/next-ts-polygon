import { Suspense } from 'react'

import TextContent from '@/components/TextContent'
import Article, { ArticleLoader } from '@/components/Article'

export const dynamic = 'force-dynamic'

const ArticlesPage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">
        Articles
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div className=" bg-slate-100 rounded p-1">
          <TextContent />
        </div>
        <div className="flex flex-col gap-2">
          <Suspense fallback={<ArticleLoader />}>
            {/* @ts-ignore server component */}
            <Article id={1} delay={800} />
          </Suspense>
          <Suspense fallback={<ArticleLoader />}>
            {/* @ts-ignore server component */}
            <Article id={2} delay={1700} />
          </Suspense>
          <Suspense fallback={<ArticleLoader />}>
            {/* @ts-ignore server component */}
            <Article id={3} delay={1000} />
          </Suspense>
          <Suspense fallback={<ArticleLoader />}>
            {/* @ts-ignore server component */}
            <Article id={4} delay={1200} />
          </Suspense>
          <Suspense fallback={<ArticleLoader />}>
            {/* @ts-ignore server component */}
            <Article
              id={5}
              delay={2000}
              error="Article Nr 5 failure on server"
            />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default ArticlesPage
