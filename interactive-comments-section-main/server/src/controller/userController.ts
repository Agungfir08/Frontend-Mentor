import {Request, Response} from "express";
import {db} from "../db";
import {eq} from "drizzle-orm";
import {users} from "../db/schema";

export async function getCurrentUser(
    req: Request,
    res: Response,
) {
    try {
        const activeUser = await db.select().from(users).where(eq(users.username, 'juliusomo')).then(result => result[0]);

        if (!activeUser) {
            return res.status(404).json({error: 'User not found'})
        }


        res.status(200).json({
            message: 'User fetched successfully',
            data: activeUser,
        });
    } catch (error) {
        console.error('Error fetching current user:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}