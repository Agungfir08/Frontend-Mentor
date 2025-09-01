import { Request, Response } from 'express';
import { db } from '../db';
import { comments } from '../db/schema';
import { eq, isNull } from 'drizzle-orm';

export async function getAllComments(req: Request, res: Response) {
    try {
        // First get only top-level comments (with no parent)
        const topLevelComments = await db.query.comments.findMany({
            where: isNull(comments.commentParentId),
            with: {
                user: {
                    columns: {
                        id: true,
                        username: true,
                        userImage: true,
                    },
                },
            },
        });

        // For each top-level comment, fetch its replies
        const commentsWithReplies = await Promise.all(
            topLevelComments.map(async (comment) => {
                const replies = await db.query.comments.findMany({
                    where: eq(comments.commentParentId, comment.id),
                    with: {
                        user: {
                            columns: {
                                id: true,
                                username: true,
                                userImage: true,
                            },
                        },
                        replyingUser: {
                            columns: {
                                id: true,
                                username: true,
                                userImage: true,
                            },
                        },
                    },
                });

                return {
                    ...comment,
                    replies,
                };
            })
        );

        res.status(200).json({
            message: 'Comments fetched successfully',
            data: commentsWithReplies,
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function createComment(req: Request, res: Response) {
    const { content, userId, commentParentId, replyingTo } = req.body;

    try {
        const newComment = await db.insert(comments).values({
            content,
            userId,
            commentParentId: commentParentId || null,
            replyingTo: replyingTo || null,
        });

        if (!newComment) {
            return res.status(400).json({ error: 'Failed to create comment' });
        }

        res.status(201).json({
            message: 'Comment created successfully',
            data: newComment,
        });
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function editComment(req: Request, res: Response) {
    const { id } = req.params;
    const { content } = req.body;

    try {
        const updatedComment = await db
            .update(comments)
            .set({ content })
            .where(eq(comments.id, id));

        if (!updatedComment) {
            return res.status(400).json({ error: 'Failed to update comment' });
        }

        res.status(200).json({
            message: 'Comment updated successfully',
            data: updatedComment,
        });
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function deleteComment(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const deletedComment = await db
            .delete(comments)
            .where(eq(comments.id, id));

        if (!deletedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
