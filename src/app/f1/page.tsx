import Link from 'next/link'

const F1Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">F1 page</h1>
      <Link href="/f1/f2">F2</Link>
    </>
  )
}

export default F1Page
