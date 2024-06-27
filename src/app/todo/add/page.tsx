import { redirect } from 'next/navigation'

import CreateUpdateForm from '@/components/CreateUpdateForm'
import { addTodoServerAction } from '@/lib/db/todos'

const AddTodoPage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Add Todo Page
      </h1>
      <CreateUpdateForm
        onSubmit={async (values) => {
          'use server'

          const { data, message, error } = await addTodoServerAction(values)
          if (!!data) {
            redirect('/')
          }
        }}
      />
    </>
  )
}

export default AddTodoPage
