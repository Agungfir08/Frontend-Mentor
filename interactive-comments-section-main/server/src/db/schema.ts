import { randomUUID } from 'crypto';
import { relations } from 'drizzle-orm';
import {
    AnyPgColumn,
    foreignKey,
    integer,
    pgTable,
    text,
    timestamp,
    unique,
    uuid,
    varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: uuid('id')
        .primaryKey()
        .notNull()
        .$defaultFn(() => randomUUID()),
    username: varchar('username', { length: 255 }).unique().notNull(),
    userImage: text('userImage').notNull(),
});

export const comments = pgTable('comments', {
    id: uuid('id')
        .primaryKey()
        .notNull()
        .$defaultFn(() => randomUUID()),
    content: text('content').notNull(),
    upvoted: integer('upvoted').notNull().default(0),
    userId: uuid('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    commentParentId: uuid('comment_parent_id').references(
        (): AnyPgColumn => comments.id
    ),
    replyingTo: uuid('replying_to').references((): AnyPgColumn => users.id),
    createdAt: timestamp('created_at', { withTimezone: true })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
        .defaultNow()
        .notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
    comments: many(comments),
}));

export const commentRelations = relations(comments, ({ one }) => ({
    user: one(users, {
        fields: [comments.userId],
        references: [users.id],
    }),
    parent: one(comments, {
        fields: [comments.commentParentId],
        references: [comments.id],
    }),
    replyingUser: one(users, {
        fields: [comments.replyingTo],
        references: [users.id],
    }),
}));
