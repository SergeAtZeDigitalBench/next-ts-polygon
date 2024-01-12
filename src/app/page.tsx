import { IPageProps } from '@/types'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
        className="heroImage mx-auto"
      />
      <h1 className="pageTitle">Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </>
  )
}

export default Homepage
