import { Router } from 'express';
import Table from '../table';

let router = Router();

let tableName = new Table('Blogs');

router.get('/', (req, res) => {
	tableName
		.getAll()
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get('/:blogid', (req, res) => {
	tableName
		.getOne(req.params.blogid)
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});
export default router;
