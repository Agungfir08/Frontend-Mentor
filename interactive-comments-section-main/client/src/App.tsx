import CommentForm from './components/comments/CommentForm';
import Comments from './components/comments/Comments';
import { CommentFormSkeleton, CommentSkeleton } from './components/Skeletons';
import useFetch from './hooks/useFetch';
import { CURRENT_USER } from './lib/constant';

export default function App() {
    const { data: comments, loading } = useFetch<Comment[]>('comments');

    console.log(comments);
    return (
        <main className="px-4 py-8 lg:py-16">
            <div className="w-full max-w-[750px] mx-auto space-y-5">
                {loading
                    ? (
                        <>
                            {Array.from({ length: 3 }, (_, index) => (
                                <CommentSkeleton key={index} />
                            ))}
                            <CommentFormSkeleton />
                        </>
                    )
                    : (
                        <>
                            {comments?.map((comment) => (
                                <Comments key={comment.id} comment={comment} />
                            ))}

                            <CommentForm user={CURRENT_USER} />
                        </>
                    )}
            </div>
        </main>
    );
}
