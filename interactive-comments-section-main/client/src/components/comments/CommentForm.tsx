import type { User } from '../../lib/constant';
import { Button } from '../Button';

function CommentForm({ user }: { user: User }) {
    return (
        <div className="bg-white p-4 lg:p-6 rounded-lg w-full flex max-lg:flex-wrap lg:flex-row gap-4">
            <img
                src={user.userInfo.image.webp}
                alt={`${user.userInfo.username}'s avatar`}
                className="size-8 max-lg:mr-auto max-lg:my-auto"
            />
            <textarea
                name="comment"
                id="comment"
                placeholder="Add a comment..."
                rows={3}
                className="border border-gray-100 w-full rounded-md px-6 py-3 focus:outline-none focus:ring-1 focus:ring-purple-600 cursor-pointer max-lg:order-first"
            />
            <Button type="normal" text="send" onClick={() => {}} />
        </div>
    );
}

export default CommentForm;
