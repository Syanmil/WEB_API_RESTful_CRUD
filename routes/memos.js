var express = require('express');
var router = express.Router();
var memoController = require('../controllers/memoController')

router.get('/', memoController.read);

module.exports = router;
