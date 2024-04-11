import { http, HttpResponse, HttpResponseResolver, delay } from 'msw'

import type { Todo } from '../../types'

const todosResolver: HttpResponseResolver<never, never, Todo[]> = async ({
  request,
  params,
  cookies,
}) => {
  await delay(800)
  return HttpResponse.json([
    {
      userId: 1112,
      id: 116,
      title: 'Mock Title One',
      completed: true,
    },
    {
      userId: 1111,
      id: 117,
      title: 'Mock Title Two',
      completed: true,
    },
  ])
}

const petsResolver: HttpResponseResolver = async ({
  request,
  params,
  cookies,
}) => {
  await delay(800)
  return HttpResponse.json({ data: ['Tom', 'Jerry', 'Spike'] })
}

export const handlers = [
  http.get('https://api.example.com/pets', petsResolver),
  http.get('https://jsonplaceholder.typicode.com/todos', todosResolver),
]
