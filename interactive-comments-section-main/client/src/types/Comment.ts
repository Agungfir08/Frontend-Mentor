export interface UserInfo {
    id: string;
    username: string;
    userImage: string;
}

export interface CommentBase {
    id: string;
    content: string;
    createdAt: string;
    upvoted: number;
    user: UserInfo;
    commentParentId?: string | null;
}

export interface CommentReplies extends CommentBase {
    replyingUser?: UserInfo | null;
}

export interface Comment extends CommentBase {
    replies: CommentReplies[];
}