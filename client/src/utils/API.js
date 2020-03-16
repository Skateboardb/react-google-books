import axios from 'axios';

export default {
	get: () => {
		return axios.get('/api/books');
	},
	search: title => {
		return axios.post('/search', { title: title });
	},
	save: bookData => {
		return axios.post('/api/books', bookData);
	},
	delete: id => {
		return axios.delete(`/api/books/${id}`);
	}
};
