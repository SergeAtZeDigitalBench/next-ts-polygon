import { sqliteTable, AnySQLiteColumn, uniqueIndex, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
	username: text("username").notNull(),
	email: text("email").notNull(),
},
(table) => {
	return {
		email_unique: uniqueIndex("users_email_unique").on(table.email),
		username_unique: uniqueIndex("users_username_unique").on(table.username),
	}
});