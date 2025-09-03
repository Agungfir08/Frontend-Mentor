import {daysAgo, monthsAgo, weeksAgo} from './utils';

export interface User {
    id: number;
    userInfo: {
        image: {
            png: string;
            webp: string;
        };
        username: string;
    };
}

export interface CommentBase {
    id: number;
    content: string;
    createdAt: Date;
    score: number;
    user: User;
}

export interface Comment extends CommentBase {
    replies: Reply[];
}

export interface Reply extends CommentBase {
    replyingTo: string;
}

export const USERS: User[] = [
    {
        id: 1,
        userInfo: {
            image: {
                png: '/avatars/image-juliusomo.png',
                webp: '/avatars/image-juliusomo.webp',
            },
            username: 'juliusomo',
        },
    },
    {
        id: 2,
        userInfo: {
            image: {
                png: '/avatars/image-amyrobson.png',
                webp: '/avatars/image-amyrobson.webp',
            },
            username: 'amyrobson',
        },
    },
    {
        id: 3,
        userInfo: {
            image: {
                png: '/avatars/image-maxblagun.png',
                webp: '/avatars/image-maxblagun.webp',
            },
            username: 'maxblagun',
        },
    },
    {
        id: 4,
        userInfo: {
            image: {
                png: '/avatars/image-ramsesmiron.png',
                webp: '/avatars/image-ramsesmiron.webp',
            },
            username: 'ramsesmiron',
        },
    },
];

export const COMMENTS: Comment[] = [
    {
        id: 1,
        content:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: monthsAgo(1),
        score: 12,
        user: USERS[1],
        replies: [],
    },
    {
        id: 2,
        content:
            "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: weeksAgo(2),
        score: 5,
        user: USERS[2],
        replies: [
            {
                id: 3,
                content:
                    "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                createdAt: weeksAgo(1),
                score: 4,
                replyingTo: 'maxblagun',
                user: USERS[3],
            },
            {
                id: 4,
                content:
                    "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                createdAt: daysAgo(2),
                score: 2,
                replyingTo: 'ramsesmiron',
                user: USERS[0],
            },
        ],
    },
];

export const CURRENT_USER: User = USERS[0];
