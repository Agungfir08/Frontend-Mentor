import type {UserInfo} from "../../types/Comment.ts";
import {Button} from '../Button';
import {useEffect, useState} from "react";
import clsx from "clsx";

interface CommentFormProps {
    user: UserInfo | undefined;
    submitForm: (comment: string) => void;
    loading?: boolean;
    isEditing?: boolean;
    initialValue?: string
    isSuccess?: boolean;
}

function CommentForm({
                         user,
                         submitForm,
                         loading,
                         isEditing = false,
                         initialValue = '',
                         isSuccess
                     }: CommentFormProps) {

    const [comment, setComment] = useState<string>(initialValue)

    useEffect(() => {
        if (isSuccess) {
            setComment('');
        }
    }, [isSuccess]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trim = comment.trim();
        if (!trim) return;
        submitForm(trim);
    }

    const buttonIsDisabled = loading || comment.trim().length === 0;
    const buttonText = loading
        ? isEditing ? "updating" : "sending"
        : isEditing ? "update" : "send";
    return (
        <form onSubmit={handleSubmit}>
            <div className={clsx("bg-white rounded-lg w-full flex gap-4",
                {
                    'p-4 lg:p-6 max-lg:flex-wrap lg:flex-row': !isEditing,
                    'flex-wrap': isEditing,
                })}>
                {!isEditing && (
                    <img
                        src={user?.userImage}
                        alt={`${user?.username}'s avatar`}
                        className="size-8 max-lg:mr-auto max-lg:my-auto"
                    />
                )}
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Add a comment..."
                    autoFocus={true}
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-gray-100 w-full rounded-md px-6 py-3 focus:outline-none focus:ring-1 focus:ring-purple-600 cursor-pointer max-lg:order-first"
                />
                <div className={clsx({
                    'flex w-full justify-end': isEditing,
                })}>
                    <Button text={buttonText} disabled={buttonIsDisabled} htmlType='submit'/>
                </div>
            </div>
        </form>
    );
}

export default CommentForm;
