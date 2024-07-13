import type { Config } from 'drizzle-kit'

export default {
  dialect: 'sqlite',
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db/migrations',
  dbCredentials: {
    url: './sqlite.db',
  },
} satisfies Config
