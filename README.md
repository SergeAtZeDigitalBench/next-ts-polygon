


## Webhooks - openAI - Socket IO
The motivation: the long calls to openAI API, have an option to pass a Next.js app webhook url on successfully created content
The webhook will revalidate the content list page ISR. However, in order to view the regenerated page - the page itself needs to be refreshed on client-side. Here the need for a ws or socket io connection arises.
3 API's in play: Next.js App Api, openAI API( mocked one ), Express server REST endpoints and Socket IO connection;

- openAI API, mocked by express server with delayed response: repo: `git@github.com:Sergei29/express-movie-api.git`, branch: `mock-open-ai-server`, url: `OPEN_AI_URL="http://localhost:3030"` in the `.env` file of this project
- REST API and Socket IO, express server: repo `git@github.com:Sergei29/express-websockets-server.git`, branch : `main`, url `NEXT_PUBLIC_SOCKET_IO_SERVER="http://localhost:4000"` in `.env` file of this project
- Next.js `app/api/webhooks/blog-post` this very app, API webhook handler.

### The sequence of events:
1. Navigate to `/blog-posts` page. Submit form with new Blog-post subject, which will be processed by server action then POST ed to openAI API to 
generate a new blogpost.
2. openAI API received POST request with blogpost subject - responded immediatelly 200 response body: {status: 'in progress'}
3. openAI API triggers a fetch POST message ( delayed to after ~ 5seconds ) to the provided Next.js webhook api url with the generated blogpost
( eg. `POST url "http://localhost:3000/api/webhooks/blog-post" body: { "title": "Lorem ipsum", "body": "Eum utpote bene alias tenus suggero..." }` )
4. Next.js app api webhook endpoint: receives the completed blogpost from openAI, saves it in the application database, revalidates page path ISR on-demand, then sends a GET fetch message to the Sockets Server that it can trigger the event ( eg. `GET url "http://localhost:4000/refresh-page?pathname=/blog-posts` )
5. Sockets Server, REST endpoint handler GET /refresh-page: when receives a GET request with query param `?pathname=`, it will emit socket IO event `refresh_page` with the payload specifying the pathname to refresh: (eg. `io.emit("refresh_page, {pathname: "/blog-posts"}")`)
6. Next.js app, client component on the `/blog-posts` page somwhere, captures this event and then triggers the page refresh via router api.
7. The overall outcome: page `/blog-posts` has been revalidated (ISR), then this page `/blog-posts`has been refreshed client-side to reflect automaticlly the new re-generated content.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
