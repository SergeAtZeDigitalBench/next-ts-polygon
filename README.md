## Drizzle / Sqlite:

1. `yarn add drizzle-orm better-sqlite3 && yarn add -D drizzle-kit @types/better-sqlite3`
2. drizzle.config.ts
```ts
import type { Config } from 'drizzle-kit'
export default {
  dialect: 'sqlite',
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db/migrations',
  dbCredentials: {
    url: './sqlite.db',
  },
} satisfies Config
```
3. ./src/lib/db/schema.ts
```ts
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  username: text('username').unique().notNull(),
  email: text('email').unique().notNull(),
})
```
4. src/lib/db/index.ts
```ts
import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from './schema'
const sqlite = new Database('sqlite.db')
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
  schema,
})
```
5. package.json
```json
{
  "scripts": {
    "generate": "drizzle-kit generate",
    "migrate": "drizzle-kit migrate",
    "studio": "drizzle-kit studio"
  }
}
```
6. update `tscongig.json`
```json
{
  "compilerOptions": {
    "target": "ESNext",
  }
}
```
or, alternatively you will need to use `var` instead of `const` in your schema definition: `src/lib/db/schema.ts`
7. run scripts to generate and migrate
```sh
$ yarn generate
$ yarn migrate
```

8. IN order to run the Drizzle-Kit Studio, you'll need to have `mkcert` installed to authorise the browser running this studio app. So first:
8. IN order to run the Drizzle-Kit Studio, you'll need to have `mkcert` installed to authorise the browser running this studio app. [see this post](https://github.com/drizzle-team/drizzle-kit-mirror/issues/185) So first:
- `brew install mkcert`
then:
- `mkcert -install`
9. After that you can run Drizzle-Kit Studio in your browser:
```sh
$ yarn studio
```


### Intro to Next.js V3

https://scottmoss.notion.site/scottmoss/Intro-to-Next-js-V3-6cefbdba58d94e3897dcb8d7e7fc0337

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
