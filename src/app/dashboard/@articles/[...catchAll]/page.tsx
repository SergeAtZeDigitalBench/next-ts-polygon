type PageProps<P = Record<string, string>, Q = Record<string, string>> = {
  params: P
  searchParams: Q
}

const CatchAllPage = async (props: any) => {
  console.log('CatchAllPage/props :>> ', props)
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center bg-red-500 p-2 rounded-lg text-slate-100 flex flex-col gap-2">
        <span>Catch All in Articles</span>
        <span className="text-center text-sm">
          Because Articles page does not have the Settings page, so the Catch
          All page provides a backup
        </span>
      </h1>
    </>
  )
}

export default CatchAllPage
