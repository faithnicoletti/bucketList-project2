const express = require('express');
const router = express.Router();

const dreamsController = require('../controllers/dreams');

router.get('/', dreamsController.index);
router.get('/new-career', dreamsController.new);
router.get('/new-travel', dreamsController.new);
router.get('/new-taste', dreamsController.new);
router.get('/new-hobby', dreamsController.new);
router.get('/new-fitness', dreamsController.new);
// router.post('/', dreamsController.createDream);
router.get('/careers', dreamsController.careers); // Route for careers schema
router.get('/travels', dreamsController.travels); // Route for travels schema
router.get('/taste', dreamsController.taste); // Route for taste schema
router.get('/hobbies', dreamsController.hobbies); // Route for hobbies schema
router.get('/fitness', dreamsController.fitness); // Route for fitness schema



module.exports = router;




