import { Router } from 'express';
import blogsRouter from './blogs';
import authorsRouter from './authors';
import tagsRouter from './tags';
import blogtagsRouter from './blogtags';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router
	.route('*')
	.post(tokenMiddleware, isLoggedIn)
	.put(tokenMiddleware, isLoggedIn)
	.delete(tokenMiddleware, isLoggedIn)
	.get(tokenMiddleware, isLoggedIn);

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);
router.use('/tags', tagsRouter);
router.use('/blogtags', blogtagsRouter);

export default router;
