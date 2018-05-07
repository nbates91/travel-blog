import { Router } from 'express';
import blogsRouter from './blogs';
import authorsRouter from './authors';
import tagsRouter from './tags';
import blogtagsRouter from './blogtags';

let router = Router();

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);
router.use('/tags', tagsRouter);
router.use('/blogtags', blogtagsRouter);

export default router;
