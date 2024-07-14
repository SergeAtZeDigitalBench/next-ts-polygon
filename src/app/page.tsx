import { main } from '@/lib/db/seed'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>

      <form>
        <button
          type="submit"
          formAction={async () => {
            'use server'
            await main()
          }}
          className="px-2 py-1 rounded bg-green-500 hover:bg-green-600"
        >
          seed database
        </button>
      </form>
    </>
  )
}

export default Homepage
