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
};
