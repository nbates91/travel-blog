import { Router } from 'express';
import Table from '../table';

let router = Router();

let tableName = new Table('Tags');

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

router.post('/', (req, res) => {
	tableName
		.insert(req.body)
		.then(results => {
			res.json(results[0]);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.put('/:tagid', (req, res) => {
	tableName
		.update(req.params.tagid, req.body)
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

export default router;
