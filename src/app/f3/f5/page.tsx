import Link from 'next/link'

const F5Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">F5 page</h1>
      <nav className="flex gap-2 justify-center">
        <Link href="/f3" className=" text-pink-950 hover:underline">
          F3
        </Link>
        <Link href="/f3/f4" className=" text-pink-950 hover:underline">
          F4
        </Link>
      </nav>
    </>
  )
}

export default F5Page
