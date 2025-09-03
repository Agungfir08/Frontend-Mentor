import {randomUUID} from 'crypto';
import {db} from '../index';
import {comments, users} from '../schema';
import {COMMENTS, USERS} from '../../lib/constant';
import dotenv from 'dotenv';

dotenv.config();

type UserMapping = {
    [key: number]: string;
};

type UsernameMapping = {
    [username: string]: string;
};

async function clearDatabase() {
    console.log('Clearing existing data...');
    await db.delete(comments);
    await db.delete(users);
}

async function seedUsers(): Promise<{
    userMapping: UserMapping;
    usernameMapping: UsernameMapping;
}> {
    console.log('Seeding users...');

    const userMapping: UserMapping = {};
    const usernameMapping: UsernameMapping = {};

    for (const user of USERS) {
        const userImage = user.userInfo.image.png;
        const username = user.userInfo.username;

        const userId = randomUUID();

        await db.insert(users).values({
            id: userId,
            username: username,
            userImage: userImage,
        });

        userMapping[user.id] = userId;
        usernameMapping[username] = userId;
    }

    return {userMapping, usernameMapping};
}

async function seedComments(
    userMapping: UserMapping,
    usernameMapping: UsernameMapping
) {
    console.log('Seeding comments...');

    const commentMapping: { [key: number]: string } = {};

    for (const comment of COMMENTS) {
        const commentId = randomUUID();

        await db.insert(comments).values({
            id: commentId,
            content: comment.content,
            userId: userMapping[comment.user.id],
            upvoted: comment.score,
            updatedAt: comment.createdAt,
            createdAt: comment.createdAt,
        });

        commentMapping[comment.id] = commentId;

        if (comment.replies && comment.replies.length > 0) {
            for (const reply of comment.replies) {
                const replyId = randomUUID();

                const replyingToUserId = reply.replyingTo
                    ? usernameMapping[reply.replyingTo]
                    : null;

                await db.insert(comments).values({
                    id: replyId,
                    content: reply.content,
                    userId: userMapping[reply.user.id],
                    upvoted: reply.score,
                    commentParentId: commentId,
                    replyingTo: replyingToUserId,
                    createdAt: reply.createdAt,
                    updatedAt: reply.createdAt,
                });


            }
        }
    }
}

async function seed() {
    console.log('Starting database seeding...');

    try {
        await clearDatabase();

        const {userMapping, usernameMapping} = await seedUsers();
        await seedComments(userMapping, usernameMapping);

        console.log('Seeding completed successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }

    process.exit(0);
}

seed().catch((error) => {
    console.error('Unhandled error during seeding:', error);
    process.exit(1);
});
