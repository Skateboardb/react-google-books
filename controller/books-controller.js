require('dotenv').config();
const axios = require('axios');
const db = require('../models');
const path = require('path');

module.exports = function(router) {
	router.get('/api/books', (req, res) => {
		db.books
			.find()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/', (req, res) => {
		let query = req.body.title.replace(/\s/g, '+');
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_APIKEY}`
			)
			.then(response => {
				res.json(response.data.items);
			})
			.catch(err => {
				res.json({ error: error });
			});
	});

	router.post('/api/books', (req, res) => {
		db.books
			.create(req.body)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.delete('/api/books/:id', (req, res) => {
		db.books
			.findByIdAndDelete(req.params.id)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};
