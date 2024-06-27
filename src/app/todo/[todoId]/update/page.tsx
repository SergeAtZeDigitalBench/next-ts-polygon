import { PageProps } from '@/types'

const UpdateTodoPage = async ({ params }: PageProps<{ todoId: string }>) => {
  const { todoId } = params
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        UpdateTodoPage
      </h1>
    </>
  )
}

export default UpdateTodoPage
