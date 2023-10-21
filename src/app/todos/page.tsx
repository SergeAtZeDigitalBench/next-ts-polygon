import { revalidatePath } from 'next/cache'

import { getTodosList, toggleTodo, deleteTodo, formatTodos } from '@/lib/api'
import { IServerActionResponse } from '@/types'
import TodoCart from '@/components/TodoCart'
import AddForm from '@/components/AddForm'

const TodosPage = async () => {
  const [todos, error] = await getTodosList()
  const formattedTodos = todos ? formatTodos(todos) : []

  const toggleServerAction = async (
    id: string
  ): Promise<IServerActionResponse> => {
    'use server'
    const [_, error] = await toggleTodo(id)
    if (!error) {
      revalidatePath('/todos', 'page')
      return { message: 'ok' }
    } else {
      return { error: 'failed to update todo' }
    }
  }

  const deleteServerAction = async (
    id: string
  ): Promise<IServerActionResponse> => {
    'use server'
    const [_, error] = await deleteTodo(id)
    if (!error) {
      revalidatePath('/todos', 'page')
      return { message: 'ok' }
    } else {
      return { error: 'failed to update todo' }
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Todos</h1>
      <AddForm />
      {error && (
        <p className="text-center font-bold text-red-600 my-4">{error}</p>
      )}
      {!error && formattedTodos.length === 0 && (
        <p className="text-center font-bold my-4"> 🤷‍♂️ no todos</p>
      )}
      <div className="grid grid-cols-3 gap-2">
        {formattedTodos.map((todo) => (
          <TodoCart
            key={todo.id}
            todo={todo}
            toggleTodoServerAction={toggleServerAction}
            deleteTodoServerAction={deleteServerAction}
          />
        ))}
      </div>
    </>
  )
}

export default TodosPage
