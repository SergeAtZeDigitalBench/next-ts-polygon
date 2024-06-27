import { redirect } from 'next/navigation'
import Link from 'next/link'

import type { PageProps } from '@/types'

import DisplayTodo from '@/components/DisplayTodo'

const TodoPage = async ({ params }: PageProps<{ todoId: string }>) => {
  const { todoId } = params

  return <DisplayTodo todoId={todoId} />
}

export default TodoPage
