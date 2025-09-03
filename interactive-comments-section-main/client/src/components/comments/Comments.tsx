import type {Comment, UserInfo} from "../../types/Comment.ts";
import CardComment from "./CardComment.tsx";

function Comments({comment, activeUser}: {
    comment: Comment,
    activeUser: UserInfo | undefined,
}) {
    return (
        <div>
            <CardComment {...comment} activeUser={activeUser}/>
            {comment.replies.length > 0 && (
                <div className='mt-5 flex'>
                    <div className='flex w-24 lg:w-52 lg:justify-center'>
                        <div className='w-0.5 h-full bg-grey-100'></div>
                    </div>
                    <div className="space-y-5">
                        {comment.replies.map((reply) => (
                            <CardComment key={reply.id} {...reply} activeUser={activeUser}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Comments;
