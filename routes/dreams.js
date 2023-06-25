var express = require('express');
var router = express.Router();

dreamsController = require('../controllers/dreams');

router.get('/', dreamsController.index);


module.exports = router;
