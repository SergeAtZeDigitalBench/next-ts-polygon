import { PageProps } from '@/types'

const TodoPage = async ({ params }: PageProps<{ todoId: string }>) => {
  const { todoId } = params
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Title</h1>
    </>
  )
}

export default TodoPage
