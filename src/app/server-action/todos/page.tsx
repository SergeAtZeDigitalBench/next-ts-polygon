import DeleteTodoButton from '@/components/DeleteTodoButton'
import { deleteTodoServerAction } from '@/lib/serverActions'
import { db } from '@/lib/db'
import { ITodo } from '@/types'

const getTodos = async (): Promise<[ITodo[], null] | [null, string]> => {
  try {
    const todos = await db.todo.findMany()
    return [todos, null]
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to get todos'
    return [null, error]
  }
}

const TodosPage = async () => {
  const [todos, error] = await getTodos()

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Todos list</h1>

      {error && (
        <p className="text-red-600 text-lg font-semibold text-center my-4">
          {error}
        </p>
      )}
      {todos?.length === 0 && (
        <p className=" text-lg font-semibold text-center my-4">
          Todo list is empty
        </p>
      )}
      <ul className="grid grid-cols-gallery max-w-xl mx-auto gap-2 min-h-[250px] my-4">
        {todos &&
          todos.map(({ id, title }) => (
            <li
              key={id}
              className="bg-green-500 rounded-lg p-2 flex flex-col justify-center items-center"
            >
              <h4 className="text-lg font-semibold capitalize mb-4">{title}</h4>
              <DeleteTodoButton
                id={id}
                deleteServerAction={deleteTodoServerAction}
              />
            </li>
          ))}
      </ul>
    </>
  )
}

export default TodosPage
