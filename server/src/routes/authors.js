import { Router } from 'express';
import Table from '../table';

let router = Router();

let tableName = new Table('Authors');

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

router.get('/:authorid', (req, res) => {
	tableName
		.getOne(req.params.authorid)
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

export default router;
