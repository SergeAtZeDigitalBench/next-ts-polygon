import { redirect } from 'next/navigation'
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query'

import type { PageProps } from '@/types'

import DisplayTodo from '@/components/DisplayTodo'
import { fetchTodoBy } from '@/lib/db/todos'

const TodoPage = async ({ params }: PageProps<{ todoId: string }>) => {
  const { todoId } = params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['todos', todoId],
    queryFn: () => fetchTodoBy({ id: todoId }),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DisplayTodo todoId={todoId} />
    </HydrationBoundary>
  )
}

export default TodoPage
