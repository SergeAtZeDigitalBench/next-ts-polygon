import type { PageProps } from '@/types'
import { fetchTodoBy, updateTodo } from '@/lib/db/todos'

const UpdateTodoPage = async ({ params }: PageProps<{ todoId: string }>) => {
  const { todoId } = params
  // const fetchedPromise = fetchTodoBy({ id: todoId })

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Update</h1>
    </>
  )
}

export default UpdateTodoPage
