import CommentForm from './components/comments/CommentForm';
import Comments from './components/comments/Comments';
import { COMMENTS, CURRENT_USER } from './lib/constant';

export default function App() {
    return (
        <main className="px-4 py-8 lg:py-16 flex flex-col justify-center items-center">
            <div className="space-y-5 max-w-[750px]">
                {COMMENTS.map((comment) => (
                    <Comments key={comment.id} comment={comment} />
                ))}
                <CommentForm user={CURRENT_USER} />
            </div>
        </main>
    );
}
