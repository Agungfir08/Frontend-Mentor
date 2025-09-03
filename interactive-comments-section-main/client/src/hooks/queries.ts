import {useQuery} from "@tanstack/react-query";
import type {Comment, UserInfo} from "../types/Comment.ts";
import {api} from "../lib/api.ts";

export const COMMENTS_KEY = ['comments'] as const;
export const USER_KEY = ['user'] as const;

export function useComments() {
    return useQuery<Comment[]>({
        queryKey: COMMENTS_KEY,
        queryFn: async () => (await api.getComments()).data,
    })
}

export function useUser() {
    return useQuery<UserInfo>({
        queryKey: USER_KEY,
        queryFn: async () => (await api.getCurrentUser()).data,
    })
}