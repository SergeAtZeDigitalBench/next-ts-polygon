import Todos from '@/components/Todos'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Todos list</h1>
      <Todos />
    </>
  )
}

export default Homepage
