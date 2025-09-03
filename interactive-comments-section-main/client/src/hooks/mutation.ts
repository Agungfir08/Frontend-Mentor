import {useMutation, useQueryClient} from "@tanstack/react-query";
import {api} from "../lib/api.ts";
import {COMMENTS_KEY} from "./queries.ts";

export function useCreateComment() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({content, userId}: { content: string, userId: string }) => api.createComment(content, userId),
        onSuccess: async () => {
            await qc.invalidateQueries({queryKey: COMMENTS_KEY})
        }
    })
}


export function useReplyComment() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({commentContent, userId, parentCommentId, replyingUserId}: {
            commentContent: string,
            userId: string,
            parentCommentId: string,
            replyingUserId: string
        }) => api.replyingComment(commentContent, userId, parentCommentId, replyingUserId),
        onSuccess: async () => {
            await qc.invalidateQueries({queryKey: COMMENTS_KEY})
        }
    })
}

export function useEditComment() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({commentId, content}: {
            commentId: string,
            content: string
        }) => api.editComment(commentId, content),
        onSuccess: async () => (
            await qc.invalidateQueries({queryKey: COMMENTS_KEY})
        )
    })
}

export function useUpvote() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({commentId, upvote}: {
            commentId: string,
            upvote: number
        }) => api.upvoteComment(commentId, upvote),
        onSuccess: async () => {
            await qc.invalidateQueries({queryKey: COMMENTS_KEY})
        }
    })
}

export function useDeleteComment() {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: ({commentId}: { commentId: string }) => api.deleteComment(commentId),
        onSuccess: async () => {
            await qc.invalidateQueries({queryKey: COMMENTS_KEY})
        }
    })
}