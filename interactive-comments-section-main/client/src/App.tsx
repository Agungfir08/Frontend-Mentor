import {useComments, useUser} from "./hooks/queries.ts";
import {CommentFormSkeleton, CommentSkeleton} from "./components/Skeletons.tsx";
import Comments from "./components/comments/Comments.tsx";
import CommentForm from "./components/comments/CommentForm.tsx";
import {useCreateComment} from "./hooks/mutation.ts";

export default function App() {
    const {data: comments, isPending: commentLoading} = useComments()
    const {data: currentUser, isPending: formLoading} = useUser()
    const {mutate: createComment, isPending: submitLoading} = useCreateComment()

    const submitNewComment = async (commentContent: string) => {
        if (!currentUser) return;
        createComment({content: commentContent, userId: currentUser.id})
    };

    return (
        <main className="px-4 py-8 lg:py-16">
            <div className="w-full max-w-[750px] mx-auto space-y-5">
                {commentLoading ?
                    Array.from({length: 4}, (_, index) => (
                        <CommentSkeleton key={index}/>
                    ))
                    :
                    comments?.map((comment) => (
                        <Comments key={comment.id} comment={comment} activeUser={currentUser}
                        />
                    ))
                }
                {
                    formLoading ? (
                        <CommentFormSkeleton/>
                    ) : (
                        <CommentForm user={currentUser} submitForm={submitNewComment} loading={submitLoading}/>
                    )
                }
            </div>
        </main>
    );
}
