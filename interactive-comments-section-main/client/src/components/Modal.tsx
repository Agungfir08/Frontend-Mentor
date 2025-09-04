import {Button} from "./Button.tsx";
import {useDeleteComment} from "../hooks/mutation.ts";
import {useModalContext} from "../hooks/useModalContext.tsx";

function Modal() {
    const {mutate: deleteComment, isPending: loading} = useDeleteComment()
    const {closeModal, targetId} = useModalContext()

    const handleDeleteComment = () => {
        if (!targetId) return;
        deleteComment({
            commentId: targetId,
        }, {
            onSuccess: () => {
                closeModal()
            }
        })
    }
    return (
        <div className='bg-gray-500/50 flex justify-center items-center h-screen z-10 fixed top-0 left-0 w-screen'>
            <article className='bg-white flex flex-col max-w-[400px] rounded-xl p-8 gap-5'>
                <h2 className='text-2xl font-medium text-grey-800'>Delete comment</h2>
                <p className='text-grey-500 text-base font-normal'>Are you sure you want to delete this comment? This
                    will remove the comment
                    and can't be undone.</p>
                <div className='flex gap-3.5 justify-between'>
                    <Button text='no, cancel' type='cancel' onClick={closeModal} grow={true} disabled={loading}/>
                    <Button text='yes, delete' type='delete' onClick={handleDeleteComment} grow={true}
                            disabled={loading}/>
                </div>
            </article>
        </div>
    );
}

export default Modal;