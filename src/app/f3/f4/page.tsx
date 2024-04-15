import Link from 'next/link'

const F4Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">F4 page</h1>
      <nav className="flex gap-2 justify-center">
        <Link href="/f3" className=" text-pink-950 hover:underline">
          F3
        </Link>
        <Link href="/f3/f5" className=" text-pink-950 hover:underline">
          F5
        </Link>
      </nav>
    </>
  )
}

export default F4Page
