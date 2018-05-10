import { Router } from 'express';
import Table from '../table';
import { isAdmin } from '../middleware/admin.mw';
import { tokenMiddleware } from '../middleware/auth.mw';
import { generateHash } from '../utils/bcrypt';

let router = Router();

let tableName = new Table('Authors');

//for this get request, it must run through tokenMiddleware to see if the user is logged in and then further checked to see if that user has a role of admin.
router.get('/', tokenMiddleware, isAdmin, (req, res) => {
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

router.post('/', (req, res) => {
	generateHash(req.body.password).then(hash => {
		tableName
			.insert({
				name: req.body.name,
				email: req.body.email,
				password: hash,
			})
			.then(results => {
				res.json(results).sendStatus(200);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	});
});

export default router;
