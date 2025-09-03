import type {UserInfo} from "../types/Comment.ts";

export const CURRENT_USER: Omit<UserInfo, 'id'> = {
    username: 'juliusomo',
    userImage: '/avatars/image-juliusomo.png',
};
