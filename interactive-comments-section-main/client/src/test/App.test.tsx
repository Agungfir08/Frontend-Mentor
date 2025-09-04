import {fireEvent, render, screen, within} from '@testing-library/react';
import App from '../App';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import '@testing-library/jest-dom/vitest';

const mockUser = {
    id: 'u1',
    username: 'john_doe',
    userImage: 'avatar.png',
};

const otherUser = {
    id: 'u2',
    username: 'alice',
    userImage: 'avatar2.png',
};

const mockComments = [
    {
        id: 'c1',
        content: 'Hello world',
        createdAt: new Date().toISOString(),
        upvoted: 3,
        user: mockUser,
        replies: [],
        commentParentId: null,
    },
    {
        id: 'c2',
        content: 'Hi from Alice',
        createdAt: new Date().toISOString(),
        upvoted: 1,
        user: otherUser,
        replies: [],
        commentParentId: null,
    },
];

const createCommentSpy = vi.fn();
const replyCommentSpy = vi.fn();
const editCommentSpy = vi.fn();
const deleteCommentSpy = vi.fn();
const closeModalSpy = vi.fn();

const modalState = {
    isOpen: false as boolean,
    targetId: null as string | null,
};

vi.mock('../hooks/queries.ts', () => ({
    useComments: () => ({data: mockComments, isPending: false}),
    useUser: () => ({data: mockUser, isPending: false}),
}));

vi.mock('../hooks/mutation.ts', () => ({
    useCreateComment: () => ({mutate: createCommentSpy, isPending: false, isSuccess: false}),
    useReplyComment: () => ({mutate: replyCommentSpy, isPending: false}),
    useEditComment: () => ({mutate: editCommentSpy, isPending: false}),
    useUpvote: () => ({mutate: vi.fn(), isPending: false}),
    useDeleteComment: () => ({
        mutate: (payload: { commentId: string }, options?: { onSuccess?: () => void }) => {
            deleteCommentSpy(payload);
            const index = mockComments.findIndex(c => c.id === payload.commentId);
            if (index !== -1) {
                mockComments.splice(index, 1);
            }
            options?.onSuccess?.();
            modalState.isOpen = false;
            modalState.targetId = null;
        },
        isPending: false,
    }),
}));

vi.mock('../hooks/useModalContext.tsx', () => ({
    useModalContext: () => ({
        isOpen: modalState.isOpen,
        openModal: (id: string) => {
            modalState.isOpen = true;
            modalState.targetId = id;
        },
        closeModal: closeModalSpy,
        targetId: modalState.targetId,
    }),
}));

describe('App integration', () => {
    beforeEach(() => {
        createCommentSpy.mockClear();
        replyCommentSpy.mockClear();
        editCommentSpy.mockClear();
        deleteCommentSpy.mockClear();
        closeModalSpy.mockClear();
        modalState.isOpen = false;
        modalState.targetId = null;
    });

    it('renders comments and allows submitting a new comment', () => {
        render(<App/>);

        const username = screen.getByText(/john_doe/i)
        const comment = screen.getByText(/Hello world/i)
        const textarea = screen.getByPlaceholderText('Add a comment...') as HTMLTextAreaElement;
        const sendButton = screen.getByRole('button', {name: /send/i});

        expect(username).toBeInTheDocument();
        expect(comment).toBeInTheDocument();
        expect(textarea).toBeInTheDocument();

        fireEvent.change(textarea, {target: {value: 'New comment'}});
        fireEvent.click(sendButton);

        expect(createCommentSpy).toHaveBeenCalledWith({content: 'New comment', userId: mockUser.id});
    });

    it('allows replying to a non-current user comment', () => {
        render(<App/>);

        const card = screen.getByTestId('card-c2');
        const replyBtns = within(card).getAllByRole('button', {name: /reply/i});

        fireEvent.click(replyBtns[0]);

        const replyTextarea = within(card).getByPlaceholderText('Add a comment...') as HTMLTextAreaElement;
        const sendBtn = within(card).getByRole('button', {name: /send/i});

        fireEvent.change(replyTextarea, {target: {value: 'Replying to Alice'}});
        fireEvent.click(sendBtn);

        expect(replyCommentSpy).toHaveBeenCalledOnce();
        const call = replyCommentSpy.mock.calls[0];
        const payload = call[0];
        expect(payload).toMatchObject({
            commentContent: 'Replying to Alice',
            userId: mockUser.id,
            parentCommentId: 'c2',
            replyingUserId: otherUser.id,
        });
        expect(screen.getByText('Replying to Alice')).toBeInTheDocument();
    });

    it('allows editing the current user comment', () => {
        render(<App/>);

        const card = screen.getByTestId('card-c1');
        const editBtns = within(card).getAllByRole('button', {name: /edit/i});
        fireEvent.click(editBtns[0]);

        const editTextarea = within(card).getByPlaceholderText('Add a comment...') as HTMLTextAreaElement;
        fireEvent.change(editTextarea, {target: {value: 'Updated content'}});
        const updateButton = within(card).getByRole('button', {name: /update/i});
        fireEvent.click(updateButton);

        expect(editCommentSpy).toHaveBeenCalledWith({commentId: 'c1', content: 'Updated content'}, expect.any(Object));
        expect(screen.getByText('Updated content')).toBeInTheDocument();
    });

    it('shows delete modal and confirms deletion', () => {
        modalState.isOpen = true;
        modalState.targetId = 'c1';

        const {rerender} = render(<App/>);

        const confirmButton = screen.getByRole('button', {name: /yes, delete/i});

        fireEvent.click(confirmButton);

        rerender(<App/>);

        expect(deleteCommentSpy).toHaveBeenCalledWith({commentId: 'c1'});
        expect(closeModalSpy).toHaveBeenCalled();
        expect(screen.queryByTestId('card-c1')).not.toBeInTheDocument();
    });
});
