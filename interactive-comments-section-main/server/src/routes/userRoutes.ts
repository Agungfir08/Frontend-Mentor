import {Router} from 'express';
import {getCurrentUser} from "../controller/userController";

const router = Router();

router.get('/', getCurrentUser);

export default router;