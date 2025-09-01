import { Router } from 'express';
import { getAllComments, createComment, editComment, deleteComment } from '../controller/commentController';

const router = Router();

router.get('/', getAllComments);
router.post('/', createComment);
router.put('/:id', editComment);
router.delete('/:id', deleteComment);

export default router;