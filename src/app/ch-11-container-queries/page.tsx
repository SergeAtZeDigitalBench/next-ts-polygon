const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        ch-11-container-queries
      </h1>
      <div className="max-w-3xl mx-auto my-4 flex flex-col gap-4">
        <p>
          Containers - <b>are the elements being queried</b> , not the window
          screen itself. Container size queries - are addition to media queries,
          NOT the replacement of them.
        </p>
        <p>
          Rules within container - affect the descendants only, NOT the
          container itself.
        </p>
        <p>
          There are currently two types of container queries: Container size
          queries and container style queries. Size queries are well-supported.
          Style queries are not well-supported as of this recording.
        </p>
      </div>
    </>
  )
}

export default Page
