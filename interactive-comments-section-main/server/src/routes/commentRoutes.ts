import {Router} from 'express';
import {
    createComment,
    deleteComment,
    editComment,
    getAllComments,
    upvoteComment
} from '../controller/commentController';

const router = Router();

router.get('/', getAllComments);
router.post('/', createComment);
router.put('/:id', editComment);
router.put('/:id/upvote', upvoteComment);
router.delete('/:id', deleteComment);

export default router;