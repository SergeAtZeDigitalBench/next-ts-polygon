import { http, HttpResponse, HttpResponseResolver } from 'msw'

const petsResolver: HttpResponseResolver = ({ request, params, cookies }) => {
  return HttpResponse.json({ data: ['Tom', 'Jerry', 'Spike'] })
}

export const handlers = [http.get('https://api.example.com/pets', petsResolver)]
