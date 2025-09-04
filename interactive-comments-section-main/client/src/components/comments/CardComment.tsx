import type {CommentReplies, UserInfo} from "../../types/Comment.ts";
import {useState} from "react";
import clsx from "clsx";
import {ButtonIcon, ButtonUpvote} from "../Button.tsx";
import Badges from "../Badges.tsx";
import {formatTimeAgo} from "../../lib/utils.ts";
import CommentForm from "./CommentForm.tsx";
import {useEditComment, useReplyComment, useUpvote} from "../../hooks/mutation.ts";
import {getLocalStorage, removeLocalStorage, setLocalStorage} from "../../hooks/useLocalStorage.ts";
import {useModalContext} from "../../hooks/useModalContext.tsx";

export default function CardComment({
                                        id,
                                        user,
                                        createdAt,
                                        content,
                                        replyingUser,
                                        upvoted,
                                        activeUser,
                                        commentParentId
                                    }: CommentReplies & { activeUser: UserInfo | undefined }) {
    const [isReplying, setIsReplying] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const isCurrentUser = activeUser?.id === user.id
    const dataLocalStorage = getLocalStorage(id)
    const isUpvoted = dataLocalStorage === 'upvote'
    const {mutate: replyComment, isPending: replyLoading} = useReplyComment()
    const {mutate: editComment, isPending: updateLoading} = useEditComment()
    const {mutate: upvoteComment} = useUpvote()
    const {openModal} = useModalContext()

    const handleReplyComment = (commentContent: string) => {
        if (!activeUser) return;
        replyComment({
            commentContent: commentContent,
            userId: activeUser.id,
            parentCommentId: commentParentId || id,
            replyingUserId: user.id
        }, {
            onSuccess: () => {
                setIsReplying(false)
            }
        })
    }

    const handleEditComment = (commentContent: string) => {
        if (!activeUser) return;
        editComment({
            commentId: id,
            content: commentContent,
        }, {
            onSuccess: () => {
                setIsEditing(false)
            }
        })
    }

    const handleUpvote = () => {
        if (isUpvoted) return;
        upvoteComment({
            commentId: id,
            upvote: upvoted + 1
        }, {
            onSuccess: () => {
                setLocalStorage(id, 'upvote')
            }
        })
    }

    const handleDownvote = () => {
        if (!isUpvoted) return;
        upvoteComment({
                commentId: id,
                upvote: upvoted - 1
            }, {
                onSuccess: () => {
                    removeLocalStorage(id)
                }
            }
        )
    }

    return (
        <div data-testid={`card-${id}`} className={clsx({'space-y-5': isReplying,})}>
            <div className="bg-white flex flex-col-reverse lg:flex-row gap-6 p-4 lg:p-6 rounded-xl">
                <div className='max-lg:flex max-lg:items-center max-lg:justify-between'>
                    <ButtonUpvote
                        text={upvoted}
                        onClickPlus={handleUpvote}
                        onClickMinus={handleDownvote}
                        disabledMinus={!isUpvoted}
                        disabledPlus={isUpvoted}
                    />
                    <div className='lg:hidden'>
                        {
                            isCurrentUser ? (
                                    <div className='flex items-center gap-3.5'>
                                        <ButtonIcon onClick={() => openModal(id)} type='delete'/>
                                        <ButtonIcon onClick={() => setIsEditing((prev) => !prev)} type='edit'/>
                                    </div>
                                ) :
                                <ButtonIcon onClick={() => setIsReplying((prev) => !prev)} type='reply'/>
                        }
                    </div>
                </div>
                <div className="space-y-4 flex-1">
                    <div className="flex items-center w-full justify-between">
                        <div className='flex items-center gap-4'>
                            <img
                                src={user.userImage}
                                alt="User Avatar"
                                className="size-8"
                            />
                            <div className="flex items-center gap-2">
                                <p className="text-grey-800 font-semibold">
                                    {user.username}
                                </p>
                                {isCurrentUser && <Badges/>}
                            </div>
                            <p className="font-normal text-grey-500">
                                {formatTimeAgo(createdAt)}
                            </p>
                        </div>
                        <div className='max-lg:hidden'>
                            {
                                isCurrentUser ? (
                                        <div className='flex items-center gap-6'>
                                            <ButtonIcon onClick={() => openModal(id)} type='delete'/>
                                            <ButtonIcon onClick={() => setIsEditing((prev) => !prev)} type='edit'/>
                                        </div>
                                    ) :
                                    <ButtonIcon onClick={() => setIsReplying((prev) => !prev)} type='reply'/>
                            }
                        </div>
                    </div>
                    {isEditing ? (
                        <CommentForm user={activeUser} submitForm={handleEditComment} initialValue={content}
                                     isEditing={true} loading={updateLoading}/>
                    ) : (
                        <p className="font-normal text-grey-500 tracking-wide leading-6">
                            {replyingUser && (
                                <span className="text-purple-600 font-semibold">
                            @{replyingUser.username}
                        </span>
                            )}{' '}
                            {content}
                        </p>
                    )}
                </div>
            </div>
            {isReplying && (
                <CommentForm user={activeUser} submitForm={handleReplyComment} loading={replyLoading}/>
            )}
        </div>
    );
}