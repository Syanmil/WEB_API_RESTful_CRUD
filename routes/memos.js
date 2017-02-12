var express = require('express');
var router = express.Router();
var memoController = require('../controllers/memoController')

router.get('/', memoController.read);
router.post('/', memoController.create);
router.put('/:id', memoController.update);
router.delete('/:id', memoController.delete);


module.exports = router;
