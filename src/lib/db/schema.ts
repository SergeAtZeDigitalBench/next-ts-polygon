import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'
import { sql, relations } from 'drizzle-orm'
import { randomUUID } from 'crypto'

export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .$default(() => randomUUID()),
  createdAt: text('createdAt')
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
  username: text('username').unique().notNull(),
  password: text('password').notNull(),
  email: text('email').unique().notNull(),
  isEmailConfirmed: integer('isEmailConfirmed', { mode: 'boolean' })
    .notNull()
    .default(false),
})

export const posts = sqliteTable('posts', {
  id: text('id')
    .primaryKey()
    .$default(() => randomUUID()),
  createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
  title: text('title').notNull(),
  content: text('content').notNull(),
  status: text('status', { enum: ['draft', 'published', 'hidden'] })
    .notNull()
    .default('draft'),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

export const userRelations = relations(users, ({ many }) => {
  return {
    posts: many(posts),
  }
})

export const postRelations = relations(posts, ({ one }) => {
  return {
    user: one(users, {
      fields: [posts.userId],
      references: [users.id],
    }),
  }
})
