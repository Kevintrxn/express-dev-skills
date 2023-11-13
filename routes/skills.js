const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.post('/', skillsController.create);
router.get('/:id', skillsController.show);
router.delete('/:id', skillsController.delete);
router.get('/:id/edit', skillsController.edit);
router.put('/:id', skillsController.update);

module.exports = router;
