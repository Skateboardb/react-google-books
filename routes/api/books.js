const router = require('express').Router();
const methodController = require('../../controllers/methodController');

router
	.route('/')
	.get(methodController.findAll)
	.post(methodController.create);

router
	.route('/:id')
	.get(methodController.findById)
	.put(methodController.update)
	.delete(methodController.remove);

module.exports = router;
