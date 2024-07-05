import { serveMockData, articles } from '@/lib/mocks'
import ArticleCard from '@/components/ArticleCard'

const Homepage = async () => {
  const articleList = await serveMockData({ data: articles })
  return (
    <div className="grid grid-cols-gutter-grid">
      <div className=" col-full-bleed bg-sky-400 min-h-[20vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline text-center">
          NEXT V.14 POLYGON
        </h1>
      </div>
      <div></div>
      <ul className="my-4 p-4 bg-slate-200 grid row-span-3 gap-4 grid-cols-2 md:grid-cols-3">
        {articleList.map((article) => {
          return <ArticleCard key={article.id} article={article} />
        })}
      </ul>
      <div></div>
    </div>
  )
}

export default Homepage
