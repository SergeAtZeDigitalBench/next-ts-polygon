import AuthStatusDisplay from '@/components/AuthStatusDisplay'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Hellow Coffee masters App! ☕️
      </h1>
      <AuthStatusDisplay isAuthenticated={false} />
    </>
  )
}

export default Homepage
