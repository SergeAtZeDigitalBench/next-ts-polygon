import Link from 'next/link'

const F2Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-4">F2 page</h1>
      <Link href="/f1">F1</Link>
    </>
  )
}

export default F2Page
