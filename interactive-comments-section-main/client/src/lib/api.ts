import type {Comment, UserInfo} from "../types/Comment.ts";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/';

async function request<TBody, TResponse>(path: string, method: HttpMethod, body?: TBody) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    return response.json() as Promise<TResponse>;
}

export const api = {
    getComments: () => request<null, { message: string, data: Comment[] }>('comments', 'GET'),
    getCurrentUser: () => request<null, { message: string, data: UserInfo }>('user', 'GET'),

    createComment: (commentContent: string, userId: string) => request<{
        content: string;
        userId: string;
        commentParentId?: string | null;
        replyingTo?: string | null;
    }, Comment>('comments', 'POST', {
        content: commentContent,
        userId,
    }),

    replyingComment: (commentContent: string, userId: string, parentCommentId: string, replyingUserId: string) => request<{
        content: string;
        userId: string;
        commentParentId: string;
        replyingTo: string;
    }, Comment>('comments', 'POST', {
        content: commentContent,
        userId,
        commentParentId: parentCommentId,
        replyingTo: replyingUserId,
    }),

    editComment: (commentId: string, commentContent: string) => request<{
        content: string;
    }, { message: string }>(`comments/${commentId}`, 'PUT', {
        content: commentContent,
    }),

    upvoteComment: (commentId: string, upvote: number) => request<{
        upvoted: number;
    }, { message: string }>(`comments/${commentId}/upvote`, 'PUT', {
        upvoted: upvote,
    }),

    deleteComment: (commentId: string) => request<null, { message: string }>(`comments/${commentId}`, 'DELETE'),
}