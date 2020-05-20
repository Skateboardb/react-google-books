const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newBook = new Schema({
	title: String,
	subtitle: String,
	authors: [String],
	description: String,
	img: {
		type: { String }
	},
	link: {
		type: String
	}
});

const books = mongoose.model('books', newBook);
module.exports = books;
