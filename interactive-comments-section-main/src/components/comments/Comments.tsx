import {
    CURRENT_USER,
    type Comment,
    type CommentBase,
    type Reply,
} from '../../lib/constant';
import Badges from '../Badges';
import { ButtonUpvote } from '../Button';

type CommentsProps = Omit<Comment, 'id'>;
type CardCommentProps = Partial<Pick<Reply, 'replyingTo'>> &
    Omit<CommentBase, 'id'>;

function Comments({ comment }: { comment: CommentsProps }) {
    return (
        <div>
            <CardComment {...comment} />
            {comment.replies.length > 0 && (
                <div className="flex mt-5">
                    <div className="bg-grey-100 w-1 mr-8 lg:mx-10" />
                    <div className="space-y-5">
                        {comment.replies.map((reply) => (
                            <CardComment key={reply.id} {...reply} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function CardComment({
    user,
    createdAt,
    content,
    score,
    replyingTo,
}: CardCommentProps) {
    const isCurrentUser = CURRENT_USER.id === user.id;
    return (
        <div className="bg-white flex flex-col-reverse lg:flex-row gap-6 p-4 lg:p-6 rounded-xl">
            <ButtonUpvote
                text={score}
                onClickPlus={() => {}}
                onClickMinus={() => {}}
            />
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <img
                        src={user.userInfo.image.webp}
                        alt="User Avatar"
                        className="size-8"
                    />
                    <div className="flex items-center gap-2">
                        <p className="text-grey-800 font-semibold">
                            {user.userInfo.username}
                        </p>
                        {isCurrentUser && <Badges />}
                    </div>
                    <p className="font-normal text-grey-500">{createdAt}</p>
                </div>
                <p className="font-normal text-grey-500 tracking-wide leading-6">
                    {replyingTo && (
                        <span className="text-purple-600 font-semibold">
                            @{replyingTo}
                        </span>
                    )}{' '}
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Comments;
