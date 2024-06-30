import { redirect } from 'next/navigation'
import Link from 'next/link'

import type { PageProps } from '@/types'

import DisplayTodo from '@/components/DisplayTodo'

const TodoPage = async ({ params }: PageProps<{ todoId: string }>) => {
  const { todoId } = params

  return <h1>Todo ID: {todoId}</h1>
}

export default TodoPage
